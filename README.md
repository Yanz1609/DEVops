# Võ Hoài Giang - Supabase + Vercel

Trang giới thiệu bản thân dạng static HTML, có hai luồng Supabase:

- Đọc các dự án từ bảng `projects`.
- Ghi form liên hệ vào bảng `contact_messages`.

## Chạy local

1. Tạo project tại [Supabase](https://supabase.com).
2. Mở SQL Editor, chạy toàn bộ file `supabase/schema.sql`.
3. Sao chép `config.example.js` thành `config.js`, sau đó điền Project URL và anon key trong Supabase: **Project Settings > API**.
4. Chạy `npm run check` để kiểm tra tích hợp.
5. Chạy `npm run build` để tạo `config.js` từ biến môi trường, hoặc mở `index.html` trực tiếp sau khi đã có `config.js`.

Anon key được thiết kế để dùng ở frontend. Không đưa `service_role` key vào `config.js` hoặc GitHub Actions.

## GitHub Actions + Vercel

Tạo project trên Vercel và liên kết với repository GitHub. Trong **Settings > Secrets and variables > Actions**, thêm các repository secrets:

- `SUPABASE_URL`: URL project Supabase.
- `SUPABASE_ANON_KEY`: anon/publishable key của Supabase.
- `VERCEL_TOKEN`: token tạo trong Vercel Account Settings.
- `VERCEL_ORG_ID`: organization/team ID của Vercel.
- `VERCEL_PROJECT_ID`: project ID của Vercel.

Workflow tại `.github/workflows/deploy.yml` sẽ chạy khi push lên nhánh `main`: kiểm tra HTML, tạo runtime config, build artifact và deploy bản mới lên Vercel.
