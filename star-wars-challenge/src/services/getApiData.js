import { filmsAdapter } from "./adapters/films.adapter";
import { peopleAdapter } from "./adapters/people.adapter";
import { planetsAdapter } from "./adapters/planets.adapter";
import { speciesAdapter } from "./adapters/species.adapter";
import { starshipsAdapter } from "./adapters/starships.adapter";
import { vehiclesAdapter } from "./adapters/vehicles.adapter";

async function getApiData(type) {
  let apiUrl = `https://swapi.dev/api/${type}/?format=json`;

  let datosTotalesName = [];

  while (apiUrl) {
    try {
      const respuesta = await fetch(apiUrl);
      const datos = await respuesta.json();
      datosTotalesName = datosTotalesName.concat(datos.results);
      apiUrl = datos.next; // URL de la siguiente página o null si no hay más páginas
    } catch (error) {
      console.error(`Error al obtener datos. Código de estado: ${error}`);
    }
  }
  if (type === "films")
    datosTotalesName = datosTotalesName.map((obj) => obj.title);
  else datosTotalesName = datosTotalesName.map((obj) => obj.name);
  return datosTotalesName;
}

export default getApiData;
