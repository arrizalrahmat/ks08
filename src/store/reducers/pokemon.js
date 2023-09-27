import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  isLoading: false,
  error: '',
  next: '',
  previous: '',
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    clearPokemon: (state) => {
      state.pokemons = initialState.pokemons;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.pokemons = action.payload.results;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.isLoading = false;
      })
      .addCase(fetchPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemons.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const { clearPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (url) => {
    const res = await fetch(url);
    const { results, next, previous } = await res.json();

    return { results, next, previous };
  }
);
