import React from "react";
export const coloresStats = {
  vida: "#8cb92c",
  ataque: "#de6f17",
  defensa: "#3d4049",
};

export default function Barra({ valor, stat }) {
  return (
    <div className="w-5/6 my-auto bg-[#e6ede5] rounded-full h-2.5">
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
