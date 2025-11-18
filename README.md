# Phòng Khám Nội Tổng Quát Cozy Clinic

Website chính thức của Phòng Khám Nội Tổng Quát Cozy Clinic tại Đồng Tháp - Chăm sóc sức khỏe tận tâm.

## 🏥 Giới thiệu

Cozy Clinic là phòng khám nội tổng quát chuyên nghiệp tại thành phố Hồng Ngự, Đồng Tháp. Chúng tôi chuyên điều trị các bệnh lý nội khoa và tim mạch với đội ngũ bác sĩ giàu kinh nghiệm. 

**Kế hoạch mở rộng 2025**: Sắp tới chúng tôi sẽ bổ sung thêm khoa Nhi và dịch vụ vận chuyển bệnh nhân cấp cứu.

## 🚀 Tính năng

- **Trang chủ**: Giới thiệu về phòng khám nội tổng quát
- **Dịch vụ hiện tại**: Nội tổng quát, tim mạch, khám sức khỏe
- **Dịch vụ tương lai**: Nhi khoa và vận chuyển cấp cứu (2025)
- **Đội ngũ y bác sĩ**: Bác sĩ nội khoa và điều dưỡng
- **Đặt lịch khám**: Form đặt lịch trực tuyến 
- **Liên hệ**: Thông tin chi tiết tại Đồng Tháp
- **Responsive Design**: Tương thích với mọi thiết bị
- **SEO Optimized**: Tối ưu cho tìm kiếm địa phương

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc semantic
- **CSS3**: Styling với Flexbox và Grid
- **JavaScript**: Tương tác và validation
- **Google Fonts**: Typography
- **Google Maps**: Bản đồ địa điểm

## 📁 Cấu trúc dự án

```
cozyclinic/
├── index.html              # Trang chủ
├── assets/
│   ├── css/
│   │   └── styles.css       # Stylesheet chính
│   ├── js/
│   │   └── main.js         # JavaScript chính
│   └── images/             # Hình ảnh và icons
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## 🚦 Hướng dẫn chạy dự án

1. **Clone dự án**:
   ```bash
   git clone <repository-url>
   cd cozyclinic
   ```

2. **Mở trong VS Code**:
   ```bash
   code .
   ```

3. **Chạy với Live Server**:
   - Cài đặt extension "Live Server" trong VS Code
   - Click chuột phải vào file `index.html`
   - Chọn "Open with Live Server"

4. **Hoặc mở trực tiếp**:
   - Mở file `index.html` trong trình duyệt web

## 🎨 Tùy chỉnh

### Màu sắc chính
- Primary Blue: `#2563eb`
- Success Green: `#10b981`
- Text Color: `#1e293b`
- Secondary Text: `#64748b`

### Typography
- Font family: Inter (Google Fonts)
- Responsive font sizes
- Clean, medical-appropriate styling

## 📱 Responsive Design

Website được thiết kế responsive cho:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 📧 Tính năng đặt lịch

Form đặt lịch khám bao gồm:
- Validation dữ liệu đầy đủ
- Kiểm tra định dạng số điện thoại & email
- Kiểm tra ngày hợp lệ (phải là ngày tương lai)
- **EmailJS Integration**: Tự động gửi email đến cozyclinic2026@gmail.com
- Thông báo phản hồi realtime cho người dùng
- Fallback mailto nếu EmailJS lỗi

### Setup EmailJS:
1. Đọc hướng dẫn trong file `EMAILJS_SETUP.md`
2. Test với file `test-emailjs.html`
3. Cập nhật các ID trong `assets/js/main.js`

## 🔧 Bảo trì và phát triển

### Thêm dịch vụ mới
1. Cập nhật section `#services` trong `index.html`
2. Thêm icon tương ứng vào thư mục `assets/images/icons/`
3. Cập nhật dropdown trong form đặt lịch

### Thêm bác sĩ mới
1. Cập nhật section `#doctors` trong `index.html`
2. Thêm ảnh bác sĩ vào thư mục `assets/images/doctors/`

### Cập nhật thông tin liên hệ
1. Sửa section `#contact` trong `index.html`
2. Cập nhật Google Maps embed code

## 🌐 SEO

Website đã được tối ưu SEO cơ bản:
- Meta tags appropriate
- Semantic HTML structure
- Alt texts cho images
- Structured data markup (có thể thêm)
- Fast loading time
- Mobile-friendly

## 📞 Hỗ trợ

Để được hỗ trợ về website, vui lòng liên hệ:
- Email: cozyclinic2026@gmail.com
- Điện thoại: 0972 562 426
- Địa chỉ: Số 3 Nguyễn Văn Linh, Khóm 4, phường Hồng Ngự, Đồng Tháp

## 📄 License

© 2024 Cozy Clinic. Tất cả quyền được bảo lưu.
