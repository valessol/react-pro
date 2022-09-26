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

    
export const doReset = (): CounterAction => ({ type: CounterActionTypes.RESET });

export const doIncreaseBy = (value: number): CounterAction => ({ type: CounterActionTypes.INCREASE_BY, payload: { value } });