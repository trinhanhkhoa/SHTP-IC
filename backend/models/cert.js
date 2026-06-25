const mongoose = require('mongoose');

const CertSchema = new mongoose.Schema({
    id: { type: String, required: true, uppercase: true, trim: true },
    companyName: { type: String, required: true },
    type: { type: String, required: true },
    state: { type: String, required: true },
    note: { type: String, default: '-' }
}, { timestamps: true });

module.exports = mongoose.model('Cert', CertSchema);