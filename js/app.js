// Các hàm handleLogin, handleLogout, switchPage giữ nguyên...
function handleLogin(e) {
    e.preventDefault();
    if (document.getElementById('username').value.trim() === 'admin' && document.getElementById('password').value === '123456') {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-application').classList.remove('hidden');
        document.getElementById('content-frame').contentWindow.location.reload();
    } else {
        document.getElementById('login-error').classList.remove('hidden');
    }
}
function handleLogout() {
    document.getElementById('main-application').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
}
function toggleMobileMenu() {
    document.getElementById('nav-container').classList.toggle('hidden');
    document.getElementById('nav-container').classList.toggle('flex');
}
function switchPage(pageName) {
    document.getElementById('content-frame').src = `pages/${pageName}.html`;
    document.querySelectorAll('.tab-btn').forEach(el => {
        el.classList.remove('bg-indigo-600', 'text-white');
        el.classList.add('text-gray-300', 'hover:text-white');
    });
    document.getElementById(`btn-${pageName}`).classList.add('bg-indigo-600', 'text-white');
}
function toggleModal(id) {
    const modal = document.getElementById(id);
    modal.classList.toggle('hidden'); modal.classList.toggle('flex');
}

function saveToStorage() {
    localStorage.setItem('db_projects', JSON.stringify(db_projects));
    localStorage.setItem('db_shtt', JSON.stringify(db_shtt));
    localStorage.setItem('db_certs', JSON.stringify(db_certs));
}

function addNewProjectData(newProj) {
    if (db_projects.some(p => p.id === newProj.id)) {
        alert("Mã dự án này đã tồn tại!");
        return false;
    }
    db_projects.push(newProj);
    db_shtt.push({ id: newProj.id, projectName: newProj.name, type: "SC", name: `TSTT thuộc ${newProj.name}`, docNum: "", docDate: "", certNum: "", certDate: "", state: "CNĐ/TĐHT", source: "VU" });
    db_certs.push({ id: newProj.id, companyName: newProj.company, type: "DN Khoa học & Công nghệ", state: "Chưa nộp đơn", note: "Hồ sơ cơ sở" });
    
    saveToStorage();
    document.getElementById('content-frame').contentWindow.location.reload();
    return true;
}

function addNewShttData(newShtt) {
    const foundProj = db_projects.find(p => p.id === newShtt.id);
    if (!foundProj) { alert("Mã dự án không tồn tại!"); return false; }
    newShtt.projectName = foundProj.name;
    db_shtt.push(newShtt);
    saveToStorage();
    document.getElementById('content-frame').contentWindow.location.reload();
    return true;
}

function addNewCertData(newCert) {
    const foundProj = db_projects.find(p => p.id === newCert.id);
    if (!foundProj) { alert("Mã dự án không tồn tại!"); return false; }
    newCert.companyName = foundProj.company;
    db_certs.push(newCert);
    saveToStorage();
    document.getElementById('content-frame').contentWindow.location.reload();
    return true;
}