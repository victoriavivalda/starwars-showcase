export function getResourceId(url: string) {
  //TO DO: improve how to get ID
  const urlWithoutQueryParams = url.split('?')[0];
  return urlWithoutQueryParams.split('/')[5];
}
