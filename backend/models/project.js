const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true, trim: true, default: function() { return this._id.toString(); } },
    name: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    leader: { type: String, required: true, trim: true },
    manager: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    sector: { type: String, required: true },
    status: { type: String, default: 'Còn hoạt động' },
    year: { type: Number, default: () => new Date().getFullYear() },
    contract: { type: String, required: true },
    signDate: { type: String, required: true },
    stage: { type: String, required: true },
    expireDate: { type: String, required: true },
    intro: { type: String, default: '' },
    product: { type: String, default: '' },
    supports: [{ type: String }],
    revenue: { type: String, default: '0 Đ' },
    metrics: {
        members: { type: Number, default: 1 },
        partners: { type: Number, default: 0 },
        revenue: { type: String, default: '0 Đ' },
        funding: { type: String, default: '0 Đ' },
        products: { type: Number, default: 1 }
    },
    partners_vn: [{ type: String }],
    highlights: [{ date: String, text: String }],
    awards: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
