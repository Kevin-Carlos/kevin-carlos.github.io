import {
  Code,
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
  UserFocus,
} from 'phosphor-react';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SiteLogo from '~/common/assets/images/logo-dark.png';
import { links } from '~/common/links';

const ICON_SIZE = 24;

/**
 * @param name name of the nav item
 * @param path the route to the item
 * @param icon either an svg or image of some sort
 * @param mobileOnly optional -- if true, is mobile only
 */
type NavItems = {
  name: string;
  path: string;
  icon: React.ReactElement;
  mobileOnly?: boolean;
};

// const ImageIcons = styled('img', {
//   'maxWidth': '30px',
//   'transition': 'opacity 250ms ease-in-out',

//   '@media screen and (min-width: 768px)': {
//     marginRight: '20px',
//   },
// });

// const StyledCode = styled(Code, {
//   'color': '$icon',

//   'transition': 'color 250ms ease-in-out',

//   '&:hover': {
//     color: '$footerIconHover',
//   },
// });

// const StyledUserFocus = styled(UserFocus, {
//   'color': '$icon',

//   'transition': 'color 250ms ease-in-out',

//   '&:hover': {
//     color: '$footerIconHover',
//   },
// });

// const StyledLinkedInLogo = styled(LinkedinLogo, {
//   'color': '$icon',

//   'transition': 'color 250ms ease-in-out',

//   '&:hover': {
//     color: '$footerIconHover',
//   },
// });

// const StyledGithubLogo = styled(GithubLogo, {
//   'color': '$icon',

//   'transition': 'color 250ms ease-in-out',

//   '&:hover': {
//     color: '$footerIconHover',
//   },
// });

// const StyledGitlabLogo = styled(GitlabLogo, {
//   'color': '$icon',

//   'transition': 'color 250ms ease-in-out',

//   '&:hover': {
//     color: '$footerIconHover',
//   },
// });

export const menuItems: NavItems[] = [
  {
    name: 'Home',
    path: links.home(),
    icon: (
      <img
        src={SiteLogo}
        alt="Kevin Carlos logo"
        aria-label="Kevin Carlos logo"
        style={{ backgroundColor: 'white', borderRadius: '50%', height: "40px", width: "40px" }}
      />
    ),
    mobileOnly: true,
  },
  {
    name: 'Projects',
    path: links.projects().root(),
    icon: (
      <Code size={ICON_SIZE} weight="duotone" aria-label="Projects" />
    ),
  },
  {
    name: 'About Me',
    path: links.aboutMe(),
    icon: (
      <UserFocus
        size={ICON_SIZE}
        weight="duotone"
        aria-label="About Me"
      />
    ),
  },
  {
    name: 'LinkedIn',
    path: links.linkedIn(),
    icon: (
      <LinkedinLogo
        size={ICON_SIZE}
        weight="duotone"
        aria-label="LinkedIn logo"
      />
    ),
  },
  {
    name: 'GitHub',
    path: links.github(),
    icon: (
      <GithubLogo
        size={ICON_SIZE}
        weight="duotone"
        aria-label="Github logo"
      />
    ),
  },
  {
    name: 'GitLab',
    path: links.gitlab(),
    icon: (
      <GitlabLogo
        size={ICON_SIZE}
        weight="duotone"
        aria-label="GitLab logo"
      />
    ),
  },
];
