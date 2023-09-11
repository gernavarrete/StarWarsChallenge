export function vehiclesAdapter(data) {
  const dataAdapted = data?.map((obj) => ({
    name: obj.name,
    vehicleClass: obj.vehicle_class,
    passengers: obj.passengers,
    length: obj.length,
    model: obj.model,
    url: obj.url,
    manufacturer: obj.manufacturer,
    crew: obj.crew,
  }));

  return dataAdapted;
}
