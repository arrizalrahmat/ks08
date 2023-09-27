import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  detail: {},
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
      })
      .addCase(
        fetchPokemonDetail.fulfilled,
        (state, action) => {
          state.detail = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchPokemonDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemonDetail.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const { clearPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    const { results, next, previous } = data;

    console.log(data);

    return { results, next, previous };
  }
);

export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/fetchPokemonDetail',
  async (id) => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const data = await res.json();

    return data;
  }
);
