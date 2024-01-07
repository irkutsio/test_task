import { getRandomHexColor } from './getRandomColor';

let usedColors = {};

export function getColorForSize(width, height) {
  const key = `${width}-${height}`;

  if (!usedColors[key]) {
    usedColors[key] = getRandomHexColor();
  }

  return usedColors[key];
}
