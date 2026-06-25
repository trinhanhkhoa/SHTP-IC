const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Đăng nhập hệ thống & cấp phát khóa xác thực JWT
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Khởi tạo tài khoản quản trị mặc định nếu database trống
        let user = await User.findOne({ username });
        if (!user && username === 'admin') {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash('123456', salt);
            user = await User.create({ username: 'admin', password: hashedPassword });
        }

        if (!user) return res.status(400).json({ msg: 'Tài khoản không tồn tại!' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Mật khẩu hệ thống không chính xác!' });

        // Tạo mã JWT token thời hạn 24 giờ
        const token = jwt.sign({ id: user._index, username: user.username }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.json({ token, username: user.username });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Middleware kiểm tra quyền và giải mã Token bảo vệ các API nghiệp vụ
exports.protect = (req, res, next) => {
    let token = req.headers['authorization'];
    if (!token) return res.status(401).json({ msg: 'Yêu cầu từ chối. Thiếu mã Token xác thực!' });
    
    try {
        if (token.startsWith('Bearer ')) token = token.slice(7, token.length).trimLeft();
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Khóa Token hết hạn hoặc không hợp lệ!' });
    }
};