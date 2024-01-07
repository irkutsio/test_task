export function arrangedBlocks(blocksArr, containerHeight) {
  let blocksArea = 0;
  let maxWidth = 0;
  blocksArr.forEach(block => {
    blocksArea += block.width * block.height;
    maxWidth = Math.max(maxWidth, block.width);
  });

  blocksArr.sort((a, b) => b.height - a.height);

  const startWidth = Math.max(
    Math.ceil(Math.sqrt(blocksArea / 0.95)),
    maxWidth
  );

  const spaces = [{ x: 0, y: 0, w: startWidth, h: containerHeight }];
  const packed = [];

  for (const block of blocksArr) {
    for (let i = spaces.length - 1; i >= 0; i--) {
      const space = spaces[i];
      if (block.width > space.w || block.height > space.h) continue;
      packed.push(Object.assign({}, block, { x: space.x, y: space.y }));

      if (block.width === space.w && block.height === space.h) {
        const last = spaces.pop();
        if (i < spaces.length) spaces[i] = last;
      } else if (block.height === space.h) {
        space.x += block.width;
        space.w -= block.width;
      } else if (block.width === space.w) {
        space.y += block.height;
        space.h -= block.height;
      } else {
        spaces.push({
          x: space.x + block.width,
          y: space.y,
          w: space.w - block.width,
          h: block.height,
        });
        space.y += block.height;
        space.h -= block.height;
      }
      break;
    }
  }

  return packed;
}
