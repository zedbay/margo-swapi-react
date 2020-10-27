export function getIdFromUrl(url) {
  return parseInt(url.replace(/\D+/g, ''), 10);
}
