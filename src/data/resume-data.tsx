import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import marcosPic from "@/images/logos/marcosdiazvazquez.jpg";

export const RESUME_DATA = {
  name: "Marcos Diaz Vazquez",
  initials: "mdv",
  location: "Newark, DE",
  locationLink: "https://www.google.com/maps/place/Newark,DE/",
  about:
    "programmer, student, etc.",
  summary:
    "student at the university of delaware",
  avatarUrl: "/images/marcosdiazvazquez.jpg",
  personalWebsiteUrl: "https://www.marcosdiazvazquez.com/",
  contact: {
    email: "mdv@udel.edu",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/marcosdiazvazquez",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/marcos-diaz-vazquez/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Delaware",
      degree: "Bachelor's Degree in Computer Science (B.S)",
      start: "2023",
      end: "Present",
      badges: ["Introduction to Programming I & II", "Systems Programming", "Data Structures", "Machine Organization & Assembly Language", "Calculus I", "Discrete Mathematics", "Philosophy" 
      ],
    },
  ],
  work: [
    {
      company: "Sussex Tech",
      link: "https://www.sussexvt.org/",
      badges: ["In-person"],
      title: "IT Intern",
      start: "Sept 2022",
      end: "Aug 2023",
      description:
        "During my senior year, I participated in a paid work-based learning program at Sussex Technical High School, where I gained hands-on experience as an IT intern. My role involved a variety of tasks, such as documenting MacBook serial numbers, unboxing and setting up iPads for incoming freshmen, and configuring computer labs with iMacs and Windows PCs. I also handled routine maintenance like replacing toner ink and managing older technology for storage or disposal in accordance with State of Delaware protocols. Working alongside peers and under the guidance of senior staff, I developed practical IT skills in a real-world educational environment.",
    },
  
  ],
  skills: [
    "Python",
    "TypeScript",
    "C++",
    "C",
    "ARM Assembly",
    "Git",
    "Unix",
    "React",
    "Tailwind CSS",
    "Pandas",
    "NumPy",
    "Computer Maintenance",
  ],
  projects: [

    {
      title: "UDelaWhere??",
      techStack: [
        "TypeScript",
        "React",
        "Hackathon",
        "Three.js",
        "Supabase",
        "Leaflet",
      ],
      description:
        "An immersive, interactive campus exploration game that helps University of Delaware students, especially freshmen, discover and learn about campus locations through engaging 360° panoramas.",
      logo: EvercastLogo,
      link: {
        href: "https://github.com/ncb09/UDelaWhere",
      },
    },{
      title: "InsightBites",
      techStack: [
        "TypeScript",
        "React",
        "Vite",
        "Tailwind CSS",
      ],
      description:
        "Bringing clarity to restaurant safety—InsightBites visualizes Delaware health inspections with an interactive, easy-to-use interface that helps users make informed dining choices.",
      logo: EvercastLogo,
      link: {
        href: "https://github.com/marcosdiazvazquez/InsightBites",
      },
    },
  ],
} as const;
