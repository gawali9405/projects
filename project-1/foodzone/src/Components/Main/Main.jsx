import React from "react";

const Main = ({ data }) => {
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover bg-center min-h-screen w-full flex flex-wrap gap-4 p-4">
      {data.map((value, index) => (
        <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-2xl shadow-lg p-4 h-100 w-64 relative">
          <img src={`http://localhost:8000${value.image}`}  alt={value.name} className="w-full h-60 object-cover rounded-lg" />
          <h1 className="text-xl font-bold mt-2">{value.name}</h1>
          <p className="text-white">{value.text}</p>
          <p className="font-semibold text-lg">${value.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
