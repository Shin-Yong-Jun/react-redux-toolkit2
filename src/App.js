import "./App.css";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import {up} from './counterSlice';

function Counter() {
  const count = useSelector(state=> {
    return state.counter.value;

  });
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>{
        // dispatch({type: 'counterSlice/up', step:2});
        dispatch(up(2));
      }}>+</button> {count}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

