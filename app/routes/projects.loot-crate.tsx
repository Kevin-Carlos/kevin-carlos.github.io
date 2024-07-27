import { ArrowBendDownLeft } from 'phosphor-react';
import { links } from '~/common/links';
import { LinkText } from '~/common/ui-elements';
import { NaiveBox, WeightedBox } from './projects/loot-crate/crates';

export default function Index() {
  return (
    <article className="h-full w-full flex flex-col justify-center m-auto px-5 md:px-10">
      <div className='mb-5'>
        <LinkText childrenClassName='flex flex-row gap-2 self-start items-center' href={links.projects().root()}>
          <ArrowBendDownLeft />
          Go Back
        </LinkText>
      </div>
      <ul className="dark:text-theme-white grid gap-5 md:grid-cols-2">
        <WeightedBox />

        <NaiveBox />
      </ul>
    </article>
  );
}
