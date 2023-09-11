import { createSlice } from "@reduxjs/toolkit";

const mockups = [
  {
    name: "Anakin Skywalker",
    films: [
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/",
    ],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: [],
    starships: [
      "https://swapi.dev/api/starships/39/",
      "https://swapi.dev/api/starships/59/",
      "https://swapi.dev/api/starships/65/",
    ],
    url: "https://swapi.dev/api/people/11/",
    vehicles: [
      "https://swapi.dev/api/vehicles/44/",
      "https://swapi.dev/api/vehicles/46/",
    ],

    gender: "male",
    hairColor: "blond",
    eyesColor: "blue",
    skinColor: "fair",
    height: 188,
    mass: 84,
  },
  {
    name: "Luke Skywalker",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/",
    ],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: [],
    starships: [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/22/",
    ],
    url: "https://swapi.dev/api/people/1/",
    vehicles: [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/30/",
    ],

    gender: "male",
    hairColor: "blond",
    eyesColor: "blue",
    skinColor: "fair",
    height: 172,
    mass: 77,
  },
  {
    name: "Anakin Skywalker",
    films: [
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/",
    ],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: [],
    starships: [
      "https://swapi.dev/api/starships/39/",
      "https://swapi.dev/api/starships/59/",
      "https://swapi.dev/api/starships/65/",
    ],
    url: "https://swapi.dev/api/people/11/",
    vehicles: [
      "https://swapi.dev/api/vehicles/44/",
      "https://swapi.dev/api/vehicles/46/",
    ],

    gender: "male",
    hairColor: "blond",
    eyesColor: "blue",
    skinColor: "fair",
    height: 188,
    mass: 84,
  },
  {
    name: "R5-D4",
    films: ["https://swapi.dev/api/films/1/"],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: ["https://swapi.dev/api/species/2/"],
    starships: [],
    url: "https://swapi.dev/api/people/8/",
    vehicles: [],

    gender: "n/a",
    hairColor: "n/a",
    eyesColor: "red",
    skinColor: "white, red",
    height: 97,
    mass: 32,
  },
  {
    name: "Biggs Darklighter",
    films: ["https://swapi.dev/api/films/1/"],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: [],
    starships: ["https://swapi.dev/api/starships/12/"],
    url: "https://swapi.dev/api/people/9/",
    vehicles: [],

    gender: "male",
    hairColor: "black",
    eyesColor: "brown",
    skinColor: "light",
    height: 183,
    mass: 84,
  },
  {
    name: "Biggs Darklighter",
    films: ["https://swapi.dev/api/films/1/"],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: [],
    starships: ["https://swapi.dev/api/starships/12/"],
    url: "https://swapi.dev/api/people/9/",
    vehicles: [],

    gender: "male",
    hairColor: "black",
    eyesColor: "brown",
    skinColor: "light",
    height: 183,
    mass: 84,
  },
  {
    name: "R5-D4",
    films: ["https://swapi.dev/api/films/1/"],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: ["https://swapi.dev/api/species/2/"],
    starships: [],
    url: "https://swapi.dev/api/people/8/",
    vehicles: [],

    gender: "n/a",
    hairColor: "n/a",
    eyesColor: "red",
    skinColor: "white, red",
    height: 97,
    mass: 32,
  },
  {
    name: "Biggs Darklighter",
    films: ["https://swapi.dev/api/films/1/"],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: [],
    starships: ["https://swapi.dev/api/starships/12/"],
    url: "https://swapi.dev/api/people/9/",
    vehicles: [],

    gender: "male",
    hairColor: "black",
    eyesColor: "brown",
    skinColor: "light",
    height: 183,
    mass: 84,
  },
  {
    name: "Biggs Darklighter",
    films: ["https://swapi.dev/api/films/1/"],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: [],
    starships: ["https://swapi.dev/api/starships/12/"],
    url: "https://swapi.dev/api/people/9/",
    vehicles: [],

    gender: "male",
    hairColor: "black",
    eyesColor: "brown",
    skinColor: "light",
    height: 183,
    mass: 84,
  },
  {
    name: "R5-D4",
    films: ["https://swapi.dev/api/films/1/"],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: ["https://swapi.dev/api/species/2/"],
    starships: [],
    url: "https://swapi.dev/api/people/8/",
    vehicles: [],

    gender: "n/a",
    hairColor: "n/a",
    eyesColor: "red",
    skinColor: "white, red",
    height: 97,
    mass: 32,
  },
  {
    name: "Biggs Darklighter",
    films: ["https://swapi.dev/api/films/1/"],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: [],
    starships: ["https://swapi.dev/api/starships/12/"],
    url: "https://swapi.dev/api/people/9/",
    vehicles: [],

    gender: "male",
    hairColor: "black",
    eyesColor: "brown",
    skinColor: "light",
    height: 183,
    mass: 84,
  },
  {
    name: "Biggs Darklighter",
    films: ["https://swapi.dev/api/films/1/"],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: [],
    starships: ["https://swapi.dev/api/starships/12/"],
    url: "https://swapi.dev/api/people/9/",
    vehicles: [],

    gender: "male",
    hairColor: "black",
    eyesColor: "brown",
    skinColor: "light",
    height: 183,
    mass: 84,
  },
  {
    name: "R5-D4",
    films: ["https://swapi.dev/api/films/1/"],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: ["https://swapi.dev/api/species/2/"],
    starships: [],
    url: "https://swapi.dev/api/people/8/",
    vehicles: [],

    gender: "n/a",
    hairColor: "n/a",
    eyesColor: "red",
    skinColor: "white, red",
    height: 97,
    mass: 32,
  },
  {
    name: "Biggs Darklighter",
    films: ["https://swapi.dev/api/films/1/"],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: [],
    starships: ["https://swapi.dev/api/starships/12/"],
    url: "https://swapi.dev/api/people/9/",
    vehicles: [],

    gender: "male",
    hairColor: "black",
    eyesColor: "brown",
    skinColor: "light",
    height: 183,
    mass: 84,
  },
  {
    name: "Biggs Darklighter",
    films: ["https://swapi.dev/api/films/1/"],
    homeworld: "https://swapi.dev/api/planets/1/",
    species: [],
    starships: ["https://swapi.dev/api/starships/12/"],
    url: "https://swapi.dev/api/people/9/",
    vehicles: [],

    gender: "male",
    hairColor: "black",
    eyesColor: "brown",
    skinColor: "light",
    height: 183,
    mass: 84,
  },
];

const initialState = {
  people: [],
  dataFilter: [],
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  planets: [],
};

export const storeSlice = createSlice({
  name: "storeGlobal",
  initialState,
  reducers: {
    getPeoples: (state, action) => {
      state.people = [...state.people, ...action.payload];
    },
    getFilms: (state, action) => {
      state.films = [...state.films, ...action.payload];
    },
    getSpecies: (state, action) => {
      state.species = [...state.species, ...action.payload];
    },
    getPlanets: (state, action) => {
      state.planets = [...state.planets, ...action.payload];
    },
    getVehicles: (state, action) => {
      state.vehicles = [...state.vehicles, ...action.payload];
    },
    getStarships: (state, action) => {
      state.starships = [...state.starships, ...action.payload];
    },
    dataFilter: (state, action) => {
      state.dataFilter = action.payload;
    },
  },
});

export const {
  getPeoples,
  getVehicles,
  getFilms,
  getSpecies,
  getPlanets,
  getStarships,
  dataFilter,
} = storeSlice.actions;

export default storeSlice.reducer;
