const API_URL = 'http://localhost:8080/api';

// Hàm cấu hình cấu trúc Header đính kèm token tự động cho tất cả cuộc gọi fetch
function getAuthHeaders() {
    const token = sessionStorage.getItem('shtp_token');
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
}

// Logic xử lý Đăng nhập chéo thông qua API backend
async function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        
        if (res.ok) {
            sessionStorage.setItem('shtp_token', data.token);
            sessionStorage.setItem('shtp_user', data.username);
            document.getElementById('login-screen').classList.add('hidden');
            document.getElementById('main-application').classList.remove('hidden');
            switchPage('dashboard');
        } else {
            document.getElementById('login-error').classList.remove('hidden');
        }
    } catch (err) {
        alert("Không thể kết nối đến máy chủ backend!");
    }
}

function handleLogout() {
    sessionStorage.clear();
    location.reload();
}

async function apiRequest(path, options = {}) {
    const res = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: {
            ...getAuthHeaders(),
            ...(options.headers || {})
        }
    });

    const data = await res.json().catch(() => null);
    if (!res.ok) {
        throw new Error(data?.msg || data?.error || 'Không thể xử lý yêu cầu dữ liệu');
    }
    return data;
}

function apiGet(path) {
    return apiRequest(path);
}

function apiPost(path, body) {
    return apiRequest(path, {
        method: 'POST',
        body: JSON.stringify(body)
    });
}

function switchPage(page) {
    const pageConfig = {
        dashboard: { title: 'Báo cáo tổng quan', icon: 'fa-chart-line' },
        projects: { title: 'Danh mục dự án', icon: 'fa-cubes' },
        shtt: { title: 'Sở hữu trí tuệ', icon: 'fa-gavel' },
        certs: { title: 'Chứng nhận & tiêu chuẩn', icon: 'fa-award' }
    };

    const config = pageConfig[page] || pageConfig.dashboard;
    document.getElementById('content-frame').src = `pages/${page}.html`;
    document.getElementById('page-title').textContent = config.title;
    document.getElementById('page-icon').innerHTML = `<i class="fa-solid ${config.icon}"></i>`;

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active-link'));
    const activeButton = document.getElementById(`btn-${page}`);
    if (activeButton) activeButton.classList.add('active-link');
}

// KHỐI TIẾN TRÌNH QUY ĐỔI SỐ LIỆU ĐỒNG BỘ TRÊN GIAO DIỆN
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
