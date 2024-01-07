export function displayCoords(blocksArr) {
  let displayResults = [];

  blocksArr.forEach((block, idx) => {
    const { x, y, width, height } = block;
    const top = y;
    const left = x;
    const right = x + width;
    const bottom = y + height;

    displayResults.push({
      top,
      left,
      right,
      bottom,
      initialOrder: idx,
    });
  });

  return displayResults
}
