const Project = require('../models/Project');
const Shtt = require('../models/Shtt');
const Cert = require('../models/Cert');

// THAO TÁC NGHIỆP VỤ DỰ ÁN (PROJECTS)
exports.getAllProjects = async (req, res) => {
    try { res.json(await Project.find()); } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.createProject = async (req, res) => {
    try {
        if (!req.body.id) delete req.body.id;
        if (req.body.id) {
            const existing = await Project.findOne({ id: req.body.id });
            if (existing) return res.status(400).json({ msg: 'Mã dự án này đã tồn tại!' });
        }
        const newProj = new Project(req.body);
        res.status(201).json(await newProj.save());
    } catch (err) { res.status(500).json({ error: err.message }); }
};

// THAO TÁC NGHIỆP VỤ SỞ HỮU TRÍ TUỆ (SHTT)
exports.getAllShtt = async (req, res) => {
    try { res.json(await Shtt.find()); } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.createShtt = async (req, res) => {
    try { res.status(201).json(await new Shtt(req.body).save()); } catch (err) { res.status(500).json({ error: err.message }); }
};

// THAO TÁC NGHIỆP VỤ CHỨNG NHẬN (CERTS)
exports.getAllCerts = async (req, res) => {
    try { res.json(await Cert.find()); } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.createCert = async (req, res) => {
    try { res.status(201).json(await new Cert(req.body).save()); } catch (err) { res.status(500).json({ error: err.message }); }
};
