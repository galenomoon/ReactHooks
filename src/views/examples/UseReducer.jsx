import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0, //focus
};

function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "numberMulti7":
      return { ...state, number: state.number * 7 };
    case "numberDiv25":
      return { ...state, number: state.number / 25 };
    case "numberInt":
      return { ...state, number: parseInt(state.number) };
    case "login":
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">No User</span>
        )}
        <span className="text">{state.number}</span>

        <div>
          <button
            className="btn"
            onClick={(_) => dispatch({ type: "login", payload: "Maria" })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={(_) => dispatch({ type: "numberAdd2" })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={(_) => dispatch({ type: "numberMulti7" })}
          >
            x*7
          </button>
          <button
            className="btn"
            onClick={(_) => dispatch({ type: "numberDiv25" })}
          >
            x/25
          </button>
          <button
            className="btn"
            onClick={(_) => dispatch({ type: "numberInt" })}
          >
            toInt
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
