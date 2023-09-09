import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  peoples: [],
  peoplePagination: [],
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  planets: [],
};

export const peopleSlice = createSlice({
  name: "storeGlobal",
  initialState,
  reducers: {
    getPeoples: (state, action) => {
      state.peoples = [...state.peoples, ...action.payload];
    },
    getFilms: (state, action) => {
      state.films = action.payload;
    },
    getSpecies: (state, action) => {
      state.species = action.payload;
    },
    getPlanets: (state, action) => {
      state.planets = action.payload;
    },
    getVehicles: (state, action) => {
      state.vehicles = action.payload;
    },
    getStarships: (state, action) => {
      state.starships = action.payload;
    },
    getPeoplePagination: (state, action) => {
      state.peoplePagination = action.payload;
    },
  },
});

export const { getPeoples, getPeoplePagination } = peopleSlice.actions;

export default peopleSlice.reducer;
