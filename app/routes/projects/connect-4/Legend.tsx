import type { Player } from './types';

export const Legend = ({ player }: { player: Player }) => {
  return (
    <>
      <h1 className='text-3xl'>{player}'s Turn</h1>

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
  );
};
