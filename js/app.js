function handleLogin(e) {
    e.preventDefault();
    if (document.getElementById('username').value.trim() === 'admin' && document.getElementById('password').value === '123456') {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-application').classList.remove('hidden');
        // Tự động tải lại nội dung trang iframe hiện tại sau khi đăng nhập để đồng bộ dữ liệu
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
    const nav = document.getElementById('nav-container');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
}

// HÀM CHUYỂN TRANG: Chỉ cần thay đổi đường dẫn (src) của Iframe
function switchPage(pageName) {
    document.getElementById('content-frame').src = `pages/${pageName}.html`;
    
    document.querySelectorAll('.tab-btn').forEach(el => {
        el.classList.remove('bg-indigo-600', 'text-white');
        el.classList.add('text-gray-300', 'hover:text-white');
    });
    document.getElementById(`btn-${pageName}`).classList.add('bg-indigo-600', 'text-white');
    if (window.innerWidth < 768) toggleMobileMenu();
}