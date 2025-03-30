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
- EmailJS

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

4. Chạy ứng dụng ở chế độ development:

```
npm run dev
```

## Hướng dẫn thiết lập EmailJS cho các form

Trang web sử dụng EmailJS để gửi email từ form liên hệ và đăng ký bản tin mà không cần backend. Dưới đây là hướng dẫn thiết lập:

### Bước 1: Tạo tài khoản EmailJS

1. Truy cập [EmailJS](https://www.emailjs.com/) và đăng ký tài khoản miễn phí.
2. Sau khi đăng nhập, vào Dashboard.

### Bước 2: Tạo Email Service

1. Trên Dashboard, chọn "Email Services" từ menu bên trái.
2. Nhấp vào "Add New Service".
3. Chọn nhà cung cấp email của bạn (Gmail, Outlook, v.v.) và làm theo hướng dẫn để kết nối.
4. Sau khi tạo service, lưu ý **Service ID** để sử dụng sau này.

### Bước 3: Tạo Email Template

#### Template cho Form Liên hệ:

1. Trên Dashboard, chọn "Email Templates" từ menu bên trái.
2. Nhấp vào "Create New Template".
3. Đặt tên cho template, ví dụ: "Contact Form".
4. Thiết kế template email với các biến sau:
   - `{{name}}` - Tên người gửi
   - `{{email}}` - Email người gửi
   - `{{subject}}` - Chủ đề
   - `{{message}}` - Nội dung tin nhắn
5. Lưu template và ghi nhớ **Template ID**.

#### Template cho Form Đăng ký Bản tin:

1. Tạo template mới tương tự như trên.
2. Đặt tên, ví dụ: "Newsletter Subscription".
3. Thiết kế template email với biến:
   - `{{email}}` - Email người đăng ký
   - `{{subscription_type}}` - Loại đăng ký (đã được đặt là "Newsletter" trong code)
4. Lưu template và ghi nhớ **Template ID**.

### Bước 4: Lấy Public Key

1. Trên Dashboard, chọn "Account" từ menu bên trái.
2. Trong tab "API Keys", bạn sẽ thấy **Public Key**.

### Bước 5: Cập nhật file .env

Mở file `.env` và cập nhật các biến môi trường:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Thay thế:

- `your_service_id` bằng Service ID bạn lấy từ Bước 2
- `your_template_id` bằng Template ID bạn lấy từ Bước 3
- `your_public_key` bằng Public Key bạn lấy từ Bước 4

### Lưu ý quan trọng

- EmailJS có giới hạn 200 email/tháng cho tài khoản miễn phí. Bạn có thể nâng cấp lên gói trả phí nếu cần gửi nhiều hơn.
- Nếu bạn sử dụng cả form liên hệ và đăng ký bản tin, bạn cần tạo hai template khác nhau và cập nhật các template ID tương ứng trong code.
- Trong trường hợp đó, bạn cần sửa file `src/components/Footer.jsx` để sử dụng template ID riêng cho form đăng ký bản tin.

### Sửa đổi cho nhiều Template

Nếu bạn muốn sử dụng các template khác nhau cho form liên hệ và đăng ký bản tin, hãy thêm biến môi trường mới vào file `.env`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=your_newsletter_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Sau đó, sửa file `src/components/Contact.jsx`:

```javascript
emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

Và file `src/components/Footer.jsx`:

```javascript
emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

## Kiểm tra hoạt động

Sau khi thiết lập, hãy thử gửi tin nhắn qua form liên hệ và đăng ký bản tin để kiểm tra:

1. Điền form và gửi
2. Kiểm tra console của trình duyệt để xem thông báo thành công/lỗi
3. Kiểm tra hộp thư đến của email để xác nhận việc nhận email

## Tùy chỉnh thêm

Bạn có thể tùy chỉnh nội dung email bằng cách chỉnh sửa template trong trang quản lý EmailJS. Các thay đổi sẽ được áp dụng ngay lập tức mà không cần thay đổi code.

## Xử lý lỗi phổ biến

- **"The public key should be set to send an email"**: Kiểm tra xem bạn đã đặt biến môi trường VITE_EMAILJS_PUBLIC_KEY chưa
- **"The service ID should be set to send an email"**: Kiểm tra biến VITE_EMAILJS_SERVICE_ID
- **"The template ID should be set to send an email"**: Kiểm tra biến VITE_EMAILJS_TEMPLATE_ID
- **"Invalid login"**: Kiểm tra lại cấu hình service trong EmailJS dashboard
- **"Cross-Origin Resource Sharing (CORS) error"**: Kiểm tra domain của bạn đã được thêm vào danh sách cho phép trong EmailJS dashboard chưa
