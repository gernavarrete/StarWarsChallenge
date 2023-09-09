export function peopleAdapter(data) {
  const dataAdapted = data?.map((obj) => ({
    name: obj.name,
    films: obj.films,
    homeworld: obj.homeworld,
    species: obj.species,
    starships: obj.starships,
    url: obj.url,
    vehicles: obj.vehicles,
    physicalCharacteristics: {
      gender: obj.gender,
      hairColor: obj.hair_color,
      eyesColor: obj.eye_color,
      skinColor: obj.skin_color,
      height: obj.height,
      mass: obj.mass,
    },
  }));

  return dataAdapted;
}
