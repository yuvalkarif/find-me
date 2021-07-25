export function checkPointers(correctPointer, pointer) {
  if (
    correctPointer.x.start <= pointer.x &&
    pointer.x <= correctPointer.x.end
  ) {
    if (
      correctPointer.y.start <= pointer.y &&
      pointer.y <= correctPointer.y.end
    ) {
      return true;
    }
  }
  return false;
}

export const initialPos = {
  x: 0,
  y: 0,
  showMenu: false,
};
export const initialPointers = {
  pointer1: {
    x: 0,
    y: 0,
    showPointer: false,
    name: "Pink Teddy",
  },
  pointer2: {
    x: 0,
    y: 0,
    showPointer: false,
    name: "Wine Bottle",
  },
};
export const correctPointers = {
  pointer1: {
    x: { start: 1687, end: 1735 },
    y: { start: 276, end: 338 },
  },
  pointer2: {
    x: { start: 216, end: 248 },
    y: { start: 504, end: 571 },
  },
};
