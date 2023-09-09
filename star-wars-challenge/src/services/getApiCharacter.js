import { peopleAdapter } from "./adapters/people.adapter";

async function getApiCharacter(name, url) {
  let datosTotales;
  if (!url) return datosTotales;

  let apiUrl = url;

  try {
    const respuesta = await fetch(apiUrl);
    const datos = await respuesta.json();
    datosTotales = datos.results?.filter(
      (character) => character.name.toLowerCase() === name.toLowerCase()
    );

    if (datosTotales.length === 0) {
      return getApiCharacter(name, datos.next); // URL de la siguiente página o null si no hay más páginas
    }

    datosTotales = await peopleAdapter(datosTotales);
    console.log(datosTotales.length);
    console.log(datosTotales);
    return datosTotales;
  } catch (error) {
    console.error(`Error al obtener datos. Código de estado: ${error}`);
  }
}

export default getApiCharacter;
