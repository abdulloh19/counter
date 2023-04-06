// import React from 'react'

import React, { useState } from "react";

function Calculator() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(10);

  function add() {
    console.log(a + b);
  }

  function subtract() {
    console.log(a - b);
  }

  function multiply() {
    console.log(a * b);
  }

  function divide() {
    console.log(a / b);
  }

  return (
    <div>
      <button onClick={add}>qoshuv</button>
      <button onClick={subtract}>ayiruv</button>
      <button onClick={multiply}>kopaytiruv</button>
      <button onClick={divide}>bolinma</button>
    </div>
  );
}

export default Calculator;

