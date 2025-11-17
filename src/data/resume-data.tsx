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

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  link: string;
};

export type Project = {
  title: string;
  techStack: readonly string[];
  description: string;
  logo: any; // Using any for now since it's an imported component
  link: {
    href: string;
  };
};

export const RESUME_DATA = {
  name: "Marcos Diaz Vazquez",
  initials: "mdv",
  location: "Newark, DE",
  locationLink: "https://www.google.com/maps/place/Newark,DE/",
  about:
    "programmer, student, etc.",
  summary:
    "Junior at the University of Delaware",
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
      degree: "Bachelor's Degree in Computer Science (B.S.)",
      concentration: "Artificial Intelligence and Robotics Concentration",
      start: "2023",
      end: "Present",
      badges: ["Data Structures","Introduction to Programming I & II (Object-Oriented Programming)","Introduction to Software Engineering", "Introduction to Systems Programming", "Machine Organization & Assembly Language", "Calculus I - III","Statistical Methods", "Discrete Mathematics", "Japanese I", "Philosophy" 
      ],
    },
  ],
  work: [
    {
    company: "Sussex Technical High School",
      link: "https://www.sussexvt.org/",
      badges: ["In-person"],
      title: "Information Technology Intern",
      start: "Sept 2022",
      end: "Aug 2023",
      description:
        "During my senior year, I participated in a paid work-based learning program at Sussex Technical High School, where I gained hands-on experience as an IT intern. My role involved a variety of tasks, such as documenting MacBook serial numbers, unboxing and setting up iPads for incoming freshmen, and configuring computer labs with iMacs and Windows PCs. I also handled routine maintenance like replacing toner ink and managing older technology for storage or disposal in accordance with State of Delaware protocols. ",
    },
  
  ],
  skills: [
    "Python",
    "TypeScript",
    "C++",
    "C",
    "SQL",
    "ARM Assembly",
    "Git",
    "Unix",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Pandas",
    "NumPy",
    "CI/CD",
    "Agile Methodology",
    "Prompt-engineering",
    "Computer Maintenance",
    "Intermediate Spanish",
  ],
  certifications: [
    {
      title: "Version Control",
      issuer: "Meta",
      date: "Feb 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/0BGBSDRT314T",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "Jan 2025",
      link: "https://coursera.org/share/f29ad618e865b484cced9dd31880ea1e",
    },
    {
      title: "PC Professional",
      issuer: "TestOut",
      date: "Jun 2021",
      link: "https://certification.testout.com/verifycert/6-2C6-BPKF5",
    },
  ] as const,
  projects: [
    {
      title: "UDelaWhere??",
      techStack: [
        "TypeScript",
        "React",
        "HenHacks 2025",
        "Three.js",
        "Supabase",
        "Gemini API",
        "Leaflet",
      ],
      description:
        "An immersive, interactive campus exploration game that helps University of Delaware students, especially freshmen, discover and learn about campus locations through engaging 360° panoramas.",
      logo: EvercastLogo,
      link: {
        href: "https://github.com/ncb09/UDelaWhere",
      },
    },{
      title: "Pathfinder",
      techStack: [
        "TypeScript",
        "React",
        "OpenAI API",
        "CSS",
      ],
      description:
        "An AI-powered quiz that uses ChatGPT to analyze career preferences to find optimal careers. Developed as a final project for CISC275 at the University of Delaware.",
      logo: EvercastLogo,
      link: {
        href: "https://github.com/NekroCat/Final-Project",
      },
    },{
      title: "LilaTrack",
      techStack: [
        "JavaScript",
        "React",
        "Gemini API",
        "Supabase", 
        "CSS",
        "JPMorganChase Code for Good 2025",
      ],
      description:
        "An interactive impact visualization platform for the Lilabean Foundation that transparently tracks pediatric brain cancer research funding. Developed during JPMorgan Chase's Code for Good 2025 hackathon.",
      logo: EvercastLogo,
      link: {
        href: "https://www.jpmorganchase.com/careers/explore-opportunities/programs/tfsg-hackathons",
      },
    },{
      title: "InsightBites",
      techStack: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "DE Open Data",
      ],
      description:
        "Bringing clarity to restaurant safety—InsightBites visualizes Delaware health inspections with an interactive, easy-to-use interface that helps users make informed dining choices.",
      logo: EvercastLogo,
      link: {
        href: "https://github.com/marcosdiazvazquez/InsightBites",
      },
    },
  ] as Project[],
} as const;
