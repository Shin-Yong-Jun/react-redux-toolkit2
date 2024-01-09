import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {value: 89},
  reducers: {
    up: (state, action) => {
      console.log(action)
      state.value += action.payload
    }
  }
});

export default counterSlice;

//액션들 중에 up만을 내보낸다.
export const {up} = counterSlice.actions;