import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";
import DataContext from "../../data/DataContext";

const UseContext = (props) => {
  const context = useContext(DataContext);

  function addNumber(delta) {
    context.setState({
      ...context.state, //Restoring the others attributes keeping their values
      number: context.state.number + delta,
    });
  }

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <div className="center">
        <span className="text">
          {context.state.text} {context.state.number}
        </span>

        <button className="btn" onClick={() => addNumber(-1)}>
          -1
        </button>
        <button className="btn" onClick={() => addNumber(+1)}>
          +1
        </button>
      </div>
    </div>
  );
};

export default UseContext;
