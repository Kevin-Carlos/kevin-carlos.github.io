import { type FC, type ReactNode } from 'react';
import { Footer } from './footer/footer';

type LayoutProps = {
  hideFooter?: boolean;
  children: ReactNode | ReactNode[];
};

export const Layout: FC<LayoutProps> = ({ children, hideFooter }) => {
  return (
    <>
      <main className='z-30 py-5'>{children}</main>
      {!hideFooter ? <Footer /> : null}
      <div className='fixed w-full h-full bottom-[-85%] skew-y-[-25deg] bg-theme-blue dark:bg-[rgb(0,0,0)] opacity-20 pointer-events-none z-20 before:relative before:border-2 md:skew-y-[348deg]' />
    </>
  );
};
