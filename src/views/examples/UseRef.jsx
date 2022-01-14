import React, { useState, useRef, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {

  const [value1, setValue1] = useState("");
  const count = useRef(0) //.current


  useEffect(function(){
      count.current = count.current+1
  }, [value1])

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercício #01" />
      <div>
        <span className="text">Value:</span>
        <span className="text"> {value1} [</span>
        <span className="text red">{count.current}</span>
        <span className="text">]</span>
        </div>
      <div className="center">
        <input
          type="text"
          className="input"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
