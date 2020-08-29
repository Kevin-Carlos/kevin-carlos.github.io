import { links } from "common/links";


type NavItems = {
  name: string;
  path: string;
};

export const menuItems: NavItems[] = [
  {
    name: "LinkedIn",
    path: links.linkedIn(),
  },
  {
    name: "StackOverflow",
    path: links.stackoverflow(),
  },
  {
    name: "Github",
    path: links.github(),
  },
  {
    name: "Projects",
    path: links.projects().root(),
  },
]