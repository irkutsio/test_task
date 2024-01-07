const fullnessOutput = document.querySelector('.fullness');

export const calculateFullness = (blocks, container) => {
  const { clientHeight, clientWidth } = container;
  let blocksArea = 0;
  let emptySpaceArea = 0;
  let containerArea = clientHeight * clientWidth;

  blocks.forEach(({ height, width }) => {
    blocksArea += height * width;
  });

  emptySpaceArea = containerArea - blocksArea;

  const fullness = 1 - emptySpaceArea / (emptySpaceArea + blocksArea);
  fullnessOutput.textContent = `Fullness: ${fullness.toFixed(2)}`;

  return fullness.toFixed(2);
};
