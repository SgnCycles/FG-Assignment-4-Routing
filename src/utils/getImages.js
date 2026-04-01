export const getImageUrl = imageParameter => {
  return new URL(`../assets/images/${imageParameter}`, import.meta.url);
}

export const getIconUrl = iconParameter => {
  return new URL(`../assets/icons/${iconParameter}`, import.meta.url);
}