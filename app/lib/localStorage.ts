import { MostVisitedItems } from './definitions';

const MOST_VISITED_RESOURCES = 'MOST_VISITED_RESOURCES';

function isItemAlreadyAdded(
  lsResources: Array<MostVisitedItems>,
  mostVisitedItem: MostVisitedItems
) {
  return (
    lsResources.findIndex(
      (resource: MostVisitedItems) =>
        resource.id === mostVisitedItem.id &&
        resource.resource === mostVisitedItem.resource
    ) > -1
  );
}

function incrementViewInAddedItem(
  lsResources: Array<MostVisitedItems>,
  mostVisitedItem: MostVisitedItems
) {
  const [addedItem] = lsResources.filter(
    (resource: MostVisitedItems) =>
      resource.id === mostVisitedItem.id &&
      resource.resource === mostVisitedItem.resource
  );

  const updatedItem = { ...addedItem, views: addedItem.views + 1 };
  const updatedResources = lsResources.map((resource: MostVisitedItems) => {
    const isItemToReplace =
      resource.id === mostVisitedItem.id &&
      resource.resource === mostVisitedItem.resource;
    return isItemToReplace ? updatedItem : resource;
  });

  return updatedResources;
}

function addNewItem(
  lsResources: Array<MostVisitedItems>,
  mostVisitedItem: MostVisitedItems
) {
  return [...lsResources, mostVisitedItem];
}

function updateResourceToSaveInLS(
  lsResources: Array<MostVisitedItems>,
  mostVisitedItem: MostVisitedItems
) {
  const isItemInLS = isItemAlreadyAdded(lsResources, mostVisitedItem);
  return isItemInLS
    ? incrementViewInAddedItem(lsResources, mostVisitedItem)
    : addNewItem(lsResources, mostVisitedItem);
}

export function saveVisitedResource(mostVisitedItem: MostVisitedItems) {
  if (typeof window !== 'undefined') {
    const lsResources = getVisitedResources() || [];
    const lsNewResources = updateResourceToSaveInLS(
      lsResources,
      mostVisitedItem
    );
    window?.localStorage.setItem(
      MOST_VISITED_RESOURCES,
      JSON.stringify(lsNewResources)
    );
  }
}

export function getVisitedResources(): Array<MostVisitedItems> {
  if (typeof window !== 'undefined') {
    const resources = window?.localStorage.getItem(MOST_VISITED_RESOURCES);
    return resources ? JSON.parse(resources) : [];
  }
  return [];
}
