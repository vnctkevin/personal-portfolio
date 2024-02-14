import { SingularExperienceType } from "./types";
import { SKILLS } from "./skills";

const EducationsExperience: SingularExperienceType[] = [
  {
    name: "University of Indonesia",
    logo: "/images/experiences/organizations/compfest/logo.svg",
    link: "https://ui.ac.id/",

    images: [],

    history: [
      {
        role: "Bachelor of Computer Science",
        date: "Nov. 2021 - Dec. 2022",
        job_desc: [   ],
      },
    ],

    skills: [SKILLS.Python],
  },
  {
    name: "Canisius College Senior High School",
    logo: "/images/experiences/organizations/compfest/logo.svg",
    link: "https://kanisius.sch.id/",

    images: [],

    history: [
      {
        role: "High School Diploma",
        date: "Nov. 2021 - Dec. 2022",
        job_desc: [   ],
      },
    ],

    skills: [SKILLS.Python],
  },
]
export default EducationsExperience;