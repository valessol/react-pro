import React, { useReducer } from "react";
import { doIncreaseBy, doReset } from "../reducers/actions";
import { counterReducer, INITIAL_STATE } from "../reducers/reducer/counter";

// // interface CounterState {
// //   counter: number;
// //   previous: number;
// //   changes: number;
// // }

// // const INITIAL_STATE: CounterState = {
// //   counter: 10,
// //   previous: 10,
// //   changes: 0,
// // };

// // type CounterAction =
// //   | { type: "increaseBy"; payload: { value: number } }
// //   | { type: "reset" };

// un reducer recibe un estado anterior y una acción, y devuelve otro estado
// // const counterReducer = (
// //   state: CounterState,
// //   action: CounterAction
// // ): CounterState => {
// //   switch (action.type) {
// //     case "reset":
// //       return { counter: 0, previous: 0, changes: 0 };
// //     default:
// //       return state;
// //   }
// // };

export const CounterReducerComponent = () => {
  // const [state, dispatch] = useReducer(reducer, initialState, init)
  // el reducer es una función pura, es decir que solo trabaja con los argumentos que recibe, sin interacción con el mundo externo. Tampoco puede ser asíncrona, solo trabaja con un estado a traves de esos argumentos.
  // initialState es el estado inicial del reducer
  // init se utiliza cuando se usa lazy loading, una carga perezodsa, cuando el componente ya es construido, se llama el init y se construye
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch(doReset());
  };

  const handleIncreaseBy = (value: number) => {
    dispatch(doIncreaseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
      <button onClick={() => handleIncreaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
