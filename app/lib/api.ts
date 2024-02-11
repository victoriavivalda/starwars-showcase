import {
  APIFetchParams,
  SWAPIResource,
  Person,
  MostVisitedItems,
  Film,
  Species,
  Vehicle,
  Starship,
  Planet,
} from './definitions';

export async function fetchPeople(queryParams: APIFetchParams) {
  return fetchSWApi(SWAPIResource.people, queryParams);
}

export async function fetchPerson(id: number) {
  const person: Person = await fetchSWApiById(SWAPIResource.people, id);
  person.homeworld = await fetchSWApiByUrl(person.homeworld);
  person.films = await fetchThroughUrls(person.films);
  person.species = await fetchThroughUrls(person.species);
  person.vehicles = await fetchThroughUrls(person.vehicles);
  person.starships = await fetchThroughUrls(person.starships);

  return person;
}

export async function fetchFilms(queryParams: APIFetchParams) {
  return fetchSWApi(SWAPIResource.films, queryParams);
}

export async function fetchFilm(id: number) {
  const film: Film = await fetchSWApiById(SWAPIResource.films, id);
  film.characters = await fetchThroughUrls(film.characters);
  film.species = await fetchThroughUrls(film.species);
  film.vehicles = await fetchThroughUrls(film.vehicles);
  film.starships = await fetchThroughUrls(film.starships);

  return film;
}

export async function fetchSpecies(queryParams: APIFetchParams) {
  return fetchSWApi(SWAPIResource.species, queryParams);
}

export async function fetchSpecificSpecies(id: number) {
  const species: Species = await fetchSWApiById(SWAPIResource.species, id);
  species.homeworld = await fetchSWApiByUrl(species.homeworld);
  species.films = await fetchThroughUrls(species.films);
  species.people = await fetchThroughUrls(species.people);
  return species;
}

export async function fetchVehicles(queryParams: APIFetchParams) {
  return fetchSWApi(SWAPIResource.vehicles, queryParams);
}

export async function fetchVehicle(id: number) {
  const vehicle: Vehicle = await fetchSWApiById(SWAPIResource.vehicles, id);
  vehicle.films = await fetchThroughUrls(vehicle.films);
  vehicle.pilots = await fetchThroughUrls(vehicle.pilots);

  return vehicle;
}

export async function fetchPlanets(queryParams: APIFetchParams) {
  return fetchSWApi(SWAPIResource.planets, queryParams);
}

export async function fetchPlanet(id: number) {
  const planet: Planet = await fetchSWApiById(SWAPIResource.planets, id);
  planet.films = await fetchThroughUrls(planet.films);
  planet.residents = await fetchThroughUrls(planet.residents);

  return planet;
}

export async function fetchStarships(queryParams: APIFetchParams) {
  return fetchSWApi(SWAPIResource.starships, queryParams);
}

export async function fetchStarship(id: number) {
  const starship: Starship = await fetchSWApiById(SWAPIResource.starships, id);
  starship.films = await fetchThroughUrls(starship.films);
  starship.pilots = await fetchThroughUrls(starship.pilots);

  return starship;
}

export async function fetchSWApi(
  resource: SWAPIResource,
  queryParams: APIFetchParams
) {
  const BASE_SW_API = 'https://swapi.dev/api/';
  const query = composeQuery(queryParams);
  try {
    const response = await fetch(`${BASE_SW_API}/${resource}/${query}`);
    return await response.json();
  } catch (e) {
    console.log(`Error: ${e}`);
    return [];
  }
}

function composeQuery({ search, page }: APIFetchParams) {
  let query = '';
  if (search) {
    query = `?search=${search}`;
    if (page) query += `&page=${page}`;
  } else if (page) {
    query += `?page=${page}`;
  }
  return query;
}

export async function fetchSWApiById(resource: SWAPIResource, id: number) {
  const BASE_SW_API = 'https://swapi.dev/api/';
  try {
    const response = await fetch(`${BASE_SW_API}/${resource}/${id}`);
    return await response.json();
  } catch (e) {
    console.log(`Error: ${e}`);
    return [];
  }
}

export async function fetchSWApiByUrl(url: string) {
  try {
    if (!url) return;
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.log(`Error: ${e}`);
    return [];
  }
}

function fetchThroughUrls(urls: Array<string>) {
  return Promise.all(
    urls?.map((url) => {
      return fetchSWApiByUrl(url);
    })
  );
}

export async function fetchMostVisited() {
  const mostVisited: Array<MostVisitedItems> = [];
  return mostVisited;
}
