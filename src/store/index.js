import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profile';
import counterReducer from './reducers/counter';
import membersReducer from './reducers/members';
import pokemonReducer from './reducers/pokemon';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    counter: counterReducer,
    members: membersReducer,
    pokemon: pokemonReducer,
  },
});
