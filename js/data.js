// DỮ LIỆU THÔ SHEET 2: DANH MỤC DỰ ÁN
let db_projects = [
    { id: "DA001", name: "Hệ thống quản lý chuỗi cung ứng IoT", sector: "IoT", status: "Còn hoạt động", year: 2021, intro: "Ứng dụng cảm biến thông minh", revenue: 1500000000 },
    { id: "DA002", name: "Trợ lý ảo y tế ứng dụng AI", sector: "AI", status: "Còn hoạt động", year: 2022, intro: "Chẩn đoán hình ảnh từ xa", revenue: 2300000000 },
    { id: "DA003", name: "Nền tảng thanh toán Fintech", sector: "Công nghệ số", status: "Tạm ngừng", year: 2020, intro: "Giải pháp ví điện tử thế hệ mới", revenue: 0 },
    { id: "DA004", name: "Chế phẩm sinh học xử lý nước thải", sector: "Sinh học", status: "Còn hoạt động", year: 2023, intro: "Vi sinh tự nhiên bảo vệ môi trường", revenue: 850000000 },
    { id: "DA005", name: "Nông nghiệp thông minh dựa trên AI", sector: "AI", status: "Ngưng hoạt động", year: 2021, intro: "Tối ưu lượng nước tưới tự động", revenue: 200000000 },
    { id: "DA006", name: "Sàn thương mại điện tử đặc sản", sector: "Công nghệ số", status: "Còn hoạt động", year: 2024, intro: "Kết nối nông sản vùng miền", revenue: 1200000000 }
];

// DỮ LIỆU THÔ SHEET 3: TIẾN ĐỘ SỞ HỮU TRÍ TUỆ
let db_shtt = [
    { id: "DA001", type: "Bằng sáng chế", name: "Cảm biến mesh network tiết kiệm pin", state: "Đã cấp giấy" },
    { id: "DA001", type: "Nhãn hiệu", name: "Logo IoT-Chain", state: "Đã cấp giấy" },
    { id: "DA002", type: "Bản quyền tác giả", name: "Thuật toán nhận diện khối u AI-Health", state: "Đã cấp giấy" },
    { id: "DA002", type: "Bằng sáng chế", name: "Thiết bị quét biểu mô tự động", state: "Đã nộp đơn" },
    { id: "DA004", type: "Bằng sáng chế", name: "Công thức nuôi cấy chủng vi khuẩn tự hoại", state: "Đã cấp giấy" },
    { id: "DA006", type: "Nhãn hiệu", name: "Thương hiệu Chợ Xanh Online", state: "Chưa nộp đơn" }
];

// DỮ LIỆU THÔ SHEET 4: CHỨNG NHẬN DOANH NGHIỆP KH&CN & TIÊU CHUẨN
let db_certs = [
    { id: "DA001", type: "DN Khoa học & Công nghệ", state: "Đã cấp giấy", note: "CN-2023-XYZ" },
    { id: "DA001", type: "ISO", state: "Đã cấp giấy", note: "ISO 9001:2015" },
    { id: "DA002", type: "DN Khoa học & Công nghệ", state: "Đã cấp giấy", note: "CN-2024-ABC" },
    { id: "DA003", type: "DN Khoa học & Công nghệ", state: "Đã nộp đơn", note: "Đang thẩm định hồ sơ" },
    { id: "DA004", type: "TCCS", state: "Đã cấp giấy", note: "TCCS 01:2023/BIO" },
    { id: "DA006", type: "DN Khoa học & Công nghệ", state: "Chưa nộp đơn", note: "Đang hoàn thiện đề tài" }
];