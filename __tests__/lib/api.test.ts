import {
  fetchFilm,
  fetchFilms,
  fetchPeople,
  fetchPerson,
  fetchPlanet,
  fetchPlanets,
  fetchSpecies,
  fetchSpecificSpecies,
  fetchStarship,
  fetchStarships,
  fetchVehicle,
  fetchVehicles,
} from '@/app/lib/api';
import { APIFetchParams, SWAPIResource } from '@/app/lib/definitions';

const BASE_SW_API = 'https://swapi.dev/api/';

describe('Test API: Fetching resources', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    ) as jest.Mock;
  });

  describe('Fetch People Resource', () => {
    it('Should call the proper person url', () => {
      const id = 0;
      const url = `${BASE_SW_API}/${SWAPIResource.people}/${id}`;

      fetchPerson(id);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('Should call the proper people url without query parameters', () => {
      const queryParams: APIFetchParams = {
        page: undefined,
        search: '',
      };
      const url = `${BASE_SW_API}/${SWAPIResource.people}/`;

      fetchPeople(queryParams);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('Should call the proper people url with query parameters', () => {
      const queryParams: APIFetchParams = {
        page: 2,
        search: 'max',
      };
      const url = `${BASE_SW_API}/${SWAPIResource.people}/?search=${queryParams.search}&page=${queryParams.page}`;

      fetchPeople(queryParams);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });
  });

  describe('Fetch Films Resource', () => {
    it('Should call the proper film url', () => {
      const id = 0;
      const url = `${BASE_SW_API}/${SWAPIResource.films}/${id}`;

      fetchFilm(id);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('Should call the proper films url without query parameters', () => {
      const queryParams: APIFetchParams = {
        page: undefined,
        search: '',
      };
      const url = `${BASE_SW_API}/${SWAPIResource.films}/`;

      fetchFilms(queryParams);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('Should call the proper films url with query parameters', () => {
      const queryParams: APIFetchParams = {
        page: 2,
        search: 'max',
      };
      const url = `${BASE_SW_API}/${SWAPIResource.films}/?search=${queryParams.search}&page=${queryParams.page}`;

      fetchFilms(queryParams);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });
  });

  describe('Fetch Species Resource', () => {
    it('Should call the proper species url', () => {
      const id = 0;
      const url = `${BASE_SW_API}/${SWAPIResource.species}/${id}`;

      fetchSpecificSpecies(id);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('Should call the proper species url without query parameters', () => {
      const queryParams: APIFetchParams = {
        page: undefined,
        search: '',
      };
      const url = `${BASE_SW_API}/${SWAPIResource.species}/`;

      fetchSpecies(queryParams);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('Should call the proper species url with query parameters', () => {
      const queryParams: APIFetchParams = {
        page: 2,
        search: 'max',
      };
      const url = `${BASE_SW_API}/${SWAPIResource.species}/?search=${queryParams.search}&page=${queryParams.page}`;

      fetchSpecies(queryParams);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });
  });

  describe('Fetch Vehicles Resource', () => {
    it('Should call the proper vehicle url', () => {
      const id = 0;
      const url = `${BASE_SW_API}/${SWAPIResource.vehicles}/${id}`;

      fetchVehicle(id);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('Should call the proper vehicles url without query parameters', () => {
      const queryParams: APIFetchParams = {
        page: undefined,
        search: '',
      };
      const url = `${BASE_SW_API}/${SWAPIResource.vehicles}/`;

      fetchVehicles(queryParams);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('Should call the proper vehicles url with query parameters', () => {
      const queryParams: APIFetchParams = {
        page: 2,
        search: 'max',
      };
      const url = `${BASE_SW_API}/${SWAPIResource.vehicles}/?search=${queryParams.search}&page=${queryParams.page}`;

      fetchVehicles(queryParams);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });
  });

  describe('Fetch Planets Resource', () => {
    it('Should call the proper planet url', () => {
      const id = 0;
      const url = `${BASE_SW_API}/${SWAPIResource.planets}/${id}`;

      fetchPlanet(id);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('Should call the proper planets url without query parameters', () => {
      const queryParams: APIFetchParams = {
        page: undefined,
        search: '',
      };
      const url = `${BASE_SW_API}/${SWAPIResource.planets}/`;

      fetchPlanets(queryParams);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('Should call the proper planets url with query parameters', () => {
      const queryParams: APIFetchParams = {
        page: 2,
        search: 'max',
      };
      const url = `${BASE_SW_API}/${SWAPIResource.planets}/?search=${queryParams.search}&page=${queryParams.page}`;

      fetchPlanets(queryParams);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });
  });

  describe('Fetch Starships Resource', () => {
    it('Should call the proper starships url', () => {
      const id = 0;
      const url = `${BASE_SW_API}/${SWAPIResource.starships}/${id}`;

      fetchStarship(id);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('Should call the proper starships url without query parameters', () => {
      const queryParams: APIFetchParams = {
        page: undefined,
        search: '',
      };
      const url = `${BASE_SW_API}/${SWAPIResource.starships}/`;

      fetchStarships(queryParams);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('Should call the proper starships url with query parameters', () => {
      const queryParams: APIFetchParams = {
        page: 2,
        search: 'max',
      };
      const url = `${BASE_SW_API}/${SWAPIResource.starships}/?search=${queryParams.search}&page=${queryParams.page}`;

      fetchStarships(queryParams);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });
  });
});
