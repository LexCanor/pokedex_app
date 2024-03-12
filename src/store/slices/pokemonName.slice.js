import { createSlice } from "@reduxjs/toolkit";

const pokemonNameSlice = createSlice({
    name: 'pokemonName',
    initialState: '',
    reducers:{  //actions
        setPokemonName: (currentValue, action) => action.payload
    }
});

export const {setPokemonName} = pokemonNameSlice.actions;
export default pokemonNameSlice.reducer;