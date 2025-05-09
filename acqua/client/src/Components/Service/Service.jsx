import React from "react";

const services = [
  {
    id: 1,
    title: "Soft Drinking Water",
    description: "Sed quia magni eos qui ratione volup tatem.",
    icon: "💧",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Chlorine Free Water",
    description: "Sed quia magni eos qui ratione volup tatem.",
    icon: "🥤",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Pure Mineralized Water",
    description: "Sed quia magni eos qui ratione volup tatem.",
    icon: "🧪",
    color: "bg-orange-500",
  },
  {
    id: 4,
    title: "Total Home Solution",
    description: "Sed quia magni eos qui ratione volup tatem.",
    icon: "🏠",
    color: "bg-blue-500",
  },
];

const Services = () => {
  return (
    <section className="py-12 text-center">
      <p className="text-sky-500 font-semibold text-lg">Welcome To Aqua Express</p>
      <h2 className="text-3xl font-bold text-gray-800 mt-2">
        Most Trusted Company
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Mineralo Water Industries is pleased to introduce itself as a new
        entrant in the market for supply of revitalizing, refreshing, pure,
        clean & healthy mineralized water.
      </p>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 shadow-lg rounded-lg border border-gray-200 hover:scale-105 transition-transform duration-500"
          >
            <div
              className={`${service.color} text-white text-4xl w-20 h-20 flex items-center justify-center mx-auto rounded-full`}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-500 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
