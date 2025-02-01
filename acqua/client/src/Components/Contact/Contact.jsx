import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form Submitted:", formData);

    // Reset form on successful submission
    setFormData({ name: "", email: "", message: "" });

    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-40 px-5 py-10">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-center text-lg mt-3 font-light max-w-2xl">
        Our team is happy to answer your sales questions. Fill out the form, and
        we'll be in touch as soon as possible.
      </p>

      <div className="sm:flex sm:flex-wrap sm:justify-center my-10 w-full max-w-6xl">
        {/* Contact Image */}
        <div className="w-full sm:w-1/2">
          <img
            src="/images/contact.jpg"
            alt="Contact Us"
            className="rounded-lg shadow-md w-full h-full"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full sm:w-1/2 p-5 bg-white shadow-md rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="font-semibold text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md focus:ring-2 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="font-semibold text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md focus:ring-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="font-semibold text-lg">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full max-h-25 p-2 border rounded-md focus:ring-2 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
