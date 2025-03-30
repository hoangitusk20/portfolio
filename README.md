# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Portfolio Website

Portfolio website đa tính năng được xây dựng với React, Tailwind CSS và Framer Motion.

## Chức năng

- Thiết kế hiện đại, đáp ứng responsive
- Hiệu ứng chuyển động mượt mà
- Portfolio với hiệu ứng trượt
- Form liên hệ với khả năng gửi email trực tiếp
- Đăng ký nhận bản tin (newsletter)

## Công nghệ sử dụng

- React
- Tailwind CSS
- Framer Motion
- Web3Forms

## Hướng dẫn cài đặt và chạy

1. Clone repository này:

```
git clone <repository-url>
```

2. Di chuyển vào thư mục dự án:

```
cd portfolio
```

3. Cài đặt các package cần thiết:

```
npm install
```

4. Tạo file `.env` và thêm Access Key của Web3Forms (nếu chưa có):

```
VITE_WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY
```

5. Chạy ứng dụng ở chế độ development:

```
npm run dev
```

## Hướng dẫn thiết lập Form liên hệ và Đăng ký bản tin

Trang web sử dụng Web3Forms để xử lý form liên hệ và đăng ký bản tin mà không cần backend. Dưới đây là hướng dẫn thiết lập:

### Giới thiệu về Web3Forms

Web3Forms là một dịch vụ giúp bạn nhận form submissions trực tiếp vào email mà không cần backend hay server-side code. Web3Forms hoạt động với mọi static website, JAMstack, hoặc frontend SPA như React, Vue, Angular, v.v.

### Cách thiết lập

1. **Tạo Access Key**:

   - Truy cập [Web3Forms](https://web3forms.com/)
   - Nhập địa chỉ email của bạn và tạo một Access Key miễn phí
   - Access Key sẽ được gửi đến email của bạn

2. **Cập nhật file `.env`**:

   - Thêm Access Key vào file `.env` của dự án:

   ```
   VITE_WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY
   ```

3. **Kiểm tra form đã sẵn sàng**:
   - Form liên hệ và đăng ký bản tin đã được cấu hình sẵn để sử dụng Access Key từ file `.env`

### Các tính năng đã được tích hợp

1. **Form Liên hệ**:

   - Xác thực thông tin (validation) cho các trường bắt buộc
   - Thông báo trạng thái gửi/thành công/lỗi
   - Chống spam với honeypot

2. **Form Đăng ký Bản tin**:
   - Giao diện đơn giản để nhập email
   - Xác thực email
   - Thông báo trạng thái gửi/thành công/lỗi

### Giới hạn của gói miễn phí

Web3Forms cung cấp cả gói miễn phí và trả phí. Gói miễn phí có giới hạn:

- 250 submissions/tháng
- Không giới hạn số form
- Không giới hạn số website
- Spam protection
- Không ads hay branding

### Xử lý lỗi phổ biến

1. **Form không gửi được**:

   - Kiểm tra xem Access Key đã được đặt đúng trong file `.env`
   - Đảm bảo có kết nối internet
   - Kiểm tra console để xem lỗi chi tiết

2. **Không nhận được email**:
   - Kiểm tra thư mục spam/junk
   - Đảm bảo địa chỉ email đăng ký với Web3Forms là chính xác
   - Đảm bảo Access Key hợp lệ và chưa hết hạn

## Tùy chỉnh thêm

Web3Forms hỗ trợ nhiều tùy chọn nâng cao như:

- Cấu hình Captcha
- Đính kèm file (gói trả phí)
- Email tự động phản hồi
- Webhook integration (gói trả phí)
- Export dữ liệu (gói trả phí)

Để biết thêm chi tiết về các tùy chọn nâng cao, tham khảo [tài liệu chính thức của Web3Forms](https://web3forms.com/documentation).
