const mongoose = require('mongoose');

const ShttSchema = new mongoose.Schema({
    id: { type: String, required: true, uppercase: true, trim: true }, // Mã liên kết dự án
    projectName: { type: String, required: true },
    type: { type: String, required: true }, // SC, GPHI, BQTG, NH
    name: { type: String, required: true, trim: true },
    docNum: { type: String, default: '-' },
    docDate: { type: String, default: '' },
    state: { type: String, required: true } // Chưa nộp đơn, Đã nộp đơn, Đã cấp giấy
}, { timestamps: true });

module.exports = mongoose.model('Shtt', ShttSchema);
