# Hướng dẫn Deploy Website Cozyclinic

## 🎯 Mục tiêu: Đưa website từ máy tính lên Internet

### Phương pháp 1: CloudFlare Pages (MIỄN PHÍ - Khuyến nghị)

#### Bước 1: Chuẩn bị
1. **Tạo tài khoản GitHub:** https://github.com
2. **Tạo tài khoản CloudFlare:** https://cloudflare.com

#### Bước 2: Upload code lên GitHub
```bash
# Mở Terminal trong thư mục website
cd /Users/ngocanh/development/cozyclinic

# Khởi tạo Git repository
git init

# Thêm tất cả file
git add .

# Commit đầu tiên
git commit -m "Initial website for Cozyclinic"

# Tạo repository trên GitHub (tên: cozyclinic-website)
# Sau đó chạy:
git branch -M main
git remote add origin https://github.com/[username]/cozyclinic-website.git
git push -u origin main
```

#### Bước 3: Deploy với CloudFlare Pages
1. Đăng nhập CloudFlare Pages
2. Connect GitHub repository
3. Chọn repository: `cozyclinic-website`
4. Build settings: Để trống (website static)
5. Deploy!

#### Bước 4: Cấu hình tên miền
- CloudFlare sẽ cung cấp URL miễn phí: `cozyclinic-website.pages.dev`
- Để dùng `cozyclinic.com.vn`, cần mua domain và cấu hình DNS

---

### Phương pháp 2: FTP Upload (Hosting truyền thống)

#### Bước 1: Mua hosting + domain
1. **Chọn nhà cung cấp:** INET, Hostinger, etc.
2. **Package khuyến nghị:** Shared hosting (đủ cho phòng khám)
3. **Tên miền:** cozyclinic.com.vn

#### Bước 2: Upload file
1. **Nhận thông tin FTP** từ hosting provider
2. **Dùng FileZilla** hoặc cPanel File Manager
3. **Upload toàn bộ file** vào thư mục `public_html/`

#### Cấu trúc file khi upload:
```
public_html/
├── index.html
├── favicon.svg
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main-googleform.js
│   └── images/
│       ├── logo.svg
│       ├── articles/
│       └── ...
└── articles/
    └── bao-ve-tim-mach.html
```

---

## 🔍 Bước 3: Tối ưu cho Google Search

### A. Cải thiện SEO trong code

#### 1. Cập nhật Meta Tags
Thêm vào `<head>` của `index.html`:
```html
<!-- SEO Meta Tags -->
<meta name="description" content="Phòng khám Cozy Clinic Đồng Tháp - Khám nội tổng quát, tư vấn sức khỏe, bác sĩ giàu kinh nghiệm. Địa chỉ: Số 3 Nguyễn Văn Linh, Hồng Ngự, Đồng Tháp">
<meta name="keywords" content="phòng khám đồng tháp, bác sĩ đồng tháp, khám bệnh đồng tháp, cozy clinic, khám nội tổng quát, tim mạch">
<meta name="author" content="Cozy Clinic">
<meta name="robots" content="index, follow">

<!-- Open Graph Meta Tags -->
<meta property="og:title" content="Phòng khám Cozy Clinic - Chăm sóc sức khỏe tại Đồng Tháp">
<meta property="og:description" content="Phòng khám nội tổng quát uy tín tại Đồng Tháp với đội ngũ y bác sĩ giàu kinh nghiệm">
<meta property="og:type" content="website">
<meta property="og:url" content="https://cozyclinic.com.vn">

<!-- Local Business Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Cozy Clinic",
  "description": "Phòng khám nội tổng quát tại Đồng Tháp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Số 3 Nguyễn Văn Linh, Khóm 4",
    "addressLocality": "phường Hồng Ngự",
    "addressRegion": "Đồng Tháp",
    "addressCountry": "VN"
  },
  "telephone": "+84972562426",
  "email": "cozyclinic2026@gmail.com",
  "url": "https://cozyclinic.com.vn",
  "openingHours": "Mo-Fr 08:00-17:00, Sa 08:00-12:00"
}
</script>
```

#### 2. Tạo file sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cozyclinic.com.vn/</loc>
    <lastmod>2024-11-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://cozyclinic.com.vn/articles/bao-ve-tim-mach.html</loc>
    <lastmod>2024-11-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

#### 3. Tạo file robots.txt
```
User-agent: *
Allow: /

Sitemap: https://cozyclinic.com.vn/sitemap.xml
```

### B. Đăng ký với Google

#### 1. Google Search Console
1. Truy cập: https://search.google.com/search-console
2. Thêm website của bạn
3. Xác thực quyền sở hữu
4. Submit sitemap

#### 2. Google My Business
1. Tạo hồ sơ doanh nghiệp cho phòng khám
2. Thêm thông tin: địa chỉ, giờ mở cửa, số điện thoại
3. Upload ảnh phòng khám
4. Thu thập reviews từ bệnh nhân

---

## 📊 Bước 4: Theo dõi và phân tích

### Google Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ⚡ Phương án nhanh nhất

### Dùng Netlify (1-2 giờ)
1. **Drag & Drop:** Vào https://netlify.com
2. **Kéo thả thư mục website** vào Netlify
3. **Nhận URL miễn phí:** `cozyclinic.netlify.app`
4. **Cấu hình domain** nếu có

### Dùng Vercel (1-2 giờ)
1. **Tạo tài khoản:** https://vercel.com
2. **Import project** từ thư mục
3. **Deploy tự động**
4. **Nhận URL:** `cozyclinic.vercel.app`

---

## 💡 Lộ trình khuyến nghị

### Tuần 1: Deploy cơ bản
- [ ] Upload lên CloudFlare Pages/Netlify (miễn phí)
- [ ] Kiểm tra website hoạt động
- [ ] Thêm meta tags cơ bản

### Tuần 2: SEO cơ bản
- [ ] Tạo sitemap.xml
- [ ] Đăng ký Google Search Console
- [ ] Submit website cho Google

### Tuần 3: Tên miền thật
- [ ] Mua domain cozyclinic.com.vn
- [ ] Cấu hình DNS
- [ ] Cập nhật SSL certificate

### Tuần 4: Marketing
- [ ] Tạo Google My Business
- [ ] Chia sẻ trên social media
- [ ] Thu thập reviews đầu tiên

---

## 📞 Hỗ trợ kỹ thuật

**Nếu cần hỗ trợ deploy:**
- Email: cozyclinic2026@gmail.com
- Các bước trên có thể thực hiện trong 1-2 ngày
- Chi phí: 0đ (miễn phí) đến 500k/năm (có domain riêng)

**Website sẽ online sau:** 1-24 giờ (tùy phương pháp)
**Xuất hiện trên Google sau:** 1-4 tuần (với SEO đúng cách)
