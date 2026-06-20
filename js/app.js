const menuConfig = {
    'dashboard': { title: 'Báo cáo tổng quan', icon: 'fa-chart-line' },
    'projects': { title: 'Danh mục dự án', icon: 'fa-cubes' },
    'shtt': { title: 'Sở hữu trí tuệ', icon: 'fa-gavel' },
    'certs': { title: 'Chứng nhận & Tiêu chuẩn', icon: 'fa-award' }
};

function switchPage(page) {
    document.getElementById('page-title').innerText = menuConfig[page].title;
    document.getElementById('page-icon').innerHTML = `<i class="fa-solid ${menuConfig[page].icon}"></i>`;
    document.getElementById('content-frame').src = `pages/${page}.html`;
    
    document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active-link'));
    document.getElementById(`btn-${page}`).classList.add('active-link');
}

function handleLogin(e) {
    e.preventDefault();
    if(document.getElementById('username').value === 'admin' && document.getElementById('password').value === '123456') {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-application').classList.remove('hidden');
    } else {
        document.getElementById('login-error').classList.remove('hidden');
    }
}

function handleLogout() { location.reload(); }
function toggleModal(id) { const el = document.getElementById(id); el.classList.toggle('hidden'); el.classList.toggle('flex'); }

// BỘ PARSER DOANH THU THÔNG MINH PHÒNG CHỐNG LỖI 0Đ TRÊN DASHBOARD
function parseRevenueToNumber(revStr) {
    if (!revStr) return 0;
    let str = revStr.toString().toLowerCase().trim().replace(/đ|vnd|đồng/g, '').trim();
    let multiplier = 1;
    if (str.includes('tỷ') || str.includes('ty')) { multiplier = 1e9; str = str.replace(/tỷ|ty/g, '').trim(); }
    else if (str.includes('triệu') || str.includes('tr')) { multiplier = 1e6; str = str.replace(/triệu|tr/g, '').trim(); }
    str = str.replace(/\./g, '').replace(/,/g, '.');
    return (parseFloat(str) || 0) * multiplier;
}

function formatRevenueToString(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(1).replace(/\.0$/, '') + " tỷ VNĐ";
    if (num >= 1e6) return (num / 1e6).toFixed(0) + " triệu VNĐ";
    return num.toLocaleString('vi-VN') + " Đ";
}

function submitNewProject(e) {
    e.preventDefault();
    const projects = JSON.parse(localStorage.getItem('db_projects')) || [];
    const newP = {
        id: document.getElementById('add-id').value.trim().toUpperCase(),
        name: document.getElementById('add-name').value.trim(),
        company: document.getElementById('add-company').value.trim(),
        sector: document.getElementById('add-sector').value,
        manager: document.getElementById('add-manager').value.trim(),
        phone: document.getElementById('add-phone').value.trim(),
        status: 'Còn hoạt động',
        year: new Date().getFullYear(),
        revenue: document.getElementById('add-revenue').value.trim() || '0 Đ'
    };
    projects.push(newP);
    localStorage.setItem('db_projects', JSON.stringify(projects));
    
    const shtt = JSON.parse(localStorage.getItem('db_shtt')) || [];
    shtt.push({ id: newP.id, projectName: newP.name, type: "SC", name: `Giải pháp uơm tạo ${newP.name}`, docNum: "-", docDate: "-", certNum: "-", certDate: "-", state: "CNĐ/TĐHT", source: "VU" });
    localStorage.setItem('db_shtt', JSON.stringify(shtt));

    const certs = JSON.parse(localStorage.getItem('db_certs')) || [];
    certs.push({ id: newP.id, companyName: newP.company, type: "DN Khoa học & Công nghệ", state: "Chưa nộp đơn", note: "Khởi tạo" });
    localStorage.setItem('db_certs', JSON.stringify(certs));

    toggleModal('project-modal');
    document.getElementById('content-frame').contentWindow.location.reload();
}