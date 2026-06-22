// KHO DỮ LIỆU MẪU ĐA DẠNG NÂNG CẤP TOÀN DIỆN CHO HỆ THỐNG SHTP-IC
const default_projects = [
    { 
        id: "DA001", 
        name: "AgriTech Việt Nam", 
        company: "Công ty Cổ phần Công nghệ số AgriTech Việt Nam", 
        leader: "Nguyễn Văn A", // Chủ nhiệm phía DN
        manager: "Phạm Văn B", // Chuyên viên SHTP-IC phụ trách
        phone: "0901234567", 
        sector: "IoT, Công nghệ số", 
        status: "Còn hoạt động", 
        year: 2024,
        contract: "07", 
        signDate: "2024-01-01",
        stage: "Ươm tạo",
        expireDate: "2025-01-01",
        intro: "AgriTech Việt Nam là doanh nghiệp khởi nghiệp trong lĩnh vực nông nghiệp công nghệ cao, chuyên cung cấp các giải pháp IoT giúp tối ưu hóa quy trình canh tác và quản lý trang trại.",
        product: "Hệ sinh thái AgriTech IoT gồm cảm biến đo môi trường, thiết bị điều khiển tự động...",
        supports: ["Mô hình kinh doanh", "Thương hiệu", "SHTT"],
        metrics: { members: 15, partners: 120, revenue: "5.2 tỷ", funding: "10 tỷ", products: 3 },
        partners_vn: ["Tập đoàn Lộc Trời"], highlights: [], awards: []
    },
    { 
        id: "DA002", 
        name: "BioCare Vietnam", 
        company: "Công ty TNHH Giải pháp Sinh học BioCare", 
        leader: "Trần Thị B", 
        manager: "Lê Thị C", 
        phone: "0912345678", 
        sector: "Sinh học", 
        status: "Còn hoạt động", 
        year: 2023,
        contract: "12",
        signDate: "2023-06-15",
        stage: "Tăng tốc",
        expireDate: "2024-12-15",
        intro: "BioCare Vietnam tập trung nghiên cứu và sản xuất các chế phẩm sinh học phục vụ y tế và nông nghiệp sạch.",
        product: "Dòng sản phẩm chế phẩm vi sinh kháng khuẩn phục vụ khử trùng bệnh viện...",
        supports: ["Mô hình kinh doanh", "Thử nghiệm"],
        metrics: { members: 8, partners: 45, revenue: "1.8 tỷ", funding: "2 tỷ", products: 2 },
        partners_vn: [], highlights: [], awards: []
    },
    { 
        id: "DA003", 
        name: "Fintech Vi-Pay", 
        company: "Công ty Cổ phần Công nghệ Tài chính Vi-Pay", 
        leader: "Lê Văn C", 
        manager: "Nguyễn Văn D", 
        phone: "0923456789", 
        sector: "Công nghệ số", 
        status: "Tạm ngừng", 
        year: 2026,
        contract: "02",
        signDate: "2026-03-01",
        stage: "Tiền ươm tạo",
        expireDate: "2026-09-01",
        intro: "Nền tảng thanh toán Fintech Vi-Pay là dự án phát triển giải pháp ví điện tử và cổng thanh toán thế hệ mới.",
        product: "", supports: [], metrics: { members: 2, partners: 0, revenue: "0 Đ", funding: "0 Đ", products: 0 },
        partners_vn: [], highlights: [], awards: []
    },
    { 
        id: "DA004", 
        name: "MedTech Việt Nam", 
        company: "Công ty Cổ phần Công nghệ số MedTech Việt Nam", 
        leader: "Ngô Văn N", // Chủ nhiệm phía DN
        manager: "Phạm Văn B", // Chuyên viên SHTP-IC phụ trách
        phone: "0901234777", 
        sector: "Công nghệ số", 
        status: "Còn hoạt động", 
        year: 2024,
        contract: "18", 
        signDate: "2024-01-01",
        stage: "Tăng tốc",
        expireDate: "2025-07-01",
        intro: "MedTech Việt Nam là doanh nghiệp khởi nghiệp trong lĩnh vực nông nghiệp công nghệ cao, chuyên cung cấp các giải pháp IoT giúp tối ưu hóa quy trình canh tác và quản lý trang trại.",
        product: "Hệ sinh thái MedTech IoT gồm cảm biến đo môi trường, thiết bị điều khiển tự động...",
        supports: ["Mô hình kinh doanh", "Thương hiệu", "SHTT"],
        metrics: { members: 15, partners: 120, revenue: "5.2 tỷ", funding: "10 tỷ", products: 3 },
        partners_vn: ["Tập đoàn Lộc Trời"], highlights: [], awards: []
    },
];

// DỮ LIỆU MẪU SHTT ĐỒNG BỘ
const default_shtt = [
    { id: "DA001", projectName: "AgriTech Việt Nam", type: "SC", name: "Cảm biến mesh network tiết kiệm pin", docNum: "1-2023-00142", docDate: "2023-04-12", certNum: "1-0040983-000", certDate: "2025-01-15", state: "Cấp bằng", source: "VU" },
    { id: "DA001", projectName: "AgriTech Việt Nam", type: "NH", name: "Logo IoT-Chain và nhận diện", docNum: "4-2023-45122", docDate: "2023-06-20", certNum: "4-0021455-000", certDate: "2024-11-02", state: "Cấp bằng", source: "DA" },
    { id: "DA004", projectName: "MedTech Việt Nam", type: "SC", name: "Cảm biến môi trường IoT", docNum: "1-2024-00142", docDate: "2024-04-12", certNum: "1-0040983-000", certDate: "2026-01-15", state: "Cấp bằng", source: "VU" },
    { id: "DA002", projectName: "Medicom AI", type: "BQTG", name: "Thuật toán nhận diện khối u AI-Health", docNum: "2345/2024/QTG", docDate: "2024-02-11", certNum: "2345/2024/QTG", certDate: "2024-03-01", state: "Cấp bằng", source: "VU" },
    { id: "DA003", projectName: "SmartLogi Drone", type: "SC", name: "Cơ chế cân bằng con quay hồi chuyển Drone tải nặng", docNum: "1-2025-00985", docDate: "2025-02-20", certNum: "", certDate: "", state: "Đã nộp đơn", source: "VU" }
];

// DỮ LIỆU MẪU CHỨNG NHẬN ĐỒNG BỘ
const default_certs = [
    { id: "DA001", companyName: "Công ty Cổ phần Công nghệ số AgriTech Việt Nam", type: "DN Khoa học & Công nghệ", state: "Đã cấp giấy", note: "CN-2023-XYZ" },
    { id: "DA002", companyName: "Công ty TNHH Thiết bị Y tế trí tuệ nhân tạo Medicom", type: "DN Khoa học & Công nghệ", state: "Đã cấp giấy", note: "CN-2025-ABC" },
    { id: "DA003", companyName: "Công ty Cổ phần An ninh mạng Alpha", type: "ISO", state: "Đã cấp giấy", note: "ISO 27001:2022" }
];

// Tự động kiểm tra độ dài dữ liệu để xóa bộ nhớ đệm và nạp kho dữ liệu mẫu lớn mới tinh này
if (!localStorage.getItem('db_projects') || JSON.parse(localStorage.getItem('db_projects')).length < 8) {
    localStorage.clear();
    localStorage.setItem('db_projects', JSON.stringify(default_projects));
    localStorage.setItem('db_shtt', JSON.stringify(default_shtt));
    localStorage.setItem('db_certs', JSON.stringify(default_certs));
}

let db_projects = JSON.parse(localStorage.getItem('db_projects'));
let db_shtt = JSON.parse(localStorage.getItem('db_shtt'));
let db_certs = JSON.parse(localStorage.getItem('db_certs'));