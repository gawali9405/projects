import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const submit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div>
      <h1 className="font-bold text-5xl text-center pt-30">Contact Us</h1>
      <p className="text-center text-lg mt-5 font-light"> Our team is happy to anser your sales questions. Fill out the form and we'll be in touch as soon as possible.</p>
      <div className=" sm:flex flex-wrap justify-center my-14 ">
        <div className="max-w-150 max-h-150 shadow-neutral-100 ">
          <img
            src="/images/contact.jpg"
            alt="img"
            className="w-full h-full rounded-b-md"
          />
        </div>
        <div className="pl-20 pr-20 bg-gray-100 shadow-neutral-100 ">
          <form
            onClick={submit}
            className="flex flex-col gap-1 min-w-80 h-full pt-3"
          >
            <label htmlFor="name" className="font-semibold text-lg">
              Name{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-sm outline-none  bg-white hover:border-gray-400 mb-7 p-1 "
            />
            <label htmlFor="email" className="font-semibold text-lg ">
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-sm outline-none bg-white hover:border-gray-400 mb-7 p-1 "
            />
            <label htmlFor="message" className="font-semibold text-lg">
              Message{" "}
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 rounded-sm outline-none bg-white hover:border-gray-400 mb-6 p-1 max-h-25 w-full"
            />

            <button className="bg-black border border-black rounded-md font-medium text-2xl text-white px-4 py-2 text-center hover:bg-white hover:text-black hover:border-black transition duration-300 cursor-pointer mt-5 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
