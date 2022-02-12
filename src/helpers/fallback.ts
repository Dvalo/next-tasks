import { collectionBgColors, collectionBorderColors } from "@config/color-map";

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

export { backgroundColorFallback, borderColorFallback };
