import { ColorNames } from 'common/styles';
import { BlurbType } from './_components/_content-blurb';

type ContentHeaderItems = {
  size: number;
  color: ColorNames;
  title: string;
  key: BlurbType;
};

export const circleItems: ContentHeaderItems[] = [
  {
    key: 'about',
    title: 'Who Am I?',
    size: 12,
    color: 'light_teal',
  },
  {
    key: 'education',
    title: 'Education',
    size: 10,
    color: 'orange',
  },
  {
    key: 'career',
    title: 'Career',
    size: 15,
    color: 'blue',
  },
];
