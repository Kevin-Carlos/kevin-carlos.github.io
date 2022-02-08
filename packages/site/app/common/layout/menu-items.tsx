import {
  Code,
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
  UserFocus,
} from 'phosphor-react';
import React, { FC } from 'react';
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

const ImageIcons: FC<JSX.IntrinsicElements['img']> = ({ ...props }) => (
  <img
    className="max-w-[30px] md:mr-5 transition opacity duration-[250] ease-in-out"
    {...props}
  />
);

export const menuItems: NavItems[] = [
  {
    name: 'Home',
    path: links.home(),
    icon: (
      <ImageIcons
        src={SiteLogo}
        alt="Site logo for mobile navigation"
        style={{ backgroundColor: 'white', borderRadius: '50%' }}
      />
    ),
    mobileOnly: true,
  },
  {
    name: 'Projects',
    path: links.projects().root(),
    icon: (
      <Code
        size={ICON_SIZE}
        weight="duotone"
        className="dark:text-theme-white text-theme-black hover:!text-theme-blue dark:hover:!text-theme-orange transition-colors duration-[250ms] ease-in-out"
      />
    ),
  },
  {
    name: 'About Me',
    path: links.aboutMe(),
    icon: (
      <UserFocus
        size={ICON_SIZE}
        weight="duotone"
        className="dark:text-theme-white text-theme-black hover:!text-theme-blue dark:hover:!text-theme-orange transition-colors duration-[250ms] ease-in-out"
      />
    ),
  },
  {
    name: 'LinkedIn',
    path: links.linkedIn(),
    // icon: <ImageIcons src={LinkedIn} alt="LinkedIn hamburger menu icon" />,
    icon: (
      <LinkedinLogo
        size={ICON_SIZE}
        weight="duotone"
        className="dark:text-theme-white text-theme-black hover:!text-theme-blue dark:hover:!text-theme-orange transition-colors duration-[250ms] ease-in-out"
      />
    ),
  },
  {
    name: 'GitHub',
    path: links.github(),
    // icon: <ImageIcons src={Github} alt="GitHub hamburger menu icon" />,
    icon: (
      <GithubLogo
        size={ICON_SIZE}
        weight="duotone"
        className="dark:text-theme-white text-theme-black hover:!text-theme-blue dark:hover:!text-theme-orange transition-colors duration-[250ms] ease-in-out"
      />
    ),
  },
  {
    name: 'GitLab',
    path: links.gitlab(),
    // icon: <ImageIcons src={StackOverflow} alt="SO hamburger menu icon" />,
    icon: (
      <GitlabLogo
        size={ICON_SIZE}
        weight="duotone"
        className="dark:text-theme-white text-theme-black hover:!text-theme-blue dark:hover:!text-theme-orange transition-colors duration-[250ms] ease-in-out"
      />
    ),
  },
];
