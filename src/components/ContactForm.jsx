import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mnqewwdn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      // Handle successful form submission
      alert("Form submitted successfully!");
    } else {
      // Handle form submission error
      alert("Form submission failed.");
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex justify-center ml-[5rem]">
        <p className="mt-3 font-bold text-[20px]">Contact Me</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center space-y-4 mt-[5rem]">
          <input
            className="w-[35rem] h-[40px] border rounded-md border-gray-500 focus:border-black pl-3"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="w-[35rem] h-[40px] border rounded-md border-gray-500 focus:border-black pl-3"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className="w-[35rem] h-[80px] border rounded-md border-gray-500 focus:border-black pl-3"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ContactForm;
