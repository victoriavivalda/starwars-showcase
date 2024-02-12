import { MostVisitedItems, SWAPIResource } from '@/app/lib/definitions';
import {
  getVisitedResources,
  saveVisitedResource,
} from '@/app/lib/localStorage';

const key = 'MOST_VISITED_RESOURCES';

const lsPersonItem = {
  id: '1-people',
  name: 'Baby Yoda',
  resource: SWAPIResource.people,
  views: 1,
};
const lsVehicle = {
  id: '1-vehicles',
  name: 'Awesome SW Car',
  resource: SWAPIResource.vehicles,
  views: 1,
};

const getAsString = (
  item: MostVisitedItems,
  priorItems: Array<MostVisitedItems>
) => JSON.stringify([...priorItems, item]);

const mockGetItem = jest.fn((key) => JSON.stringify([]));
const mockSetItem = jest.fn();

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (key: string) => mockGetItem(key),
    setItem: (...args: string[]) => mockSetItem(...args),
  },
  writable: true,
});

describe('Most Popular Views: save and get from local storage when no data saved', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should call getItem once returning none items', async () => {
    const noMostVisitedItems: Array<MostVisitedItems> = [];
    const mockGetItem = jest.fn((key) => JSON.stringify(noMostVisitedItems));
    window.localStorage.getItem = (key: string) => mockGetItem(key);

    const resources = getVisitedResources();

    expect(mockGetItem).toHaveBeenCalledTimes(1);
    expect(mockGetItem).toHaveBeenCalledWith(key);
    expect(resources).toEqual(noMostVisitedItems);
  });

  it('Should call setItem once without incrementing the number of views on first save', async () => {
    const noMostVisitedItems: Array<MostVisitedItems> = [];
    const mockGetItem = jest.fn((key) => JSON.stringify(noMostVisitedItems));
    window.localStorage.getItem = (key: string) => mockGetItem(key);
    const lsItemsAsString = getAsString(lsVehicle, []);

    saveVisitedResource(lsVehicle);

    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith(key, lsItemsAsString);
  });
});

describe('Most Popular Views: save and get from local storage with prior items saved', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should call getItem once returning the previous items', async () => {
    const mostVisitedItems: Array<MostVisitedItems> = [lsPersonItem];
    const mockGetItem = jest.fn((key) => JSON.stringify(mostVisitedItems));
    window.localStorage.getItem = (key: string) => mockGetItem(key);

    const resources = getVisitedResources();

    expect(mockGetItem).toHaveBeenCalledTimes(1);
    expect(mockGetItem).toHaveBeenCalledWith(key);
    expect(resources).toEqual(mostVisitedItems);
  });

  it('Should call setItem incrementing the number of views once when the item already exists', async () => {
    const mostVisitedItems: Array<MostVisitedItems> = [lsPersonItem];
    const mockGetItem = jest.fn((key) => JSON.stringify(mostVisitedItems));
    window.localStorage.getItem = (key: string) => mockGetItem(key);
    const lsPersonItemIncrementingView = {
      ...lsPersonItem,
      views: lsPersonItem.views + 1,
    };
    const lsItemsAsString = getAsString(lsPersonItemIncrementingView, []);

    saveVisitedResource(lsPersonItem);

    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith(key, lsItemsAsString);
  });

  it('Should call setItem without increasing the number of views when the item does not exist', async () => {
    const mostVisitedItems: Array<MostVisitedItems> = [lsPersonItem];
    const mockGetItem = jest.fn((key) => JSON.stringify(mostVisitedItems));
    window.localStorage.getItem = (key: string) => mockGetItem(key);
    const lsItemsAsString = getAsString(lsVehicle, mostVisitedItems);

    saveVisitedResource(lsVehicle);

    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith(key, lsItemsAsString);
  });
});
