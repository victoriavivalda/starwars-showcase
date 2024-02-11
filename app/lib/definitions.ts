export enum SWLocalResource {
  mostVisited = 'mostVisited',
}

export enum SWAPIResource {
  people = 'people',
  vehicles = 'vehicles',
  planets = 'planets',
  starships = 'starships',
  films = 'films',
  species = 'species',
}

interface APIResponseMeta {
  count: number;
  prev?: number;
  next?: number;
}

export interface APIFetchParams {
  search?: string;
  page?: number;
}

export interface APIResponse extends APIResponseMeta {
  results: Array<Person>;
}

export interface PageProps {
  searchParams?: {
    query?: string;
    page?: number;
  };
}

export interface QueryTableProps {
  title: string;
}

export interface LookupTableProps {
  title: string;
  resource: SWAPIResource;
  results: Array<Person | Film | Planet | Species | Vehicle | Starship>;
  headers: Array<TableHeaders>;
}

export interface TableStructure {
  resource: SWAPIResource | SWLocalResource;
  headers: Array<TableHeaders>;
}

export interface TableStructureResource extends TableStructure {
  data: Array<Person | Film | Planet | Species | Vehicle | Starship>;
}

export interface TableStructureMostViewed extends TableStructure {
  data: Array<MostVisitedItems>;
}

export interface TableHeaders {
  key: number;
  label: string;
  field: string;
}

export interface DisplayItem {
  key: number;
  label: string;
  field: string;
}

export interface Item {
  url: string;
  created: string;
  edited: string;
}

export interface Person extends Item {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
}

export interface Film extends Item {
  title: string;
  producer: string;
  director: string;
  opening_crawl: string;
  episode_id: number;
  release_date: string;
  characters: Array<string>;
  species: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
}

export interface Planet extends Item {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: Array<string>;
  films: Array<string>;
}

export interface Species extends Item {
  name: string;
  classification: string;
  designation: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  homeworld: string;
  language: string;
  average_height: number;
  average_lifespan: number;
  people: Array<string>;
  films: Array<string>;
}

export interface Vehicle extends Item {
  name: string;
  model: string;
  manufacturer: string;
  consumables: string;
  vehicle_class: string;
  cost_in_credits: number;
  length: number;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  max_atmosphering_speed: number;
  films: Array<string>;
  pilots: Array<string>;
}

export interface Starship extends Item {
  name: string;
  model: string;
  manufacturer: string;
  consumables: string;
  vehicle_class: string;
  cost_in_credits: number;
  length: number;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  max_atmosphering_speed: number;
  starship_class: string;
  hyperdrive_rating: number;
  MGLT: number;
  films: Array<string>;
  pilots: Array<string>;
}

export interface MostVisitedItems {
  id: string;
  name: string;
  resource: SWAPIResource;
  views: number;
}
