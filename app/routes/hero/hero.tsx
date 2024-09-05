import { links } from '~/common/links';
import { PillButton } from '~/common/ui-elements/button/pill-button';
import { Divider } from '~/common/ui-elements/library';
import { AnimatedHello } from './animated-hello';

export const Hero = ({
  helloIndex,
}: {
  helloIndex: number;
}) => {
  return (
    <div className='flex flex-col gap-6 items-center z-30 w-full h-full justify-center px-5 md:p-0 md:w-max md:h-max md:fixed md:top-[50%] md:left-[25vw] md:translate-y-[-60%]'>
      <h1 className='font-accent text-theme-black dark:text-theme-white text-5xl grid grid-rows-[64px_auto] h-max leading-[1] mb-12'>
        <AnimatedHello helloIndex={helloIndex} />
        <span className='font-semibold dark:text-theme-lteal2 text-theme-dteal pt-4 mt-12'>
          Kevin Carlos
        </span>
      </h1>

      <Divider orientation='horizontal' />

      <div className='w-full flex justify-evenly'>
        <PillButton
          to={links.aboutMe()}
          className='bg-theme-lteal2 dark:bg-theme-lteal transition-colors'
        >
          About Me
        </PillButton>
        <PillButton
          to={links.projects().root()}
          className='bg-theme-lgray dark:bg-theme-dgray transition-colors'
        >
          Projects
        </PillButton>
      </div>
    </div>
  );
};
