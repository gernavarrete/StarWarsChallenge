import { peopleAdapter } from "./adapters/people.adapter";
import { vehiclesAdapter } from "./adapters/vehicles.adapter";

async function getApiCategory(name, url, category) {
  let datosTotales;
  if (!url) return datosTotales;
  console.log(category);
  let apiUrl = url;

  try {
    const respuesta = await fetch(apiUrl);
    const datos = await respuesta.json();
    datosTotales = datos.results?.filter(
      (character) => character.name.toLowerCase() === name.toLowerCase()
    );

    if (datosTotales.length === 0) {
      return getApiCategory(name, datos.next, category); // URL de la siguiente página o null si no hay más páginas
    }

    if (category === "people") datosTotales = await peopleAdapter(datosTotales);
    if (category === "vehicles")
      datosTotales = await vehiclesAdapter(datosTotales);
    console.log(datosTotales.length);
    console.log(datosTotales);
    return datosTotales;
  } catch (error) {
    console.error(`Error al obtener datos. Código de estado: ${error}`);
  }
}

export default getApiCategory;
