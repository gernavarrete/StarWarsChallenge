import { filmsAdapter } from "./adapters/films.adapter";
import { peopleAdapter } from "./adapters/people.adapter";
import { planetsAdapter } from "./adapters/planets.adapter";
import { speciesAdapter } from "./adapters/species.adapter";
import { starshipsAdapter } from "./adapters/starships.adapter";
import { vehiclesAdapter } from "./adapters/vehicles.adapter";

async function getApiCategory(name, url, category) {
  let datosTotales;
  if (!url) return datosTotales;

  let apiUrl = url;

  try {
    const respuesta = await fetch(apiUrl);
    const datos = await respuesta.json();

    if (category === "films")
      datosTotales = datos.results?.filter(
        (character) => character.title.toLowerCase() === name.toLowerCase()
      );
    else
      datosTotales = datos.results?.filter(
        (character) => character.name.toLowerCase() === name.toLowerCase()
      );

    if (datosTotales.length === 0) {
      return getApiCategory(name, datos.next, category); // URL de la siguiente página o null si no hay más páginas
    }

    if (category === "people") datosTotales = await peopleAdapter(datosTotales);
    if (category === "vehicles")
      datosTotales = await vehiclesAdapter(datosTotales);
    if (category === "starships")
      datosTotales = await starshipsAdapter(datosTotales);
    if (category === "species")
      datosTotales = await speciesAdapter(datosTotales);
    if (category === "planets")
      datosTotales = await planetsAdapter(datosTotales);
    if (category === "films") datosTotales = await filmsAdapter(datosTotales);

    return datosTotales;
  } catch (error) {
    console.error(`Error al obtener datos. Código de estado: ${error}`);
  }
}

export default getApiCategory;
