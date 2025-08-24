export const universityData = {
  psut: {
    name: "Princess Sumaya University for Technology",
    logo: "/PSUT_Logo.png",
    endorsement:
      "Princess Sumaya University for Technology Career Education is excited to partner with ShortlistOn to offer you an exclusive 3 months subscription to provide our students with priority access to quality career opportunities.",
    primaryColor: "#04ace4",
    programs: [
      "Computer Science",
      "Engineering",
      "Business",
      "Medicine",
      "Law",
      "Liberal Arts",
      "Other",
    ],
  },
  htu: {
    name: "AlHussein Technical University",
    logo: "/HTU_Logo.png",
    endorsement:
      "HTU Career Advising & Professional Development is proud to offer our students priority access to ShortlistOn's innovative career platform.",
    primaryColor: "#A31F34",
    programs: [
      "Engineering",
      "Computer Science",
      "Management",
      "Science",
      "Architecture",
      "Other",
    ],
  },
    zaytoona: {
    name: "Al-Zaytoonah University of Jordan",
    logo: "/zaytoona_logo.png",
    endorsement:
      "HTU Career Advising & Professional Development is proud to offer our students priority access to ShortlistOn's innovative career platform.",
    primaryColor: "#0c9444",
    programs: [
      "Engineering",
      "Computer Science",
      "Management",
      "Science",
      "Architecture",
      "Other",
    ],
  },
    meu: {
    name: "Middle East University",
    logo: "/meu_logo.png",
    endorsement:
      "HTU Career Advising & Professional Development is proud to offer our students priority access to ShortlistOn's innovative career platform.",
    primaryColor: "#931d24",
    programs: [
      "Engineering",
      "Computer Science",
      "Management",
      "Science",
      "Architecture",
      "Other",
    ],
  },
    asu: {
    name: "Applied Science Private University",
    logo: "/asu.png",
    endorsement:
      "HTU Career Advising & Professional Development is proud to offer our students priority access to ShortlistOn's innovative career platform.",
    primaryColor: "#34548c",
    programs: [
      "Engineering",
      "Computer Science",
      "Management",
      "Science",
      "Architecture",
      "Other",
    ],
  },
} as const;

export type UniversityKey = keyof typeof universityData;
