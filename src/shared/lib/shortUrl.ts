export const shortUrl = (url: string | undefined) => {
  const thirdSlashIndex = url?.indexOf("/", url.indexOf("/") + 2);

  return thirdSlashIndex !== -1 ? url?.substring(0, thirdSlashIndex) : "";
};
