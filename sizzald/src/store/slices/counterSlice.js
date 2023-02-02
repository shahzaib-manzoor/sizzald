import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import ApiServices from '../../services/ApiServices';
const initialState = {
  count: 12,
};
export const fetchData = createAsyncThunk('data/fetch', async () => {
    try {
      const response = await ApiServices.get('/ads');
      return response.data;
    } catch (error) {
      return error;
    }
  });
const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    decrementWithAction: (state, action) => {
      state.count = state.count - action.payload;
    },
    extraReducers: {
        [fetchData.pending]: (state) => {
          state.loading = true;
          state.error = null;
        },
        [fetchData.fulfilled]: (state, action) => {
          state.loading = false;
          state.data = action.payload;
        },
        [fetchData.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.error;
        },
      },
  },
});
export const { increment, decrement, decrementWithAction } = counterSlice.actions
export default   counterSlice.reducer

 