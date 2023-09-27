import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'arrizal',
  id: 1,
  profession: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfession: (state, action) => {
      state.profession = action.payload;
    },
  },
});

export const { setProfession } = profileSlice.actions;

export default profileSlice.reducer;
