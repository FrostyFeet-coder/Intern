import React from "react";

const FeatureBox = ({ icon, title, description }) => {
  return (
    <div className="p-4 md:p-6 bg-gray-800 rounded-lg text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
      <p className="text-sm md:text-base text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureBox;
