import Github from 'common/assets/icons/brands/github.png';
import LinkedIn from 'common/assets/icons/brands/linkedin.png';
import StackOverflow from 'common/assets/icons/brands/so-icon.svg';
import SiteLogo from 'common/assets/images/logo-dark.png';
import { links } from 'common/links';
import { UserCircle, Wrench } from 'phosphor-react';
import React from 'react';
import styled from 'styled-components';

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

const ImageIcons = styled.img`
  max-width: 3rem;
  margin-right: 2rem;
  transition: opacity 0.25s ease-in-out;
`;

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
    icon: <Wrench size={24} color="#ffffff" weight="duotone" />,
  },
  {
    name: 'About Me',
    path: links.aboutMe(),
    icon: <UserCircle size={24} color="#ffffff" weight="duotone" />,
  },
  {
    name: 'LinkedIn',
    path: links.linkedIn(),
    icon: <ImageIcons src={LinkedIn} alt="LinkedIn hamburger menu icon" />,
  },
  {
    name: 'StackOverflow',
    path: links.stackoverflow(),
    icon: <ImageIcons src={StackOverflow} alt="SO hamburger menu icon" />,
  },
  {
    name: 'GitHub',
    path: links.github(),
    icon: <ImageIcons src={Github} alt="GitHub hamburger menu icon" />,
  },
];
