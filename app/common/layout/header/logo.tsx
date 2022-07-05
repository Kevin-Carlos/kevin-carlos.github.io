import { Link } from '@remix-run/react';
import darkLogo from '~/common/assets/images/logo-dark.png';
import { links } from '~/common/links';
import { styled } from '~/stitches';

const LogoWrapper = styled('div', {
  position: 'relative',
  width: '40px',
  height: '40px',
});

const Circle = styled('div', {
  width: '40px',
  height: '40px',
  borderRadius: '9999px',
  borderWidth: 0,
  backgroundColor: '$logo',

  position: 'absolute',
  transition: 'opacity 200ms ease-in-out',
});

export const Logo = () => {
  return (
    <LogoWrapper>
      <Link to={links.home()}>
        <Circle />
        <img src={darkLogo} style={{ position: 'absolute', width: '40px' }} />
      </Link>
    </LogoWrapper>
  );
};
