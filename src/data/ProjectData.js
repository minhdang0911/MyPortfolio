export const ProjectList = [
  {
    img: "/project1.PNG",
    title: {
      vi: "E-commerce Website",
      en: "E-commerce Website",
    },
    description: {
      vi: "Xây dựng website thương mại điện tử với các chức năng mua hàng, quản lý đơn hàng và doanh thu.",
      en: "Build an e-commerce website with functions such as purchasing orders and revenue/order management.",
    },
    tech_stack: [
      "React JS",
      "Cloudinary",
      "Firebase",
      "TailwindCSS",
      "ExpressJS",
      "MongoDb",
    ],
    github_url: "https://github.com/minhdang0911/-project-e-commerce",
    // demo_url: "https://youknowtheending.net/",
  },
  {
    img: "/projectgps.png",
    title: {
      vi: "IKY GPS – Hệ thống giám sát hành trình",
      en: "IKY GPS – Vehicle Tracking System",
    },
    description: {
      vi: `
Hệ thống giám sát hành trình GPS realtime cho đội xe, 
hiển thị vị trí, trạng thái xe và pin theo thời gian thực thông qua MQTT.
Hỗ trợ xem lại lộ trình theo khung giờ, playback hành trình trên bản đồ,
bật/tắt cảnh báo từ xa, báo cáo chuyên sâu (phiên chạy, phiên sạc, chuyến đi, bảo trì),
quản lý thiết bị, phân quyền người dùng và đa ngôn ngữ.
`,

      en: `
A real-time GPS vehicle tracking system for fleet management.
Features include live location tracking via MQTT, vehicle and battery status monitoring,
route playback with polyline and markers, remote alert control,
advanced reporting (usage sessions, charging sessions, trips, maintenance history),
device management, role-based access control and multi-language support.
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
