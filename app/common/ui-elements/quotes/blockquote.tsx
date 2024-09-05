import { Pen } from 'phosphor-react';
import type { FC, ReactNode } from 'react';
import { Divider } from '../library';

type BlockquoteProps = {
  author: string | null;
  children: ReactNode;
};

export const Blockquote: FC<BlockquoteProps> = ({ children, author }) => {
  return (
    <div className='grid grid-cols-[auto_1fr] mb-5'>
      <Divider orientation='vertical' className='mr-5' />
      <blockquote className='text-sm'>
        {children}

        {!!author && (
          <p className='italic font-semibold'>
            <span className='flex items-center'>
              <Pen
                weight='duotone'
                style={{ marginRight: '8px' }}
                className='text-theme-black dark:text-theme-white'
              />
              {author}
            </span>
          </p>
        )}
      </blockquote>
    </div>
  );
};
