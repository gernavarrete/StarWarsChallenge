export function starshipsAdapter(data) {
  const dataAdapted = data?.map((obj) => ({
    name: obj.name,
    passengers: obj.passengers,
    length: obj.length,
    model: obj.model,
    url: obj.url,
    manufacturer: obj.manufacturer,
    crew: obj.crew,
    starshipClass: obj.starship_class,
  }));

  return dataAdapted;
}
