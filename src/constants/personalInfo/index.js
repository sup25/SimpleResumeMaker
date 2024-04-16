import { useState } from "react";

const PersonalInfo = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const options = [
    {
      id: "fullname",
      placeholder: "Full Name",
      onChange: (e) => setFullName(e.target.value),
      value: fullName,
    },
    {
      id: "email",
      placeholder: "Email",
      onChange: (e) => setEmail(e.target.value),
      value: email,
    },
    {
      id: "address",
      placeholder: "Address",
      onChange: (e) => setAddress(e.target.value),
      value: address,
    },
  ];

  return {
    options,
    fullName,
    email,
    address,
    setFullName,
    setEmail,
    setAddress,
  };
};

export default PersonalInfo;
