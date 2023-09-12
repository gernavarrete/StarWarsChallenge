export function planetsAdapter(data) {
  const dataAdapted = data?.map((obj) => ({
    name: obj.name,
    diameter: obj.diameter,
    climate: obj.climate,
    gravity: obj.gravity,
    population: obj.population,
    terrain: obj.terrain,
    surfaceWater: obj.surface_water,
    url: obj.url,
  }));

  return dataAdapted;
}
