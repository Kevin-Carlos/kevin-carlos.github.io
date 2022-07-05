import { Fragment, type FC, type ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

const OverlayTriangle = () => {
  return (
    <div
      className="fixed w-screen h-full -bottom-[85%] -skew-y-[25deg] md:-skew-y-12 bg-theme-blue dark:bg-[rgb(0,0,0)] z-10 pointer-events-none before:border-2 before:relative after:absolute"
      style={{ opacity: 0.2 }}
    />
  );
};

type LayoutProps = {
  hideFooter?: boolean;
  children: ReactNode | ReactNode[];
};

export const Layout: FC<LayoutProps> = ({ children, hideFooter }) => {
  return (
    <Fragment>
      <div className="grid grid-rows-[60px_1fr_60px] h-full w-full">
        <Header />
        <main role="main" className="overflow-y-scroll z-30">
          {children}
        </main>
        {!hideFooter ? <Footer /> : null}
      </div>
      <OverlayTriangle />
    </Fragment>
  );
};
