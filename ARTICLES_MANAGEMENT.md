# Hướng dẫn quản lý mục Kiến thức Y tế

## Tổng quan
Mục "Kiến thức Y tế" cho phép phòng khám chia sẻ các bài viết chăm sóc sức khỏe và thường thức y học với bệnh nhân.

## Cấu trúc hiện tại

### 1. Các bài viết có sẵn
Website hiện tại có 6 bài viết mẫu:

1. **Chăm sóc tim mạch** (`featured-article.svg`)
   - Nội dung: Cách phòng ngừa bệnh tim mạch
   - Màu chủ đạo: Đỏ/Hồng (tim)

2. **Quản lý bệnh tiểu đường** (`diabetes-care.svg`)
   - Nội dung: Kiểm soát đường huyết và chế độ ăn
   - Màu chủ đạo: Xanh dương (y tế)

3. **Dinh dưỡng lành mạnh** (`healthy-eating.svg`)
   - Nội dung: Chế độ ăn cân bằng và khoa học
   - Màu chủ đạo: Xanh lá (rau củ)

4. **Tập luyện thể dục** (`exercise-tips.svg`)
   - Nội dung: Bài tập phù hợp cho mọi độ tuổi
   - Màu chủ đạo: Cam (năng lượng)

5. **Quản lý stress** (`stress-management.svg`)
   - Nội dung: Kỹ thuật thư giãn và thiền
   - Màu chủ đạo: Tím (tinh thần)

6. **Giấc ngủ chất lượng** (`sleep-health.svg`)
   - Nội dung: Tầm quan trọng của giấc ngủ
   - Màu chủ đạo: Xanh đậm (đêm)

## Cách thêm bài viết mới

### 1. Tạo hình ảnh minh họa
- Tạo file SVG mới trong thư mục `assets/images/articles/`
- Kích thước: 350x200 pixels
- Sử dụng màu sắc phù hợp với chủ đề y tế
- Tên file: `ten-bai-viet.svg`

### 2. Cập nhật HTML
Trong file `index.html`, tìm section `articles` và thêm:

```html
<article class="article-card">
    <div class="article-image">
        <img src="assets/images/articles/ten-bai-viet.svg" alt="Tên bài viết">
    </div>
    <div class="article-content">
        <h3>Tên bài viết</h3>
        <p>Mô tả ngắn về nội dung bài viết (2-3 câu)</p>
        <span class="read-more">Đọc thêm →</span>
    </div>
</article>
```

### 3. Tạo trang bài viết chi tiết (Tương lai)
- Tạo thư mục `articles/` trong root
- Tạo file HTML cho từng bài viết
- Cập nhật JavaScript để link đến bài viết thay vì thông báo "Coming soon"

## Quy trình phê duyệt nội dung

### 1. Chuẩn bị nội dung
- **Tiêu đề**: Rõ ràng, dễ hiểu
- **Tóm tắt**: 2-3 câu mô tả chính
- **Nội dung chính**: Thông tin chính xác, dễ hiểu
- **Nguồn tham khảo**: Từ các tổ chức y tế uy tín

### 2. Kiểm duyệt y khoa
- Bác sĩ giám đốc Lương Thị Ngọc Anh kiểm tra nội dung
- Đảm bảo thông tin chính xác và phù hợp
- Tránh thông tin có thể gây hiểu lầm

### 3. Đăng tải
- Cập nhật HTML như hướng dẫn trên
- Test trên nhiều thiết bị
- Kiểm tra responsive design

## Lưu ý quan trọng

### 1. Về nội dung y tế
- ⚠️ **Không tự chẩn đoán**: Luôn khuyến cáo bệnh nhân đến khám
- ⚠️ **Không kê đơn**: Chỉ cung cấp thông tin tham khảo
- ⚠️ **Nguồn tin đáng tin cậy**: Tham khảo từ WHO, Bộ Y tế, các hiệp hội y khoa

### 2. Về thiết kế
- Giữ phong cách nhất quán với website
- Sử dụng màu sắc phù hợp (xanh y tế chủ đạo)
- Đảm bảo dễ đọc trên mobile

### 3. Về SEO
- Sử dụng từ khóa y tế phù hợp
- Meta description rõ ràng
- Title tag tối ưu

## Công cụ hỗ trợ

### 1. Tạo SVG
- Sử dụng AI tools (ChatGPT, Claude) để tạo code SVG
- Canva Pro cho thiết kế đơn giản
- Adobe Illustrator cho chuyên nghiệp

### 2. Kiểm tra responsive
- Chrome DevTools
- Test trên điện thoại thực tế
- Các tool online như Responsinator

### 3. Tối ưu SEO
- Google Search Console
- Kiểm tra tốc độ tải trang
- Meta tags validator

## Kế hoạch phát triển

### Phase 1 (Hiện tại)
- ✅ 6 bài viết mẫu với hình ảnh
- ✅ Layout responsive
- ✅ Thông báo "Coming soon"

### Phase 2 (1-2 tháng)
- [ ] Tạo trang chi tiết cho từng bài viết
- [ ] Hệ thống tìm kiếm bài viết
- [ ] Chia sẻ social media

### Phase 3 (3-6 tháng)
- [ ] CMS đơn giản để quản lý bài viết
- [ ] Bình luận và tương tác
- [ ] Newsletter đăng ký nhận bài viết mới

## Liên hệ hỗ trợ
- **Email kỹ thuật**: cozyclinic2026@gmail.com
- **Bác sĩ phê duyệt**: Thạc sĩ Bác sĩ Lương Thị Ngọc Anh
- **Địa chỉ phòng khám**: Số 3 Nguyễn Văn Linh, Khóm 4, phường Hồng Ngự, Đồng Tháp
