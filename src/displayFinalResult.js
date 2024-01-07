import { calculateFullness } from './calculateFullness';
import { displayCoords } from './displayCoords';

export function displayFinalResult(blocks, container, result) {
    console.log({
      fullness: Number(calculateFullness(blocks, container)),
      blockCoordinates: displayCoords(result),
    });
  }
  