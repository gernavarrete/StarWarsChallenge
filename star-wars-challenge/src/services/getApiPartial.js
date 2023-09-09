import { peopleAdapter } from "./adapters/people.adapter";

async function getApiPartial(type, page) {
  let apiUrl = `https://swapi.dev/api/${type}/?page=${page}&format=json`;
  const respuesta = await fetch(apiUrl);
  const datos = await respuesta.json();

  if (type === "people") {
    datos = await peopleAdapter(datos);
  }
  return datos;
}

export default getApiPartial;
