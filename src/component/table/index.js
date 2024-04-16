import React, { useState } from "react";

import NavBar from "../../common/Navbar";
import ResumeDetails from "../ResumeDetails";
import PersonalInfo from "../../constants/personalInfo";
import OtherInfo from "../../constants/otherInfo";

const Table = () => {
  const { options, fullName, email, address } = PersonalInfo();
  const {
    otherOptions,
    summary,
    education,
    skills,
    careerObjective,
    experience,
    achievements,
  } = OtherInfo();

  const [showValues, setShowValues] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setShowValues(true);
  }

  return (
    <div>
      <NavBar />
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
            {options.map((option) => {
              return (
                <input
                  key={option.id}
                  className="bg-gray-300 rounded w-1/2 px-2 py-2"
                  id={option.name}
                  required
                  placeholder={option.placeholder}
                  value={option.value}
                  onChange={option.onChange}
                />
              );
            })}

            <div className=" w-full justify-center items-center">
              {otherOptions.map((option) => (
                <div
                  key={option.id}
                  className="flex flex-col w-full items-center "
                >
                  <label htmlFor={option.id} className="font-medium text-xl">
                    {option.label}
                  </label>
                  <textarea
                    rows={4}
                    className="bg-gray-300 rounded px-2 w-1/2"
                    id={option.id}
                    value={option.value}
                    onChange={option.onChange}
                    placeholder={option.placeholder}
                    required
                  />
                </div>
              ))}
            </div>

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
            name={fullName}
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

export default Table;
