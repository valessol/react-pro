export enum CounterActionTypes {
  INCREASE_BY = "increaseBy",
  RESET = "reset",
}
export type CounterAction =
  | { 
        type: CounterActionTypes.INCREASE_BY; 
        payload: { value: number } 
    }
  | { 
        type: CounterActionTypes.RESET 
    };
