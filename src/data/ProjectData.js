export const ProjectList = [
  {
    img: "/project1.PNG",
    title: {
      vi: "E-commerce Website",
      en: "E-commerce Website",
    },
    description: {
      vi: "Xây dựng hệ thống thương mại điện tử đầy đủ chức năng bao gồm đăng ký/đăng nhập người dùng, mua hàng, đặt đơn, thanh toán trực tuyến qua PayPal và trang quản trị Admin để quản lý sản phẩm, danh mục, đơn hàng và thống kê doanh thu.",
      en: "Developed a full-featured e-commerce system including user authentication, product browsing, order placement, PayPal payment integration and an admin dashboard for managing products, categories, orders and revenue statistics.",
    },
    tech_stack: [
      "ReactJS",
      "ExpressJS",
      "MongoDB",
      "Firebase",
      "Cloudinary",
      "TailwindCSS",
      "JWT Authentication",
    ],
    github_url: "https://github.com/minhdang0911/-project-e-commerce",
  },
  {
    img: "/projectgps.png",
    title: {
      vi: "IKY GPS – Hệ thống giám sát hành trình",
      en: "IKY GPS – Vehicle Tracking System",
    },
    description: {
      vi: `
IKY GPS là hệ thống giám sát hành trình GPS realtime dành cho quản lý đội xe và thiết bị di động.
Hệ thống cập nhật vị trí, trạng thái xe, pin và tín hiệu theo thời gian thực thông qua MQTT,
hiển thị trực quan trên bản đồ với khả năng zoom, theo dõi và tương tác.

Hỗ trợ xem lại lịch sử lộ trình theo nhiều khung thời gian (hôm nay, tuần, tháng, quý),
playback hành trình chi tiết với phân loại trạng thái chạy xe, dừng xe, đỗ xe.
Tích hợp dashboard thống kê và biểu đồ giúp phân tích hiệu suất vận hành.

Cung cấp hệ thống báo cáo chuyên sâu như: chuyến đi, phiên chạy, phiên sạc, bảo trì thiết bị,
so sánh dữ liệu theo thời gian, tuỳ chỉnh cột hiển thị, xuất báo cáo (Excel/CSV).
Ngoài ra hệ thống còn hỗ trợ quản lý thiết bị, phân quyền người dùng, đa ngôn ngữ
và hướng dẫn sử dụng trực tiếp trên giao diện.
`,
      en: `
IKY GPS is a real-time vehicle and device tracking system designed for fleet management.
The system continuously updates location, vehicle status, battery level and signal data
via MQTT, providing an interactive and intuitive map-based interface.

It supports route history playback with flexible time ranges (today, week, month, quarter),
detailed journey visualization with driving, stopping and parking states,
along with dashboards and charts for operational analysis.

Advanced reporting features include trip reports, usage sessions, charging sessions
and maintenance history, with data comparison, customizable table columns
and export options (Excel/CSV).
The platform also offers device management, role-based access control,
multi-language support and built-in user guidance for better usability.
`,
    },
    tech_stack: [
      "Next.js",
      "Node.js / Express",
      "MongoDB",
      "MQTT (Realtime)",
      "Leaflet Map",
      "Ant Design",
      "JWT Authentication",
      "Role-based Access Control",
    ],

    // github_url: "https://github.com/....",
    // demo_url: "https://....",
  },
  {
    img: "/kienan.png",
    title: {
      vi: "Website Công Ty Khuôn Nhựa + Admin CMS",
      en: "Manufacturing Company Website + Admin CMS",
    },
    description: {
      vi: "Website giới thiệu và quảng bá sản phẩm cho công ty khuôn nhựa, kèm hệ thống Admin CMS quản lý sản phẩm, danh mục, banner và nội dung.",
      en: "Corporate website for a plastic mold manufacturing company with product showcase and an admin CMS to manage products, categories, banners and content.",
    },
    tech_stack: [
      "Next.js",
      "MongoDB",
      "ExpressJS",
      "Ant Design",
      "JWT Authentication",
    ],
    // github_url: "https://github.com/....",
    demo_url: "https://khuonmaukienan.com",
  },
];

// --------------------------------------- Skills

export const stackList = [
  // ================= FRONTEND =================
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    name: "ReactJS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
  },
  {
    img: "https://cdn.simpleicons.org/antdesign/0170FE",
    name: "Ant Design",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
    name: "TailwindCSS",
  },

  // ================= BACKEND =================
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    name: "NodeJS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    name: "ExpressJS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    name: "MySQL",
  },

  // ================= TOOLS =================
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    name: "Git",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    name: "VS Code",
  },

  // ================= OTHER / PLATFORM =================
  {
    img: "https://cdn.simpleicons.org/vercel/000000",
    name: "Vercel",
  },
];
