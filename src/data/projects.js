import project1 from "../assets/projects/project1.png";

const projects = [
  {
    id: 1,
    title: "Morder Bazzar Dor",
    image: project1,
    category: "Frontend Web Application",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React Router",
      "Better Auth",
      "MongoBD"
    ],
    description:
      "Bazar Dor is a modern and responsive e-commerce web application that allows users to explore products, browse categories, and enjoy a smooth, user-friendly online shopping experience.",
    live: "https://dev-a7-bazar-dor.vercel.app/",
    github: "https://github.com/mojemmeldev/Dev-A7-Bazar-Dor",
    challenges: [
      "Building a smooth active-section scroll spy with route-aware navigation",
      "Ensuring fluid responsiveness across ultra-wide monitors down to small mobile viewports"
    ],
    future: [
      "Interactive Sign-In form Uniqe Email",
      "Markdown-powered tech blog section with syntax highlighting"
    ],
  },
  // {
  //   id: 2,
  //   title: "TechGear - Modern Tech Store",
  //   image: project2,
  //   category: "E-Commerce Web App",
  //   technologies: [
  //     "React",
  //     "Tailwind CSS",
  //     "JavaScript",
  //     "Context API",
  //     "REST API"
  //   ],
  //   description:
  //     "A responsive, full-featured electronics and tech gadgets web application. Includes instant product category filtering, price range slider, real-time shopping cart drawer with quantity adjustments, and simulated checkout flow.",
  //   live: "https://example.com/techgear-demo",
  //   github: "https://github.com/example/techgear-ecommerce",
  //   challenges: [
  //     "Global cart state management with React Context without unnecessary re-renders",
  //     "Smooth slide-over modal drawer implementation for cart and mobile filters",
  //     "Instant multi-criteria client-side search and category filtering"
  //   ],
  //   future: [
  //     "Integration with Stripe payment gateway test API",
  //     "User authentication and order history dashboard",
  //     "Wishlist system with localStorage persistence"
  //   ],
  // },

  // {
  //   id: 3,
  //   title: "TaskFlow - Agile Kanban Board",
  //   image: project3,
  //   category: "Productivity & SaaS",
  //   technologies: [
  //     "React",
  //     "Tailwind CSS",
  //     "JavaScript (ES6+)",
  //     "LocalStorage"
  //   ],
  //   description:
  //     "An intuitive task management and productivity dashboard inspired by Trello and Jira. Supports custom task creation, priority color-coding, multi-stage workflow columns (Backlog, In Progress, Completed), and search indexing.",
  //   live: "https://example.com/taskflow-demo",
  //   github: "https://github.com/example/taskflow-kanban",
  //   challenges: [
  //     "Seamless task state transitions across columns with proper data immutability",
  //     "Persistent state synchronization with browser LocalStorage",
  //     "Clean UI component design adhering to accessibility standards"
  //   ],
  //   future: [
  //     "Drag and drop reordering using @dnd-kit/core",
  //     "Firebase Firestore integration for multi-device real-time sync",
  //     "Subtasks checklist and due-date notification system"
  //   ],
  // },
];

export default projects;
