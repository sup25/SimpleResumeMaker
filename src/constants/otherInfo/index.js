import { useState } from "react";

const OtherInfo = () => {
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [careerObjective, setCareerObjective] = useState("");
  const [experience, setExperience] = useState("");
  const [achievements, setAchievements] = useState("");

  const otherOptions = [
    {
      label: " Professional Summary:",
      id: "summary",
      placeholder:
        "Write a brief summary of your professional experience and skills here",
      onChange: (e) => setSummary(e.target.value),
      value: summary,
    },
    {
      label: "Education Qualifications:",
      id: "education",
      placeholder: "List your educational qualifications",
      onChange: (e) => setEducation(e.target.value),
      value: education,
    },
    {
      label: "Academic and Non-Academic Skills:",
      id: "skills",
      placeholder: "List your academic and non-academic skills",
      onChange: (e) => setSkills(e.target.value),
      value: skills,
    },
    {
      label: "Career Objective:",
      id: "career-objective",
      placeholder: "Write a brief statement about your career objective",
      onChange: (e) => setCareerObjective(e.target.value),
      value: careerObjective,
    },
    {
      label: "Experience and Internships:",
      id: "experience",
      placeholder: "List your previous work experience and internships",
      onChange: (e) => setExperience(e.target.value),
      value: experience,
    },
    {
      label: "Achievements:",
      id: "achievements",
      placeholder: "List any relevant achievements or awards you have received",
      onChange: (e) => setAchievements(e.target.value),
      value: achievements,
    },
  ];

  return {
    otherOptions,
    summary,
    education,
    skills,
    careerObjective,
    experience,
    achievements,
    setSummary,
    setEducation,
    setSkills,
    setCareerObjective,
    setExperience,
    setAchievements,
  };
};

export default OtherInfo;
