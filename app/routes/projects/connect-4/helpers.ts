import type {
  Board,
  Directions,
  Player,
  Player1Value,
  Player2Value,
} from './types';

export const PLAYER1_VAL: Player1Value = 1;
export const PLAYER2_VAL: Player2Value = -1;

export const directionsMatrix: Record<Directions, [number, number]> = {
  north: [-1, 0],
  east: [0, 1],
  south: [1, 0],
  west: [0, -1],
  northEast: [-1, 1],
  southEast: [1, 1],
  northWest: [-1, -1],
  southWest: [1, -1],
};

export const directionsCount: Record<Directions, number> = {
  north: 0,
  east: 0,
  south: 0,
  west: 0,
  northEast: 0,
  southEast: 0,
  northWest: 0,
  southWest: 0,
};

export const checkWinCondition = (
  boardState: Board,
  player: Player,
  row: number,
  col: number,
): boolean => {
  // To check for a win, we need 4 same colored pieces connected together
  // vertically, horizontally, or diagonally.
  //
  // To do this, we can take the "origin", i.e. row and col and do a loop of 4 iterations
  // for every iteration, we check each direction, N/S/E/W/NE/NW/SE/SW
  // If any direction has 4 of the same val, the player has won

  const dc = { ...directionsCount };

  const checkVal = player === 'player-1' ? PLAYER1_VAL : PLAYER2_VAL;

  for (let i = 0; i < 4; i++) {
    // Check every direction
    for (const direction in directionsMatrix) {
      const [dirRow, dirCol] = directionsMatrix[direction as Directions];
      const r = row + (dirRow * (i || 1));
      const c = col + (dirCol * (i || 1));

      if (boardState?.[r]?.[c] === checkVal) {
        dc[direction as Directions]++;
      }
    }
  }

  if (Object.values(dc).some((v) => v >= 4)) {
    return true;
  }

  return false;
};

export const findFallThroughCol = (
  boardState: Board,
  row: number,
  col: number,
) => {
  // We have 7 columns, 6 rows, so if the user chooses [0,0] for instance,
  // We need to find [6,0] (in a clean board).
  // A vertical sliding window seems good, with a window of 2
  // We return the first row/col from the bottom that is 0

  let cur: number = 0,
    next: number = 0;

  for (let i = 0; i < 5; i++) {
    cur = boardState[i][col];
    next = boardState[i + 1][col];

    if (cur === 0 && next !== 0) {
      return [i, col];
    } else if (i === 4 && next === 0) {
      return [i + 1, col];
    } else if (cur === 0 && next === 0) {
      // Keep moving
      continue;
    }
  }

  // This would be a bug, but..
  return [row, col];
};

export const generateBoardState = (): Board => {
  return Array(6).fill([]).map(() => {
    return Array(7).fill(0);
  }) as Board;
};
