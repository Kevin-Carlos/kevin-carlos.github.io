import clsx from 'clsx';
import { Fragment } from 'react';
import { PillButton } from '~/common/ui-elements';
import type { BoardVal, TSpot } from './projects/connect-4/types';
import { useGame } from './projects/connect-4/useGame';

const Spot = (
  { item, onClick, state }: {
    item: TSpot;
    onClick: (spot: TSpot) => void;
    state: BoardVal;
  },
) => {
  return (
    <li>
      <button
        disabled={state !== 0}
        className={clsx(
          'rounded-full bg-theme-white dark:bg-theme-black h-[60px] w-[60px]',
        )}
        style={{
          backgroundColor: state === 1
            ? 'blue'
            : state === -1
            ? 'red'
            : undefined,
        }}
        onClick={() => {
          onClick(item);
        }}
      />
    </li>
  );
};

export default function Connect4() {
  const { boardState, handleTurn, resetGame, gameOver, turn } = useGame();

  return (
    <section className='h-full w-full mx-auto grid grid-cols-[2fr_1fr] items-center justify-items-center gap-2'>
      <ul
        className={clsx(
          'relative grid border-2 border-theme-black dark:border-theme-orange bg-theme-lteal2 dark:bg-theme-orange rounded-md justify-items-center items-center shadow-xl',
          gameOver &&
            'before:absolute before:inset-0 before:bg-theme-black before:opacity-60 before:rounded-md',
        )}
        style={{
          height: '60vh',
          width: '50vw',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gridTemplateRows: 'repeat(6, 1fr)',
        }}
      >
        {Array.from(Array(6).keys()).map((row, idx) => {
          return (
            <Fragment key={`row-${idx}`}>
              {Array.from(Array(7).keys()).map((col) => {
                const spot = `${row}:${col}` as const;

                return (
                  <Spot
                    key={spot}
                    item={spot}
                    onClick={handleTurn}
                    state={boardState[row][col]}
                  />
                );
              })}
            </Fragment>
          );
        })}
      </ul>

      <div className='flex flex-col justify-start items-start gap-5 dark:text-theme-white'>
        {!gameOver
          ? (
            <>
              <h1 className='text-3xl dark:text-theme-white'>{turn}'s Turn</h1>

              <div className='flex flex-col gap-4'>
                <div className='flex gap-4 items-center'>
                  <div
                    className='rounded-full h-[60px] w-[60px]'
                    style={{ backgroundColor: 'blue' }}
                  />
                  <p>Player 1</p>
                </div>

                <div className='flex gap-4 items-center'>
                  <div
                    className='rounded-full h-[60px] w-[60px]'
                    style={{ backgroundColor: 'red' }}
                  />
                  <p>Player 2</p>
                </div>
              </div>
            </>
          )
          : (
            <div className='flex flex-col items-center gap-4'>
              <h1>{turn} has won!</h1>

              <PillButton
                onPress={resetGame}
                className='bg-theme-lteal2 dark:bg-theme-orange transition-colors'
              >
                Reset
              </PillButton>
            </div>
          )}
      </div>
    </section>
  );
}
