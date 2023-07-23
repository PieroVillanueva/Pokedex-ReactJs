import React from "react";
const coloresStats = {
  vida: "#01dc01",
  ataque: "#d85304",
  defensa: "#444751",
};

export default function Barra({ valor, stat }) {
  return (
    <div className="w-full bg-gray-400 rounded-full h-2.5">
      <div
        style={{
          width: `${valor / 3}%`,
          backgroundColor: `${coloresStats[stat]}`,
        }}
        className={` h-2.5 rounded-full`}
      ></div>
    </div>
  );
}
