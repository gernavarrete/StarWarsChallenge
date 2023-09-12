import { peopleAdapter } from "./adapters/people.adapter";

async function getApiData(type) {
  let apiUrl = `https://swapi.dev/api/${type}/?format=json`;

  let datosTotales = [];

  while (apiUrl) {
    try {
      const respuesta = await fetch(apiUrl);
      const datos = await respuesta.json();
      datosTotales = datosTotales.concat(datos.results);
      apiUrl = datos.next; // URL de la siguiente página o null si no hay más páginas
    } catch (error) {
      console.error(`Error al obtener datos. Código de estado: ${error}`);
    }
  }

  if (type === "people") {
    datosTotales = await peopleAdapter(datosTotales);
  }
  return datosTotales;
}

export default getApiData;
