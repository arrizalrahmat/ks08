import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  members: [],
  error: '',
  isLoading: false,
};

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducer: {
    clearMembers: (state) => {
      state.members = initialState.members;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.members = action.payload;
      })
      .addCase(fetchMembers.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const { clearMembers } = membersSlice.actions;

export default membersSlice.reducer;

export const fetchMembers = createAsyncThunk(
  'members/fetchMembers',
  async () => {
    const res = await fetch(
      'https://randomuser.me/api/?results=20'
    );
    const data = await res.json();

    return data.results;
  }
);
