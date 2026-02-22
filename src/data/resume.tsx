import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mochamad Faishal Amir",
  initials: "MFA",
  url: "https://mochfamir.github.io",
  location: "Bandung, Indonesia",
  locationLink: "https://www.google.com/maps/place/Bandung,+West+Java",
  description:
    "I am a Software Engineer with expertise in React.js, Next.js, TypeScript, Node.js, and Golang, focused on building scalable and efficient systems. Currently working at Starvo EV Charging, I develop real-time EV charging platforms, implementing OCPP (WebSocket) communication with chargers, OCPI integrations for roaming and interoperability, and event-driven architectures using Pub/Sub, while delivering seamless user experiences and reliable backend systems.",
  // summary:
  //   "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  summary:
    "My journey into software engineering began from a non-traditional path. I graduated from a vocational high school in electrical engineering, where my early exposure to electronics and systems led me into the IoT and hardware engineering space. This foundation gave me a strong understanding of how technology works beyond software, from devices to real-world constraints.\n\nDriven by curiosity and a desire to build scalable digital solutions, I transitioned into software development by completing a Fullstack JavaScript bootcamp. I started my career as a programmer at Bagubagu Studio, then continued building real-time systems, internal platforms, and automation tools at Recharge Indonesia and eFishery, focusing on improving operational efficiency and scalability.\n\nToday, I work as a Software Engineer at Starvo EV Charging, developing real-time EV charging platforms using OCPP (WebSocket), OCPI integrations, and event-driven architectures with Pub/Sub. With a background that spans hardware and software, I enjoy building reliable systems, seamless user experiences, and technology that solves real-world problems.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Go",
    "Python",
    "Postgres",
    "C",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://byfaishal.cv", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mochamad13amir@gmail.com",
    tel: "+6281316161296",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mochfamir",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mochamad-faishal-amir-358b93125/",
        icon: Icons.linkedin,

        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/6281316161296",
        icon: Icons.whatsapp,
        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:mochamad13amir@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Starvo",
      href: "https://starvo.id/",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Software Engineer",
      logoUrl: "/starvo.png",
      start: "May 2025",
      end: "Present",
      description:
        "Develop and maintain scalable EV charging platforms using Golang for backend services and React.js for frontend applications, implement real-time charger communication via OCPP (WebSocket), enable roaming and interoperability through OCPI integrations, design real-time monitoring dashboards for charger status, sessions, and system health, and collaborate cross-functionally to deliver reliable, high-performance EV charging solutions.",
    },
    {
      company: "eFishery",
      href: "https://efishery.com/en/",
      badges: [],
      location: "Bandung, Indonesia",
      title: "Fullstack Engineer",
      logoUrl: "/efishery.png",
      start: "June 2020",
      end: "March 2025",
      description:
        "Designed and maintained internal platforms to optimize operational efficiency, including a web application for pricing data management, an inventory system for warehouse stock control, and a CRM with AR/AP functionality and customer segmentation. Developed a PWA for field technicians to streamline daily tasks and rewrote a Node.js codebase in Golang to enhance scalability. Built automation tools, such as a Slack bot for managing Vault (HashiCorp) access and a provisioning system for GSuite, Slack, Vault, VPN, Jira, Confluence, Bitbucket, and internal tools to automate employee onboarding and offboarding.",
    },
    {
      company: "ReCharge Indonesia",
      badges: [],
      href: "https://www.recharge.id/",
      location: "Jakarta, Indonesia",
      title: "Software Developer",
      logoUrl: "/recharge.png",
      start: "December 2019",
      end: "May 2020",
      description:
        "Developed a dashboard management system by collaborating with backend engineers to create efficient and scalable services for Angular. Worked closely with UI designers to build clean and reusable UI components, and with product engineers to investigate and resolve issues. Assisted QA engineers in debugging and fixing defects, ensuring a seamless user experience. Additionally, analyzed and reviewed feature performance for optimization and rewrote the application to align with a new backend and UI design.",
    },
    {
      company: "Bagubagu Studio",
      href: "https://www.bagubagu.com/",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Software Developer",
      logoUrl: "/bagubagu.png",
      start: "March 2019",
      end: "December 2019",
      description:
        "Developed web applications, including dashboard management systems, e-commerce platforms, and web forms. Built backend environments using API Gateway, AWS Lambda, and third-party API integrations, and designed database schemas with AWS Amplify and AWS SAM. Collaborated with designers to create clean and efficient UI components, implemented state management services in Angular, and investigated errors to reproduce and resolve issues. Additionally, developed an AWS Cognito library for Angular 7+.",
    },
    {
      company: "Denso Indonesia",
      href: "https://www.denso.com/id/id/",
      badges: [],
      location: "Bekasi, Indonesia",
      title: "Production Operator",
      logoUrl: "/denso.png",
      start: "August 2016",
      end: "August 2018",
      description:
        "The role involved operating resin potting machines for ECU 2W production, ensuring precision and efficiency in the manufacturing process. Responsibilities also included product repair and performing daily routine machine checks to maintain optimal production quality and minimize downtime.",
    },
    {
      company: "DycodeX",
      href: "https://www.dycodex.com/",
      badges: [],
      location: "Bandung, Indonesia",
      title: "IoT Engineer",
      logoUrl: "/dycodex.png",
      start: "November 2015",
      end: "June 2016",
      description:
        "I involved developing product prototypes, including designing PCBs using Protel 99, soldering electronic components, and researching sensor technologies. A key project was the Smart Galon, which focused on developing a capacitive sensor for improved water level detection. This role provided hands-on experience in IoT hardware development and embedded systems.",
    },
  ],
  education: [
    {
      school: "Binus University",
      href: "https://binus.ac.id/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/binus.png",
      start: "2020",
      end: "2024",
      description: "",
    },
    {
      school: "Hacktiv8 (Bootcamp)",
      href: "https://www.hacktiv8.com/",
      degree: "Fullstack Javascript Immersive Program",
      logoUrl: "/hacktiv8.png",
      start: "2018",
      end: "2019",
      description: "",
    },
  ],
  projects: [
    // Add your projects here
  ],
  hackathons: [
    // Add your hackathons here
  ],
} as const;
