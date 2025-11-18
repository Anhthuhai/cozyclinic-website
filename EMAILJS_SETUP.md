# Hướng dẫn Setup EmailJS cho Website Cozy Clinic

## 🚀 Các bước thiết lập EmailJS

### Bước 1: Tạo tài khoản EmailJS
1. Truy cập: https://www.emailjs.com/
2. Click "Sign Up" và tạo tài khoản miễn phí
3. Xác nhận email đăng ký

### Bước 2: Tạo Email Service
1. Đăng nhập vào EmailJS Dashboard
2. Click "Email Services" → "Add New Service"
3. Chọn "Gmail" (vì bạn dùng Gmail)
4. Đăng nhập với tài khoản **cozyclinic2026@gmail.com**
5. Cho phép EmailJS truy cập Gmail
6. Đặt tên Service ID (ví dụ: `service_cozy_clinic`)
7. Save và copy **Service ID**

### Bước 3: Tạo Email Template
1. Click "Email Templates" → "Create New Template"
2. Đặt tên Template (ví dụ: `template_appointment`)
3. Copy nội dung sau vào template:

```
Subject: 🏥 Đặt lịch khám mới - {{patient_name}}

Nội dung:
Cozy Clinic nhận được đặt lịch khám mới!

📋 THÔNG TIN BỆNH NHÂN:
- Họ tên: {{patient_name}}
- Số điện thoại: {{patient_phone}}
- Email: {{patient_email}}

🏥 THÔNG TIN KHÁM:
- Dịch vụ: {{service_name}}
- Ngày khám: {{appointment_date}}
- Giờ khám: {{appointment_time}}
- Ghi chú: {{notes}}

⏰ Thời gian đặt: {{booking_datetime}}

---
Vui lòng liên hệ với bệnh nhân để xác nhận lịch hẹn.

Trân trọng,
Website Cozy Clinic
📧 {{clinic_email}}
📞 0972 562 426
```

4. Save và copy **Template ID**

### Bước 4: Lấy Public Key
1. Click "Account" → "General"
2. Copy **Public Key**

### Bước 5: Cập nhật Website
Mở file `assets/js/main.js` và thay thế:

```javascript
// Dòng 4: Thay thế YOUR_PUBLIC_KEY
publicKey: "YOUR_PUBLIC_KEY_HERE",

// Dòng 67: Thay thế YOUR_SERVICE_ID và YOUR_TEMPLATE_ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

**Ví dụ:**
```javascript
publicKey: "abcd1234efgh5678", // Public Key từ EmailJS
emailjs.send('service_cozy_clinic', 'template_appointment', templateParams)
```

## ✅ Kiểm tra hoạt động

1. Mở website và test form đặt lịch
2. Kiểm tra email cozyclinic2026@gmail.com
3. Nếu không nhận được, kiểm tra thư mục Spam

## 📊 Giới hạn miễn phí
- **200 emails/tháng** (đủ cho phòng khám nhỏ)
- Có thể upgrade nếu cần nhiều hơn

## 🔒 Bảo mật
- Public Key được expose ở frontend (bình thường)
- EmailJS có rate limiting tránh spam
- Gmail sẽ nhận email từ EmailJS service

## 📞 Hỗ trợ
Nếu gặp khó khăn trong setup, liên hệ:
- Email: cozyclinic2026@gmail.com
- Hoặc tôi có thể hỗ trợ setup trực tiếp

---
**Lưu ý:** Sau khi setup xong, khách hàng đặt lịch sẽ tự động gửi email đến cozyclinic2026@gmail.com với đầy đủ thông tin!
