import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { ReactNode } from 'react';
import darkLogo from '~/common/assets/images/logo-dark.png';
import { links } from '~/common/links';
import * as styles from './anim.module.css';

export const Logo = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-[40px] h-[40px] relative'>
      <Link
        aria-label='Home'
        to={links.home()}
        className='focus:outline-theme-dteal dark:focus:outline-theme-orange rounded-full focus:outline-offset-2 focus:outline focus:outline-2 z-10 group'
      >
        <div className='w-[40px] h-[40px] rounded-full border-0 bg-theme-lgray dark:bg-theme-white absolute transition-transform group-hover:scale-95 group-hover:opacity-95'>
          <img src={darkLogo} style={{ position: 'absolute', width: '40px' }} />
        </div>
      </Link>

      {/* border-2 border-theme-orange rounded-full */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='relative h-full w-full'>
          <div
            className={clsx(
              // @ts-expect-error css module typings
              styles.spinFast,
              'border-2 border-theme-dteal dark:border-theme-orange w-[65px] h-[65px] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]',
              'before:h-[8px] before:w-[8px] before:rounded-full before:bg-theme-black dark:before:bg-theme-lteal2 before:flex before:translate-y-[10px] before:shadow-lg dark:before:shadow-[2px_5px_5px_rgba(0,0,0,0.8)]',
            )}
          />
          <div
            className={clsx(
              // @ts-expect-error css module typings
              styles.spinSlow,
              'border-2 border-theme-dteal dark:border-theme-orange w-[110px] h-[110px] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]',
              'before:h-[8px] before:w-[8px] before:rounded-full before:bg-theme-black dark:before:bg-theme-lteal2 before:flex before:translate-y-[27px] before:shadow-lg dark:before:shadow-[2px_5px_5px_rgba(0,0,0,0.8)]',
            )}
          />
        </div>
      </div>

      {children}
    </div>
  );
};
