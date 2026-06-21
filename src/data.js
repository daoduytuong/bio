// ============================================================================
//  NỘI DUNG TRANG BIO — Sửa thông tin của bạn ở ngay file này.
// ============================================================================

export const profile = {
  name: 'Tuong Dao',
  initials: 'TD',
  role: 'Dev gà 🐔 · IT',
  // Avatar: để '' để dùng chữ viết tắt, hoặc đặt link ảnh (vd '/avatar.jpg')
  avatar: '',
  tagline: 'Code dạo, học hoài, làm sản phẩm cho vui.',
  bio: 'Mình là một dev đang trên đường lên trình — thích mày mò web, sản phẩm nhỏ gọn và những thứ có ích. Trang này là góc giới thiệu bản thân và vài dự án mình làm.',

  // Vị trí (đặt href = '' nếu không có link bản đồ)
  living: {
    label: 'Quy Nhơn',
    href: '',
  },
  hometown: {
    label: 'Xuân Phước, Đắk Lắk',
    detail: 'Xuân Phước, Đồng Xuân, Phú Yên (cũ)',
    href: 'https://maps.app.goo.gl/ogN99MeECY2oDX3Y6',
  },
}

export const education = [
  {
    school: 'Đại học Quy Nhơn',
    detail: 'Tốt nghiệp 2022',
    year: '2022',
    href: 'https://maps.app.goo.gl/h9hyuRqjDonxZKi97',
  },
  {
    school: 'THPT Nguyễn Thái Bình',
    detail: 'Đồng Xuân, Phú Yên',
    year: '',
    href: 'https://maps.app.goo.gl/tc3ZCsVwPGg5bfxc8',
  },
]

export const socials = [
  { label: 'GitHub',    handle: 'daoduytuong',          href: 'https://github.com/daoduytuong',         icon: 'github',    accent: '#ffffff' },
  { label: 'Facebook',  handle: 'ddtuong054',           href: 'https://facebook.com/ddtuong054',        icon: 'facebook',  accent: '#1877f2' },
  { label: 'Instagram', handle: '_ddtuong',             href: 'https://instagram.com/_ddtuong',         icon: 'instagram', accent: '#e1306c' },
  { label: 'Threads',   handle: '_ddtuong',             href: 'https://threads.net/@_ddtuong',          icon: 'threads',   accent: '#bdbdbd' },
  { label: 'Email',     handle: 'hi@tuongms.xyz',       href: 'mailto:hi@tuongms.xyz',                  icon: 'mail',      accent: '#ff5c8a' },
  { label: 'Teams',     handle: 'daoduytuong.dhqn',     href: 'https://teams.microsoft.com/l/chat/0/0?users=daoduytuong.dhqn@outlook.com', icon: 'teams', accent: '#6264a7' },
]

export const projects = [
  {
    name: 'Live Meeting',
    tag: 'AI · Productivity',
    emoji: '🎙️',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
    description:
      'Trợ lý họp local-first: thu âm giọng nói → chuyển thành văn bản → AI tự tạo biên bản có cấu trúc (tóm tắt, quyết định, action items) → xem/sửa → xuất Markdown. Dữ liệu lưu ngay trong trình duyệt.',
    stack: ['Next.js', 'TypeScript', 'IndexedDB', 'Deepgram', 'Groq'],
    links: [
      { label: 'Xem live', href: 'https://live-meeting.tuongms.xyz/', primary: true },
    ],
  },
  {
    name: 'Mood Blog',
    tag: 'Personal · Blog',
    emoji: '🌙',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    description:
      'Blog cá nhân theo cảm xúc — đăng khoảnh khắc & suy ngẫm ngắn gắn với 6 mood, người đọc "thả tim" ẩn danh. Tinh thần: nhẹ — tĩnh — tinh tế. Serverless, $0/tháng.',
    stack: ['Next.js 16', 'React 19', 'Supabase', 'Tailwind 4', 'Zod'],
    links: [
      { label: 'Xem live', href: 'https://tuongms.xyz/', primary: true },
    ],
  },
]

export const skills = [
  'TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js',
  'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Zod', 'Vite', 'AI / LLM', 'Git',
]

export const contact = {
  heading: 'Kết nối với mình nhé?',
  text: 'Có dự án hay, muốn hợp tác hay chỉ đơn giản là chào hỏi — cứ nhắn mình.',
  email: 'hi@tuongms.xyz',
}
