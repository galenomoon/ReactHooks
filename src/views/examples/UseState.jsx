// import React from "react";
import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
  const [count, setCount] = useState(0); //State has been set
  const [name, setName] = useState("");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercise #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count + 1)}>
            +1
          </button>
          <button className="btn" onClick={() => setCount(count - 1)}>
            -1
          </button>
          <button
            className="btn"
            onClick={() => setCount((current) => current + 1000)}
          >
            1000
          </button>
          <button className="btn" onClick={() => setCount(0)}>
            Clear
          </button>
        </div>
      </div>
      <SectionTitle title="Exercise #02" />
      <input
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className="text">{name}</span>
    </div>
  );
};

export default UseState;

/*
==================== HOW WORKS USE STATE ====================

==================== CREATING A STATE ====================

EXAMPLE:

   const [name, setName] = useState("Initial...");

_________________________________________________
1) Creation of variable
    - const []
_________________________________________________
2) The variable is an Array with two indexes 
    - const [a, b]
_________________________________________________
3) [variableName, functionName]
    - const [name, setName]
_________________________________________________
4) Set the initial value like this: 
    - const [name, setName] = useState("Initial...");
_________________________________________________

=================== CHANGING STATE's VALUES =================

ONLY WAY TO CHANGE A STATE, IS FOR THE USE OF EVENTS | (onChange(), onClick(), etc...)
WHEN USE AN EVENT, USE THAT FUNCTION 
OF STATE'S VARIABLE LIKE THIS: {onChange={e=> setName(e.target.value)} 

    <input type="text" className="input" value={name} onChange={e=> setName(e.target.value) }/>


*/
