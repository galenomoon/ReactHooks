// import React, {useEffect} from 'react'
import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFactorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  useEffect(
    function () {
      setFactorial(calcFactorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      if (factorial > 1000) {
        document.title = "Eita";
      }
    },
    [factorial]
  );

//   useEffect(
//     function () {
//       if (number2 % 2 === 0) {
//         setStatus("Par");
//       } else {
//         setStatus("Ímpar");
//       }
//     },
//     [status]
//   );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercise #01" />
      <div className="center">
        <div>
          <span className="text">Factorial:</span>
          <span className="text red">
            {" "}
            {factorial === -1 ? "Not Exits" : factorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercise #02" />
      <div className="center">
        {/* <div>
          <span className="text">Status:</span>
          <span className="text red">{status}</span>
        </div>
        <input
          type="number"
          className="input"
          value={number2}
          onChange={(e) => setStatus(e.target.status)}
        /> */}
      </div>
    </div>
  );
};

export default UseEffect;

/*
==================== HOW WORKS USE EFFECTS ====================

STRUCTURE:

  useEffect(function () {expression}},[conditionalElement]);


  Basically it's like:
{what do you want to happen} when [this] is modified
 */
