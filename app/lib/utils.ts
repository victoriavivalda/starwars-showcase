export function getResourceId(url: string) {
  //TO DO: improve how to get ID
  return url.split('/')[5];
}
