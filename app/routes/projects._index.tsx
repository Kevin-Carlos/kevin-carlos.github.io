import { CardList } from '~/common/ui-elements';
import { projectItems } from './projects/project-items';

export default function Index() {
  return (
    <div className='h-full w-full py-10 px-5 flex justify-center items-start'>
      <div className='mx-auto'>
        <h1 className='text-6xl text-theme-black dark:text-theme-white mb-5'>
          Projects
        </h1>
        <CardList items={projectItems} />
      </div>
    </div>
  );
}
