export const FilledForm = {
  type: "INF",
  unique_id: "MIC3401",
  company_overview: {
    name: "Google",
    sector: "IT",
    website: "google.com",
  },
  job_detail: {
    designation: "Software Developer",
    place_of_posting: "Bangalore",
    description: "Whatever",
    duration: "May-June",
    mode: "Virtual",
  },

  stipend_detail: {
    stipend: "Rs 90,000",
    ppo_provision: "Yes",
    ctc_ppo: "Rs 42,00,000 CTC",
  },
  contact_detail: [
    {
      name: "Krittika",
      designation: "HR",
      email: "abc@gmail.com",
      mobile: "857509030",
    },
    {
      name: "Ashutosh",
      designation: "HR2",
      email: "abcd@gmail.com",
      mobile: "857509030",
    },
  ],
  eligible_branch: {
    btech: ["ECE", "CSE"],
    dd_mtech: ["ECE", "CSE"],
    msc2: ["ECE", "CSE"],
    msc3: ["ECE", "CSE"],
    mtech: ["ECE", "CSE"],
    mba: ["ECE", "CSE"],
    phd: ["ECE", "CSE"],
  },
  skill_based: ["C, C++, python", "ML/AI"],
  selection_pr: {
    resume_short_listing: "Yes",
    type_of_test: "Both(Aptitude & Technical)",
    other_round: ["GD", "Technical"],
    total_rounds: 3,
    no_of_offers: "10(subject to change)",
    eligible_criteria: "none",
  },
};
