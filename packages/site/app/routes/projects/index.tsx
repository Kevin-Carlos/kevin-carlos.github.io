import { type FC } from 'react';
import { Layout } from '~/common/layout';

const CardList: FC = ({ children }) => {
  return (
    <ul
      className="grid dark:text-theme-white"
      // Idk why this isn't working in className, but need it to for breakpoints!
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(0, 520px))' }}
    >
      {children}
    </ul>
  );
};

type CardProps = {
  title: string;
};

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <li className="border-2 rounded-md border-theme-dteal border-solid odd:mr-6 mb-6 p-4 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:bg-theme-orange before:h-1 before:rounded-tl-md before:rounded-tr-md">
      <h2 className="text-lg mb-5 tracking-wider">{title}</h2>
      {children}
    </li>
  );
};

export default function Index() {
  return (
    <Layout>
      <div className="h-full w-full px-5 pt-10 flex justify-center align-center">
        <div className="w-[70rem] mx-auto">
          <h1 className="text-6xl dark:text-theme-white mx-auto mb-5">
            Projects
          </h1>
          <CardList>
            <Card title="Flashcards">This is a description</Card>
            <Card title="Flashcards">This is a description</Card>
            <Card title="Flashcards">This is a description</Card>
            <Card title="Flashcards">This is a description</Card>
            <Card title="Flashcards">This is a description</Card>
            <Card title="Flashcards">This is a description</Card>
          </CardList>
        </div>
      </div>
    </Layout>
  );
}
