export const locationToRoute = (location) => {
  return {
    path: location.pathname,
    hash: location.hash,
  };
};
