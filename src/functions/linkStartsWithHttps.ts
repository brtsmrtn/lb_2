export function linkStartsWithHttps(url: string): boolean {
  return /(http(s?)):\/\//i.test(url);
}
