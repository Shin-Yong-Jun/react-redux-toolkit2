import {configureStore} from '@reduxjs/toolkit'  
import counterSlice from './counterSlice';



const store = configureStore({
  reducer: {
    //up 뿐 아니라 다른 리듀서들도 다 있을수 있는데 여기에서 리듀서들을 하나로 합쳐준다.
    counter:counterSlice.reducer
  }
});

export default store;

/*
//툴킷 슬라이스 적용하기 전, 리듀서에서 액션받으면 상태변경하는 분기처리함
function reducer(state, action) {
  if(action.type === 'UP') {
    return {...state, value: state.value + action.step}
  }
  return state;
}

const initialState = { value: 0 };
const store = createStore(reducer, initialState);

*/