import React from "react";

const TopButton = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Hyderabad",
    },
    {
      id: 2,
      title: "New Delhi",
    },
    {
      id: 3,
      title: "New York",
    },
    {
      id: 4,
      title: "Melbourne",
    },
    {
      id: 5,
      title: "Amsterdam",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city, index) => (
        <button
          className="text-white text-lg font-medium"
          key={index}
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
