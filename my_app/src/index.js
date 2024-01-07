import blocks from './blocks.json';
import { createMarkup } from './createMarkup';
import { arrangedBlocks } from './arrangedBlocks';
import { displayFinalResult } from './displayFinalResult';

const container = document.getElementById('root');
let containerHeight = container.clientHeight;

const initialResult = arrangedBlocks(blocks, containerHeight);
container.insertAdjacentHTML('beforeend', createMarkup(blocks, initialResult));
displayFinalResult(blocks, container, initialResult);

window.addEventListener('resize', () => {
  containerHeight = container.clientHeight;
  const result = arrangedBlocks(blocks, containerHeight);
  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', createMarkup(blocks, result));
  displayFinalResult(blocks, container, result)
});

