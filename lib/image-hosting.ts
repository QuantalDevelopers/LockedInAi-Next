export function constructImageURL(imagePath: string) {
  const cdnPath = "https://d1n3oewcfgleny.cloudfront.net";
  return `${cdnPath}${imagePath}`;
}
