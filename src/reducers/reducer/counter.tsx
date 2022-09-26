import { CounterAction } from "../actions";
import { INCREASE_BY, RESET } from "../actions/actionTypes";

export interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

export const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
    const {counter, changes} = state;
  switch (action.type) {
    case RESET:
      return { counter: 0, previous: 0, changes: 0 };
    case INCREASE_BY:
      return {
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1,
      };
    default:
      return state;
  }
};
