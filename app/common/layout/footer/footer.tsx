import { links } from '~/common/links';
import { LinkIcon } from '~/common/ui-elements';
import { styled } from '~/stitches';
import { menuItems } from '../menu-items';

const StyledFooter = styled('footer', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '100vw',
  paddingBottom: '12px',
});

const FooterNav = styled('nav', {
  'display': 'flex',
  'justifyContent': 'space-evenly',

  '& > a': {
    margin: '0 12px',
  },
});

export const Footer = () => {
  return (
    <StyledFooter role="contentinfo">
      <FooterNav role="navigation">
        {menuItems.map((mi) => {
          if (mi.path === links.home()) {
            return;
          }

          return (
            <LinkIcon key={`footer-${mi.name}`} href={mi.path}>
              {mi.icon}
            </LinkIcon>
          );
        })}
      </FooterNav>
    </StyledFooter>
  );
};
