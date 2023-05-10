import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const ResumeDetails = (props) => {
  const componentRef = useRef(null);

  return (
    <>
      <div
        className=" my-10 py-10  w-full h-auto flex px-5 text-left flex-col   bg-white rounded-lg border-gray-500 shadow-lg"
        ref={componentRef}
      >
        <div className="flex flex-col gap-5">
          <h2 className="text-base whitespace-pre-line">
            <h3 className="text-xl font-medium">Name</h3> {props.name}
          </h2>
          <h2 className="text-base whitespace-pre-line">
            {" "}
            <h3 className="text-xl font-medium">Email</h3> {props.email}
          </h2>
          <h2 className="text-base whitespace-pre-line">
            <h3 className="text-xl font-medium">Address</h3> {props.address}
          </h2>
          <h2 className="text-base whitespace-pre-line">
            <h3 className="text-xl font-medium">Summary</h3> {props.summary}
          </h2>
          <h2 className="text-base whitespace-pre-line ">
            <h3 className="text-xl  font-medium">Education</h3>{" "}
            {props.education}
          </h2>
          <h2 className="text-base whitespace-pre-line ">
            <h3 className="text-xl font-medium">Skills</h3> {props.skills}
          </h2>
          <h2 className="text-base whitespace-pre-line">
            <h3 className="text-xl font-medium">Career Objective</h3>{" "}
            {props.careerObjective}
          </h2>
          <h2 className="text-base whitespace-pre-line">
            <h3 className="text-xl font-medium">Experience</h3>{" "}
            {props.experience}
          </h2>
          <h2 className="text-base whitespace-pre-line">
            <h3 className="text-xl font-medium">Achievements</h3>{" "}
            {props.achievements}
          </h2>
        </div>
      </div>
      <ReactToPrint
        trigger={() => (
          <button className="py-2 px-2 w-fit rounded bg-slate-400 text-white">
            Print PDF
          </button>
        )}
        content={() => componentRef.current}
      />
    </>
  );
};

export default ResumeDetails;
