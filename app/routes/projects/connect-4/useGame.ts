import { useCallback, useState } from 'react';
import {
  checkWinCondition,
  findFallThroughCol,
  generateBoardState,
  PLAYER1_VAL,
  PLAYER2_VAL,
} from './helpers';
import type { Board, BoardVal, Player, TSpot } from './types';

export const useGame = () => {
  const [gameOver, setIsGameOver] = useState(false);

  /**
   * The board will be represented by a 2d array a 6x7 where each row is an
   * array containing the column's values. -1 will indicate player 2, 1 will
   * indicate player 1
   */
  const [boardState, setBoardState] = useState<Board>(
    generateBoardState(),
  );

  const [turn, setTurn] = useState<Player>('player-1');

  const handleTurn = useCallback((spot: TSpot) => {
    const [row, col] = spot.split(':').map((v) => parseInt(v));

    const [realRow, realCol] = findFallThroughCol(boardState, row, col);

    const hasWon = checkWinCondition(boardState, turn, realRow, realCol);

    const updBoardState = [...boardState] as Board;

    let val: BoardVal = 0;

    if (turn === 'player-1') {
      val = PLAYER1_VAL;
    } else {
      val = PLAYER2_VAL;
    }

    updBoardState[realRow][realCol] = val;

    setBoardState(updBoardState);

    if (hasWon) {
      setIsGameOver(true);

      return;
    }

    setTurn((prev) => {
      if (prev === 'player-1') {
        return 'player-2';
      }

      return 'player-1';
    });
  }, [turn, boardState]);

  const resetGame = useCallback(() => {
    setBoardState(generateBoardState());
    setTurn('player-1');
    setIsGameOver(false);
  }, []);

  return {
    boardState,
    turn,
    gameOver,
    handleTurn,
    resetGame,
  };
};
