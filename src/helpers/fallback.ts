import {
  collectionBgColors,
  collectionBorderColors,
  collectionTextColors,
} from "@config/color-map";

function backgroundColorFallback(color: string) {
  if (collectionBgColors[color]) {
    return collectionBgColors[color];
  }
  return collectionBgColors.default;
}

function borderColorFallback(color: string) {
  if (collectionBorderColors[color]) {
    return collectionBorderColors[color];
  }
  return collectionBorderColors.default;
}

function textColorFallback(color: string) {
  if (collectionTextColors[color]) {
    return collectionTextColors[color];
  }
  return collectionTextColors.default;
}

export { backgroundColorFallback, borderColorFallback, textColorFallback };
