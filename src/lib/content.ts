/**
 * Single typed source of truth for all portfolio content.
 * Sourced from resources/Mads_Christensen_CV_2025.pdf.
 *
 * NOTE for Mads: skill "F" is kept verbatim from the CV — change if it
 * should read "F#".
 */

export const profile = {
  name: "Mads Christensen",
  role: "Cloud Engineer & Software Developer",
  tagline: "Building digital futures, rooted in innovation.",
  location: "Copenhagen, Denmark",
  email: "madsc.alba@gmail.com",
  linkedin: "https://www.linkedin.com/in/mads-vs-christensen/",
  cvPath: "/Mads_Christensen_CV_2025.pdf",
  about:
    "I'm passionate about learning new things and thrive in a dynamic workplace where I can evolve and grow. My previous work experience has taught me to step into responsibility, work with interdisciplinary teams and be independent in my own work. The social aspect of a workplace is important to me and I enjoy building strong relationships with both colleagues and clients.",
} as const;

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Cloud Engineer",
    company: "Kuatro Group",
    location: "Copenhagen, DK",
    period: "2023 — Now",
    points: [
      "Cloud solutions in both Microsoft Azure and Google Cloud Platform, including DevOps tasks such as IaC (Terraform) and CI/CD (GitHub Actions & Azure DevOps).",
      "Backend software solutions including APIs, authentication and security (SAST, DAST, SCA) in Python and Golang.",
    ],
  },
  {
    role: "Software Developer",
    company: "Copenhagen Center for Health Technology",
    location: "Lyngby, DK",
    period: "2019 — 2023",
    points: [
      "Lead developer and maintainer of a large European research project (iPDM-GO). Performed user workshops and customer-dialogue implementations.",
      "Lead developer and maintainer of several packages in Dart used by thousands of people.",
    ],
  },
  {
    role: "Substitute Teacher",
    company: "Kratbjergskolen",
    location: "Allerød, DK",
    period: "2015 — 2019",
    points: [
      "Taught all ages of children across every subject of elementary school. Managed the curriculum for a 6th-grade class for 9 months and organised day-to-day teaching across several classes.",
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  detail: string;
  thesis: string;
};

export const education: Education[] = [
  {
    degree: "MSc in Computer Science and Engineering",
    school: "Technical University of Denmark",
    location: "Lyngby, DK",
    period: "2020 — 2023",
    detail: "Graduated with 12 (A).",
    thesis:
      "Sensor Data Fusion and Intelligent State Prediction for Human Digital Twins in Stroke Therapy with Exoskeletons.",
  },
  {
    degree: "BSc in Computer Science and Engineering",
    school: "Technical University of Denmark",
    location: "Lyngby, DK",
    period: "2017 — 2020",
    detail: "",
    thesis: "Software Implementation of Cognitive Tests on a Mobile Platform.",
  },
];

export type Project = {
  title: string;
  period: string;
  stack: string[];
  summary: string;
  /** Presence means a /projects/<slug>/ sub-page exists; card links to it. */
  slug?: string;
};

export const projects: Project[] = [
  {
    title: "Health Package",
    period: "2020 — 2023",
    stack: ["Android (Kotlin)", "iOS (Swift)", "Flutter"],
    summary:
      "A multi-platform package for integration with Apple HealthKit, Google Fit and Android Health Connect — a top-3% used package in the Flutter community.",
    slug: "health-package",
  },
  {
    title: "ECG & IoT Device Communication via Bluetooth GATT",
    period: "2023",
    stack: ["Dart", "Bluetooth GATT 4.0"],
    summary:
      "A Dart plugin that communicates with ECG and IoT devices using the Bluetooth GATT protocol based on raw byte communications.",
  },
  {
    title: "Cognitive Tests on a Mobile Platform",
    period: "2019",
    stack: ["Flutter", "Dart"],
    summary:
      "A Flutter package with 14 cognitive tests converted from pen-and-paper to mobile. Drew interest from companies and research groups — most notably Quantified Citizen and Penn State University.",
  },
];

export type SkillTier = {
  level: string;
  note: string;
  skills: string[];
};

export const skills: SkillTier[] = [
  {
    level: "Expert",
    note: "Daily drivers",
    skills: ["Python", "Golang", "SQL", "Terraform"],
  },
  {
    level: "Proficient",
    note: "Strong working knowledge",
    skills: ["Dart", "Flutter", "Java", "JavaScript", "Bicep"],
  },
  {
    level: "Familiar",
    note: "Hands-on experience",
    skills: ["R", "F", "C", "C++"],
  },
];

export type Achievement = {
  title: string;
  year: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    title: "Gold Medal — iGEM",
    year: "2019",
    detail:
      "Gold medal at the International Genetically Engineered Machine (iGEM) competition as part of the UCopenhagen team.",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
