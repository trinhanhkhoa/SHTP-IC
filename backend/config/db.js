//Kết nối Mongodb
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`[MongoDB] Đã kết nối thành công đến: ${conn.connection.host}`);
    } catch (error) {
        console.error(`[Error] Lỗi kết nối MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;