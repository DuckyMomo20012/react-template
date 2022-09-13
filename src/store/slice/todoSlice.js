import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      // ✅ This "mutating" code is okay inside of createSlice!
      state.push(action.payload);
    },
    todoToggled(state, action) {
      const todo = state.find((todoItem) => todoItem.id === action.payload);
      todo.completed = !todo.completed;
    },
    // eslint-disable-next-line no-unused-vars
    todosLoading(state, action) {
      return {
        ...state,
        status: 'loading',
      };
    },
  },
});

export const { todoAdded, todoToggled, todosLoading } = todosSlice.actions;

export default todosSlice.reducer;
