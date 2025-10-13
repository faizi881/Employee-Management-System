import { stringify } from "postcss";

const employees = [
  {
    id: 1,
    email: "faizan@company.com",
    password: "123",
    tasks: [
      {
        title: "Design Landing Page",
        description:
          "Create a responsive UI for the landing page using React and Tailwind CSS.",
        date: "2025-10-08",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Navbar Bug",
        description:
          "Resolve alignment issue in the navigation bar on smaller screens.",
        date: "2025-10-09",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Feedback Updates",
        description: "Apply client feedback on the homepage layout.",
        date: "2025-10-10",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "ali@company.com",
    password: "123",
    tasks: [
      {
        title: "Build Login Page",
        description:
          "Implement login form with validation using React Hook Form.",
        date: "2025-10-08",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Connect Firebase Auth",
        description:
          "Integrate Firebase authentication for user login and signup.",
        date: "2025-10-10",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review",
        description:
          "Review and optimize code for performance and best practices.",
        date: "2025-10-11",
        category: "Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "maryam@company.com",
    password: "123",
    tasks: [
      {
        title: "UI Prototype in Figma",
        description: "Design prototype for new dashboard interface.",
        date: "2025-10-09",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Color Palette Update",
        description: "Update theme colors to match the new brand guidelines.",
        date: "2025-10-10",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Accessibility Audit",
        description:
          "Ensure all UI elements follow accessibility standards (WCAG).",
        date: "2025-10-11",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "usman@company.com",
    password: "123",
    tasks: [
      {
        title: "API Integration",
        description: "Connect frontend with backend REST API using Axios.",
        date: "2025-10-08",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Error Handling",
        description: "Implement error boundaries and graceful error messages.",
        date: "2025-10-09",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Refactor Components",
        description:
          "Break down large React components into smaller reusable ones.",
        date: "2025-10-10",
        category: "Optimization",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "sara@company.com",
    password: "123",
    tasks: [
      {
        title: "Testing User Dashboard",
        description: "Test dashboard functionalities and report issues.",
        date: "2025-10-09",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Write Documentation",
        description: "Prepare project documentation for handover.",
        date: "2025-10-10",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Setup CI/CD",
        description:
          "Configure continuous integration and deployment pipeline.",
        date: "2025-10-11",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@company.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse (localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))

  return{employees,admin}
 
  
};
