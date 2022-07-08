import { Fragment, type FC, type ReactNode } from 'react';
import { styled } from '~/stitches';
import { Footer } from './footer';
import { Header } from './header';

const OverlayTriangle = styled('div', {
  'position': 'fixed',
  'width': '100vw',
  'height': '100%',
  'bottom': '-85%',
  'transform': 'skewY(-25deg)',
  'backgroundColor': '$triangle',
  'zIndex': 10,
  'pointerEvents': 'none',
  'opacity': 0.2,

  '@media screen and (min-width: 640px)': {
    transform: 'skewY(-25deg)',
  },

  '&::before': {
    content: '',
    position: 'relative',
    borderWidth: '2px',
  },

  '&::after': {
    content: '',
    position: 'absolute',
  },
});

const LayoutGrid = styled('div', {
  display: 'grid',
  gridTemplateRows: '60px 1fr 60px',

  height: '100%',
  width: '100%',
});

const Main = styled('main', {
  overflowY: 'scroll',
  zIndex: 30,
});

type LayoutProps = {
  hideFooter?: boolean;
  children: ReactNode | ReactNode[];
};

export const Layout: FC<LayoutProps> = ({ children, hideFooter }) => {
  return (
    <Fragment>
      <LayoutGrid>
        <Header />
        <Main role="main">{children}</Main>
        {!hideFooter ? <Footer /> : null}
      </LayoutGrid>
      <OverlayTriangle />
    </Fragment>
  );
};
