const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const auth = require('./controllers/authController');
const data = require('./controllers/dataController');

dotenv.config();
const app = express();

// Khởi động kết nối cơ sở dữ liệu MongoDB
connectDB();

// Cấu hình Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// ĐỊNH NGHĨA TUYẾN ĐƯỜNG API (API ROUTES)
app.post('/api/auth/login', auth.login);

// Nhóm các API được bảo vệ bằng hệ xác thực Token
app.get('/api/projects', auth.protect, data.getAllProjects);
app.post('/api/projects', auth.protect, data.createProject);

app.get('/api/shtt', auth.protect, data.getAllShtt);
app.post('/api/shtt', auth.protect, data.createShtt);

app.get('/api/certs', auth.protect, data.getAllCerts);
app.post('/api/certs', auth.protect, data.createCert);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`[Server] Hệ thống backend đang chạy tại cổng: ${PORT}`));