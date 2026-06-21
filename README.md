# Bio Page

Trang giới thiệu cá nhân (link-in-bio / portfolio) giới thiệu bản thân và 2 dự án:
**Live Meeting** và **Mood Blog**.

Phong cách: **bento grid** hiện đại — gradient mesh động, lưới texture, glassmorphism, dark/light mode, animation reveal, tên chữ gradient động.

Các ô (tile): Hero · Vị trí (link bản đồ) · Học vấn (timeline) · 2 Project · Kết nối (social) · Kỹ năng · Liên hệ.

## Tech stack
- **Vite** + **React 18**
- CSS thuần (không cần thư viện UI ngoài)
- Icon SVG inline

## Cách chạy

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # build production -> dist/
npm run preview    # xem thử bản build
```

## Tùy biến nội dung

Mọi nội dung nằm trong **`src/data.js`** — sửa trực tiếp:

| Mục | Biến |
|-----|------|
| Tên, chức danh, avatar, bio, vị trí (sống/quê + link bản đồ) | `profile` |
| Học vấn (timeline trường + link bản đồ + năm) | `education` |
| Mạng xã hội (GitHub, Facebook, Instagram, Threads, Email, Teams) | `socials` |
| 2 dự án (mô tả, tech stack, link) | `projects` |
| Kỹ năng | `skills` |
| Phần liên hệ | `contact` |

> 💡 Avatar: để `avatar: ''` sẽ hiện chữ viết tắt; hoặc đặt link ảnh (ví dụ thả `avatar.jpg` vào `public/` rồi dùng `avatar: '/avatar.jpg'`).

## Cấu trúc

```
bio-page/
├── index.html
├── public/favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx              # các section: Hero, Projects, Skills, Contact
    ├── data.js              # ⭐ NỘI DUNG — sửa ở đây
    ├── index.css            # toàn bộ style + theme
    └── components/Icons.jsx # icon SVG
```

## Deploy
Build ra thư mục `dist/` tĩnh — deploy lên **Vercel / Netlify / GitHub Pages** đều được (không cần backend).
