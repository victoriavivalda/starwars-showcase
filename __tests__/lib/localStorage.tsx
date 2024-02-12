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

const mostVisitedItems: Array<MostVisitedItems> = [lsPersonItem];
const mockGetItem = jest.fn((key) => JSON.stringify(mostVisitedItems));
const mockSetItem = jest.fn();

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (key: string) => mockGetItem(key),
    setItem: (...args: string[]) => mockSetItem(...args),
  },
});

describe('Test setting and getting most popular views in local storage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call local storage getItem method returning the item', async () => {
    const resources = getVisitedResources();

    expect(mockGetItem).toHaveBeenCalledTimes(1);
    expect(mockGetItem).toHaveBeenCalledWith(key);
    expect(resources).toEqual(mostVisitedItems);
  });

  it('should call local storage setItem method incrementing once views quantity when item exist', async () => {
    const lsPersonItemIncrementingView = {
      ...lsPersonItem,
      views: lsPersonItem.views + 1,
    };
    const lsItemsAsString = JSON.stringify([lsPersonItemIncrementingView]);

    saveVisitedResource(lsPersonItem);

    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith(key, lsItemsAsString);
  });

  it('should call local storage setItem method without incrementing once views quantity when doesnt item exist', async () => {
    const lsVehicle = {
      id: '1-vehicles',
      name: 'Awesome SW Car',
      resource: SWAPIResource.vehicles,
      views: 1,
    };

    const lsItemsAsString = JSON.stringify([...mostVisitedItems, lsVehicle]);

    saveVisitedResource(lsVehicle);

    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith(key, lsItemsAsString);
  });
});
