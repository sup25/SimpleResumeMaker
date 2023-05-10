import React, { useState } from "react";
import ResumeDetails from "./ResumeDetails";

import Nav from "./Nav";

const Resume = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [careerObjective, setCareerObjective] = useState("");
  const [experience, setExperience] = useState("");
  const [achievements, setAchievements] = useState("");
  const [showValues, setShowValues] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setShowValues(true);
  }

  return (
    <div>
      <Nav />
      <div className="my-10 section flex-col items-center">
        <div className="my-5 text-2xl md:text-4xl ">
          "Your first impression is your best impression"
        </div>
        <div className="mt-5 container w-4/5 h-auto flex flex-col  bg-white rounded-lg border-gray-500 shadow-lg">
          <div className="my-5 text-2xl  px-10 ">Enter Your Details</div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  items-center gap-5"
          >
            <label htmlFor="info" className="font-medium  text-xl">
              Personal Info:
            </label>
            <input
              className="bg-gray-300 rounded w-1/2 px-2 py-2 "
              id="name"
              required
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-gray-300 rounded w-1/2 px-2 py-2"
              id="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-gray-300 rounded w-1/2 px-2 py-2 "
              id="address"
              required
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label htmlFor="summary" className="font-medium  text-xl">
              Professional Summary:
            </label>
            <textarea
              rows={4}
              className="bg-gray-300 rounded w-1/2 px-2 flex resize-vertical break-all whitespace-pre-line "
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Write a brief summary of your professional experience and skills here"
              required
            />

            <label htmlFor="education" className="font-medium  text-xl">
              Education Qualifications:
            </label>
            <textarea
              rows={4}
              className="bg-gray-300 rounded px-2 w-1/2 flex resize-vertical break-all whitespace-pre-line"
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="List your educational qualifications"
              required
            />

            <label htmlFor="skills" className="font-medium  text-xl">
              Academic and Non-Academic Skills:
            </label>
            <textarea
              rows={4}
              className="bg-gray-300 rounded  px-2 w-1/2"
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="List your academic and non-academic skills"
              required
            />

            <label htmlFor="career-objective" className="font-medium  text-xl">
              Career Objective:
            </label>
            <textarea
              rows={4}
              className="bg-gray-300 rounded px-2  w-1/2"
              id="career-objective"
              value={careerObjective}
              onChange={(e) => setCareerObjective(e.target.value)}
              placeholder="Write a brief statement about your career objective"
              required
            />

            <label htmlFor="experience" className="font-medium text-xl">
              Experience and Internships:
            </label>
            <textarea
              rows={4}
              className="bg-gray-300 rounded px-2 w-1/2"
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="List your previous work experience and internships"
              required
            />

            <label htmlFor="achievements" className="font-medium  text-xl">
              Skills and Achievements:
            </label>
            <textarea
              rows={4}
              className="bg-gray-300 rounded px-2 w-1/2 "
              id="achievements"
              value={achievements}
              onChange={(e) => setAchievements(e.target.value)}
              placeholder="List any relevant achievements or awards you have received"
              required
            />

            <button
              type="submit"
              className="bg-slate-400 p-2 my-2 hover:bg-slate-400/50 text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
        {showValues && (
          <ResumeDetails
            name={name}
            email={email}
            address={address}
            summary={summary}
            education={education}
            skills={skills}
            careerObjective={careerObjective}
            experience={experience}
            achievements={achievements}
          />
        )}
      </div>
    </div>
  );
};

export default Resume;
