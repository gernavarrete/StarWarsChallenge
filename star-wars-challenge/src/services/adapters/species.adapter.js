export function speciesAdapter(data) {
  const dataAdapted = data?.map((obj) => ({
    name: obj.name,
    classification: obj.classification,
    designation: obj.designation,
    averageHeight: obj.average_height,
    averageLifespan: obj.average_lifespan,
    url: obj.url,
    language: obj.language,
  }));

  return dataAdapted;
}
