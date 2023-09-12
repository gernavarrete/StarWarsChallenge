export function filmsAdapter(data) {
  const dataAdapted = data?.map((obj) => ({
    name: obj.title,
    introduction: obj.opening_crawl,
    director: obj.director,
    producer: obj.producer,
    url: obj.url,
    releaseDate: obj.release_date,
  }));

  return dataAdapted;
}
