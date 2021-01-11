export function linkStartsWithHttps(url: string) {
  return /(http(s?)):\/\//i.test(url);
}
