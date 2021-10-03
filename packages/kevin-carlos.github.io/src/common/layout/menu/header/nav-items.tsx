import React from 'react';
import { links } from 'common/links';
import LinkedIn from 'common/assets/icons/brands/linkedin.png';
import Github from 'common/assets/icons/brands/github.png';
import StackOverflow from 'common/assets/icons/brands/so-icon.svg';
import SiteLogo from 'common/assets/images/logo-dark.png';
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
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        height="3rem"
        style={{ marginRight: '2rem', transition: 'stroke 0.25s ease-in-out' }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      </svg>
    ),
  },
  {
    name: 'About Me',
    path: links.aboutMe(),
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        height="3rem"
        style={{ marginRight: '2rem', transition: 'stroke 0.25s ease-in-out' }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
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
