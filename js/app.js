// =================================================================
// LOGIC HÀM DIỀU HƯỚNG VÀ PHÒNG VỆ CHUNG TOÀN HỆ THỐNG SHTP-IC
// =================================================================
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
function toggleModal(id) { const el = document.getElementById(id); if (el) { el.classList.toggle('hidden'); el.classList.toggle('flex'); } }

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

// -----------------------------------------------------------------
// HÀM 1: THÊM MỚI DỰ ÁN TỔNG THỂ (DÙNG CHO DASHBOARD & PROJECTS)
// -----------------------------------------------------------------
function submitNewProject(e) {
    e.preventDefault();
    const projects = JSON.parse(localStorage.getItem('db_projects')) || [];
    const targetId = document.getElementById('add-id').value.trim().toUpperCase();

    if (projects.some(p => p.id === targetId)) { alert("Mã dự án này đã tồn tại!"); return; }

    const checkedSupports = [];
    document.querySelectorAll('input[name="supports"]:checked').forEach(checkbox => checkedSupports.push(checkbox.value));

    const newProjectData = {
        id: targetId,
        name: document.getElementById('add-name').value.trim(),
        company: document.getElementById('add-company').value.trim(),
        manager: document.getElementById('add-manager').value.trim(),
        phone: document.getElementById('add-phone').value.trim(),
        sector: document.getElementById('add-sector').value,
        status: 'Còn hoạt động',
        year: new Date().getFullYear(),
        contract: document.getElementById('add-contract').value.trim() || 'Hợp đồng số 07/HĐUT-VUDN',
        contractDate: document.getElementById('add-contractDate').value.trim() || '2026 - 2029',
        intro: document.getElementById('add-intro').value.trim() || 'Thông tin giới thiệu tổng quan đang được cập nhật...',
        product: document.getElementById('add-product').value.trim() || 'Thông tin sản phẩm đang được cập nhật...',
        supports: checkedSupports,
        revenue: document.getElementById('add-revenue').value.trim() || '0 Đ',
        metrics: {
            members: parseInt(document.getElementById('add-members').value) || 1,
            partners: parseInt(document.getElementById('add-partners').value) || 0,
            revenue: document.getElementById('add-revenue').value.trim() || '0 Đ',
            funding: document.getElementById('add-funding').value.trim() || '0 Đ',
            products: parseInt(document.getElementById('add-products').value) || 1
        },
        partners_vn: [], highlights: [{ date: "06/2026", text: "Gia nhập chương trình" }], awards: []
    };

    projects.push(newProjectData);
    localStorage.setItem('db_projects', JSON.stringify(projects));
    
    toggleModal('project-modal');
    e.target.reset();
    document.getElementById('content-frame').contentWindow.location.reload();
}

// -----------------------------------------------------------------
// HÀM 2: THÊM RIÊNG VĂN BẰNG SHTT (GỌI TỪ TRANG CON SHTT.HTML)
// -----------------------------------------------------------------
function submitNewShttData(newShtt) {
    const shttList = JSON.parse(localStorage.getItem('db_shtt')) || [];
    shttList.push(newShtt);
    localStorage.setItem('db_shtt', JSON.stringify(shttList));
    return true;
}

// -----------------------------------------------------------------
// HÀM 3: THÊM RIÊNG HỒ SƠ CHỨNG NHẬN (GỌI TỪ TRANG CON CERTS.HTML)
// -----------------------------------------------------------------
function submitNewCertData(newCert) {
    const certsList = JSON.parse(localStorage.getItem('db_certs')) || [];
    certsList.push(newCert);
    localStorage.setItem('db_certs', JSON.stringify(certsList));
    return true;
}