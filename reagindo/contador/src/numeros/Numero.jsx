import { useState } from "react";

export function Numero() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>Numeros Positivos e Negativos</h1>
      <h2>{number}</h2>
      <h2 style={{ color: number >= 0 ? "green" : "red" }}>
        {number >= 0 ? "Positivo" : "Negativo"}
      </h2>
      <input
        type="number"
        value={number}
        onChange={(event) => {
          setNumber(parseInt(event.target.value));
        }}
      />

      <h2>Tabuada</h2>
      <ul>
        {Array.from({ length: 11 }).map((_, i) => {
          return (
            <li key={i}>
              {number} X {i} = {number * i}
            </li>
          );
        })}
      </ul>
    </>
  );
}
