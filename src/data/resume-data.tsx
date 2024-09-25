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

export const RESUME_DATA = {
  name: "Marcos Diaz Vazquez",
  initials: "mdv",
  location: "Newark, DE",
  locationLink: "https://www.google.com/maps/place/Newark,DE/",
  about:
    "programmer, student, etc.",
  summary:
    "student at the university of delaware",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4E03AQFYyL6hfT0Jzg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727207420805?e=1732752000&v=beta&t=4XOF9nTKebwfbQC_nvY0ofKUJJlmZ3OQxraxRCUyDVA",
  personalWebsiteUrl: "https://mdv-tau.vercel.app/",
  contact: {
    email: "mdv@udel.edu",
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
      badges: ["Introduction to Programming I & II", "Systems Programming", "Data Structures", "Machine Organization & Assembly Language", "Calculus I & II", "Discrete Mathematics", "Philosophy" 
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
    "C",
    "Git",
    "Unix",
    "Computer Maintenance",
  ],
  projects: [

    {
      title: "accountable restaurants delaware",
      techStack: [
        "TypeScript",
        "Node",
        "CSV",
      ],
      description:
        "Developed a TypeScript app to track Delaware restaurant health code violations.",
      logo: EvercastLogo,
      link: {
        href: "https://devpost.com/software/accountable-restaurants-de",
      },
    },
  ],
} as const;
