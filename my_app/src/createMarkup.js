import { getColorForSize } from './getColorForSize';

export function createMarkup(arr, coords) {
  const markup = arr
    .map((item, idx) => {
      const backgroundColor = getColorForSize(item.width, item.height);
      const { x, y } = coords[idx];
      return `
        <div style="width: ${item.width}px; height: ${
        item.height
      }px; background-color: ${backgroundColor}; border: 1px grey solid; position: absolute; left: ${x}px; top: ${y}px;">
          <span>${idx}</span>
        </div>`;
    })
    .join('');

  return markup;
}


