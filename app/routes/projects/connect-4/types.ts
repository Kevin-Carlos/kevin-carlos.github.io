export type Directions =
  | 'north'
  | 'east'
  | 'south'
  | 'west'
  | 'northEast'
  | 'southEast'
  | 'northWest'
  | 'southWest';

export type Player = 'player-1' | 'player-2';
export type TSpot = `${number}:${number}`;

/**
 * -1 for player-2
 * 0, unchosen
 * 1 for player-1
 */
export type BoardVal = -1 | 0 | 1;
export type Player1Value = Extract<BoardVal, 1>;
export type Player2Value = Extract<BoardVal, -1>;

export type Row = [
  BoardVal,
  BoardVal,
  BoardVal,
  BoardVal,
  BoardVal,
  BoardVal,
  BoardVal,
];

export type Board = [
  Row,
  Row,
  Row,
  Row,
  Row,
  Row,
];
