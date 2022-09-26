import Counter from './bases/Counter';
import CounterBy from './bases/CounterBy';
import CounterEffect from './bases/CounterEffect';
import CounterHook from './bases/CounterHook';
import { CounterReducerComponent as CounterReducer } from './counter-reducer/CounterReducer';
import {CounterReducerComponent} from './bases/CounterReducer';
function App() {
  return (
    <>
    <h1>React</h1>
    <Counter  initialValue={15}/>
    <CounterBy/>
    <CounterEffect/>
    <CounterHook/>
    <CounterReducerComponent/>
    <CounterReducer/>
    </>
  );
}

export default App;
