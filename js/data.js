// KHO DỮ LIỆU MẪU ĐA DẠNG NÂNG CẤP TOÀN DIỆN CHO HỆ THỐNG SHTP-IC
const default_projects = [
    { 
        id: "DA001", 
        name: "AgriTech Việt Nam", 
        company: "Công ty Cổ phần Công nghệ số AgriTech Việt Nam", 
        manager: "Nguyễn Văn A", 
        phone: "0901234567", 
        sector: "IoT, Công nghệ số", 
        status: "Còn hoạt động", 
        year: 2024,
        contract: "Hợp đồng số 07/HĐUT-VUDN",
        contractDate: "01/01/2024 - 31/12/2026",
        intro: "AgriTech Việt Nam là doanh nghiệp khởi nghiệp trong lĩnh vực nông nghiệp công nghệ cao, chuyên cung cấp các giải pháp IoT giúp tối ưu hóa quy trình canh tác và quản lý trang trại. Chúng tôi ứng dụng các công nghệ cảm biến, trí tuệ nhân tạo và dữ liệu lớn để giám sát môi trường, phân tích dữ liệu và đưa ra khuyến nghị chính xác cho người nông dân.",
        product: "Hệ sinh thái AgriTech IoT gồm cảm biến đo môi trường, thiết bị điều khiển tự động và nền tảng phần mềm quản lý nông nghiệp thông minh. Giải pháp giúp giám sát độ ẩm, nhiệt độ, dinh dưỡng đất, dự báo sâu bệnh và tự động hóa tưới tiêu, bón phân.",
        supports: ["Mô hình kinh doanh", "Thương hiệu", "Thị trường", "Đầu tư", "Khách hàng", "SHTT", "Thử nghiệm", "Gọi vốn"],
        metrics: { members: 15, partners: 120, revenue: "5.2 tỷ", funding: "10 tỷ", products: 3 },
        partners_vn: ["Công ty CP Nông nghiệp VINASEED", "Tập đoàn Lộc Trời", "Hợp tác xã Rau sạch Đà Lạt"],
        partners_intl: ["Kubota Corporation (Nhật Bản)", "Olam International (Singapore)"],
        highlights: [
            { date: "01/2024", text: "Tham gia Triển lãm Techfest Việt Nam 2024" },
            { date: "04/2024", text: "Ký kết hợp tác chiến lược với Tập đoàn Lộc Trời" }
        ],
        awards: ["Top 10 Startup Việt 2024", "Giải Nhì Cuộc thi Khởi nghiệp Đổi mới sáng tạo Quốc gia 2024"]
    },
    { 
        id: "DA002", 
        name: "BioCare Vietnam", 
        company: "Công ty TNHH Giải pháp Sinh học BioCare", 
        manager: "Trần Thị B", 
        phone: "0912345678", 
        sector: "Sinh học", 
        status: "Còn hoạt động", 
        year: 2023,
        contract: "Hợp đồng số 12/HĐUT-VUDN",
        contractDate: "15/06/2023 - 15/06/2026",
        intro: "BioCare Vietnam tập trung nghiên cứu và sản xuất các chế phẩm sinh học phục vụ y tế và nông nghiệp sạch. Sứ mệnh của chúng tôi là thay thế hoàn toàn các hóa chất độc hại bằng các giải pháp sinh học an toàn, thân thiện với môi trường, góp phần bảo vệ sức khỏe cộng đồng.",
        product: "Dòng sản phẩm chế phẩm vi sinh kháng khuẩn phục vụ khử trùng bệnh viện và các chế phẩm sinh học kích thích tăng trưởng rễ tự nhiên cho cây ăn trái.",
        supports: ["Mô hình kinh doanh", "Thị trường", "Thử nghiệm"],
        metrics: { members: 8, partners: 45, revenue: "1.8 tỷ", funding: "2 tỷ", products: 2 },
        partners_vn: ["Bệnh viện Đa khoa TPHCM", "Chuỗi nhà thuốc Pharmacity"],
        partners_intl: ["BioPharma (Hàn Quốc)"],
        highlights: [{ date: "08/2023", text: "Đạt chứng nhận kiểm nghiệm an toàn cấp quốc gia" }],
        awards: ["Sản phẩm Vàng vì sức khỏe cộng đồng 2024"]
    },
    { 
        id: "DA003", 
        name: "Fintech Vi-Pay", 
        company: "Công ty Cổ phần Công nghệ Tài chính Vi-Pay", 
        manager: "Lê Văn C", 
        phone: "0923456789", 
        sector: "Công nghệ số", 
        status: "Tạm ngừng", 
        year: 2026,
        contract: "Hợp đồng số 02/HĐUT-VUDN",
        contractDate: "01/03/2026 - 01/03/2028",
        intro: "Nền tảng thanh toán Fintech Vi-Pay là dự án phát triển giải pháp ví điện tử và cổng thanh toán thế hệ mới, hỗ trợ tích hợp nhanh cho các doanh nghiệp vừa và nhỏ (SMEs). Dự án hiện đang trong giai đoạn hoàn thiện hồ sơ thành lập và xây dựng kiến trúc hệ thống cốt lõi."
        // Khuyết thông tin phục vụ kiểm thử Empty State
    },
    { 
        id: "DA004", 
        name: "Medicom AI", 
        company: "Công ty TNHH Thiết bị Y tế trí tuệ nhân tạo Medicom", 
        manager: "Phạm Minh D", 
        phone: "0934567890", 
        sector: "AI, Sinh học", 
        status: "Còn hoạt động", 
        year: 2024,
        contract: "Hợp đồng số 22/HĐUT-VUDN",
        contractDate: "10/10/2024 - 10/10/2027",
        intro: "Medicom AI phát triển các giải pháp hỗ trợ chẩn đoán hình ảnh y khoa áp dụng các mô hình học sâu (Deep Learning). Hệ thống giúp các bác sĩ X-quang phát hiện sớm các tổn thương phổi, khối u và dị tật mạch máu với độ chính xác cao.",
        product: "Phần mềm MedicomVision tích hợp trực tiếp vào hệ thống PACS của bệnh viện, cho phép phân tích ảnh ảnh y tế thời gian thực và đưa ra các cảnh báo rủi ro tự động.",
        supports: ["Thương hiệu", "SHTT", "Thử nghiệm"],
        metrics: { members: 11, partners: 30, revenue: "3.1 tỷ", funding: "5 tỷ", products: 1 },
        partners_vn: ["Bệnh viện Chợ Rẫy", "Bệnh viện Đại học Y Dược TPHCM"],
        partners_intl: ["NVIDIA Inception Program"],
        highlights: [{ date: "11/2024", text: "Thử nghiệm thành công tại 3 bệnh viện lớn miền Nam" }],
        awards: ["Giải Nhất cuộc thi AI Challenge TPHCM 2024"]
    },
    { 
        id: "DA005", 
        name: "SmartLogi Drone", 
        company: "Công ty Cổ phần Thiết bị Bay Thông minh SmartLogi", 
        manager: "Hoàng Thị E", 
        phone: "0956789012", 
        sector: "IoT, AI", 
        status: "Còn hoạt động", 
        year: 2025,
        contract: "Hợp đồng số 15/HĐUT-VUDN",
        contractDate: "15/01/2025 - 15/01/2028",
        intro: "SmartLogi chuyên thiết kế, lắp ráp và lập trình các dòng thiết bị bay không người lái (UAV/Drone) phục vụ công tác trắc địa, lập bản đồ 3D và giao hàng tự động trong khu vực nhà kho cô lập.",
        product: "Dòng Drone vận tải SL-200 có khả năng mang tải trọng 15kg, định vị GPS chuẩn xác cao đến mức centimet và tích hợp camera quét mã vạch tầm xa.",
        supports: ["Đầu tư", "SHTT", "Gọi vốn"],
        metrics: { members: 18, partners: 15, revenue: "4.5 tỷ", funding: "15 tỷ", products: 2 },
        partners_vn: ["Tổng Công ty Bưu điện Việt Nam (VNPost)", "Logistics Viettel"],
        partners_intl: ["DJI SDK Developer Network"],
        highlights: [{ date: "05/2025", text: "Hoàn thành thử nghiệm đường bay vận chuyển y tế nội khu" }],
        awards: ["Top 5 Dự án Công nghệ tiềm năng SHTP 2025"]
    },
    { 
        id: "DA006", 
        name: "GreenTech Solar", 
        company: "Công ty TNHH Giải pháp Năng lượng Xanh GreenTech", 
        manager: "Nguyễn Văn A", 
        phone: "0967890123", 
        sector: "IoT", 
        status: "Ngưng hoạt động", 
        year: 2022,
        contract: "Hợp đồng số 05/HĐUT-VUDN",
        contractDate: "01/06/2022 - 01/06/2025",
        intro: "GreenTech Solar cung cấp giải pháp quản lý điện năng mặt trời thông minh áp dụng mạng lưới cảm biến IoT, giúp các tòa nhà tối ưu hóa hiệu suất hấp thụ năng lượng và tự động chuyển đổi nguồn cấp.",
        product: "Hộp điều khiển GreenBox gắn trực tiếp vào hệ thống biến tần inverter, kết nối dữ liệu đám mây.",
        supports: ["Mô hình kinh doanh", "Thương hiệu"],
        metrics: { members: 4, partners: 10, revenue: "400 triệu", funding: "0 Đ", products: 1 },
        partners_vn: ["Điện lực miền Nam (EVN SPC)"],
        partners_intl: [],
        highlights: [],
        awards: []
    },
    { 
        id: "DA007", 
        name: "CyberSec Alpha", 
        company: "Công ty Cổ phần An ninh mạng Alpha", 
        manager: "Vũ Minh F", 
        phone: "0978901234", 
        sector: "Công nghệ số", 
        status: "Còn hoạt động", 
        year: 2025,
        contract: "Hợp đồng số 30/HĐUT-VUDN",
        contractDate: "01/09/2025 - 01/09/2028",
        intro: "CyberSec Alpha là đơn vị tiên phong phát triển hệ thống phát hiện và ngăn chặn mã độc tống tiền (Ransomware) thế hệ mới sử dụng công nghệ bẫy dữ liệu thông minh.",
        product: "Giải pháp phần mềm AlphaShield cài đặt tập trung tại máy chủ doanh nghiệp, liên tục giám sát hành vi tệp tin.",
        supports: ["SHTT", "Thị trường"],
        metrics: { members: 9, partners: 55, revenue: "2.9 tỷ", funding: "4 tỷ", products: 1 },
        partners_vn: ["Các sở ban ngành TPHCM", "Khối doanh nghiệp tài chính"],
        partners_intl: [],
        highlights: [{ date: "10/2025", text: "Ngăn chặn thành công cuộc tấn công mã độc quy mô lớn tại đối tác tài chính" }],
        awards: ["Chứng nhận An toàn thông tin chất lượng cao 2025"]
    },
    { 
        id: "DA008", 
        name: "NanoFilm Window", 
        company: "Công ty TNHH Vật liệu mới NanoFilm", 
        manager: "Trần Thị B", 
        phone: "0989012345", 
        sector: "Sinh học", 
        status: "Còn hoạt động", 
        year: 2024,
        contract: "Hợp đồng số 18/HĐUT-VUDN",
        contractDate: "12/03/2024 - 12/03/2027",
        intro: "NanoFilm nghiên cứu phát triển các dòng phim cách nhiệt nano sinh học ứng dụng màng lọc thực vật, giúp giảm 99% tia tia tử ngoại (UV) và tia hồng ngoại gây nóng cho ô tô và nhà kính.",
        product: "Màng phim cách nhiệt Bio-Nano dán kính có độ bền màu trên 10 năm, tự hủy sinh học sau khi bóc dỡ.",
        supports: ["Mô hình kinh doanh", "Thử nghiệm", "Khách hàng"],
        metrics: { members: 14, partners: 200, revenue: "7.8 tỷ", funding: "8 tỷ", products: 4 },
        partners_vn: ["Hệ thống Toytech Việt Nam", "Các nhà thầu xây dựng tòa nhà văn phòng"],
        partners_intl: ["Vật liệu Nano 3M Alliance"],
        highlights: [{ date: "06/2024", text: "Mở rộng đại lý phân phối độc quyền tại 15 tỉnh thành" }],
        awards: ["Cúp Vàng Công nghệ Xanh 2025"]
    }
];

// DỮ LIỆU MẪU SHTT ĐỒNG BỘ
const default_shtt = [
    { id: "DA001", projectName: "AgriTech Việt Nam", type: "SC", name: "Cảm biến mesh network tiết kiệm pin", docNum: "1-2023-00142", docDate: "2023-04-12", certNum: "1-0040983-000", certDate: "2025-01-15", state: "Cấp bằng", source: "VU" },
    { id: "DA001", projectName: "AgriTech Việt Nam", type: "NH", name: "Logo IoT-Chain và nhận diện", docNum: "4-2023-45122", docDate: "2023-06-20", certNum: "4-0021455-000", certDate: "2024-11-02", state: "Cấp bằng", source: "DA" },
    { id: "DA004", projectName: "Medicom AI", type: "BQTG", name: "Thuật toán nhận diện khối u AI-Health", docNum: "2345/2024/QTG", docDate: "2024-02-11", certNum: "2345/2024/QTG", certDate: "2024-03-01", state: "Cấp bằng", source: "VU" },
    { id: "DA005", projectName: "SmartLogi Drone", type: "SC", name: "Cơ chế cân bằng con quay hồi chuyển Drone tải nặng", docNum: "1-2025-00985", docDate: "2025-02-20", certNum: "", certDate: "", state: "Đã nộp đơn", source: "VU" }
];

// DỮ LIỆU MẪU CHỨNG NHẬN ĐỒNG BỘ
const default_certs = [
    { id: "DA001", companyName: "Công ty Cổ phần Công nghệ số AgriTech Việt Nam", type: "DN Khoa học & Công nghệ", state: "Đã cấp giấy", note: "CN-2023-XYZ" },
    { id: "DA004", companyName: "Công ty TNHH Thiết bị Y tế trí tuệ nhân tạo Medicom", type: "DN Khoa học & Công nghệ", state: "Đã cấp giấy", note: "CN-2025-ABC" },
    { id: "DA007", companyName: "Công ty Cổ phần An ninh mạng Alpha", type: "ISO", state: "Đã cấp giấy", note: "ISO 27001:2022" }
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