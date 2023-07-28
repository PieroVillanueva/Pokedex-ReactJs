import React, { useCallback, useEffect, useState, useRef } from "react";
import "../multiSlider.css";
import { coloresStats } from "./Barra";

export const MultiRangeSlider = ({
  min,
  max,
  setFiltro,
  name,
  minInicial,
  maxInicial,
}) => {
  const [minVal, setMinVal] = useState(minInicial);
  const [maxVal, setMaxVal] = useState(maxInicial);
  const minValRef = useRef(minInicial);
  const maxValRef = useRef(maxInicial);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );
  const setFiltroMinimo = (valor) => {
    setFiltro((prevState) => ({ ...prevState, ["min" + name]: valor }));
  };
  const setFiltroMaximo = (valor) => {
    setFiltro((prevState) => ({ ...prevState, ["max" + name]: valor }));
  };

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className="container">
      <input
        type="range"
        min={0}
        max={300}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          setFiltroMinimo(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={0}
        max={300}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          setFiltroMaximo(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div
          ref={range}
          className="slider__range"
          style={{ backgroundColor: `${coloresStats[name.toLowerCase()]}` }}
        />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};
