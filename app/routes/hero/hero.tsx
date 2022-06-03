import { links } from '~/common/links';
import { PillButton } from '~/common/ui-elements';
import { Divider } from '~/common/ui-elements/library';
import { useTheme } from '~/useTheme';
import { AnimatedHello } from './animated-hello';

export const Hero = () => {
  const [mode] = useTheme();

  return (
    <div className="flex flex-col items-center fixed w-90 top-2/4 left-[25vw] z-30 translate-y-[-60%] h-max">
      <h1 className="text-5xl font-accent dark:text-theme-white text-theme-black relative">
        <AnimatedHello />
        <p className="font-semibold dark:text-theme-lteal2 text-theme-dteal pt-4 mt-[48px]">
          Kevin Carlos
        </p>
      </h1>

      <Divider className="my-6" orientation="horizontal" />

      <div className="space-x-6">
        <PillButton
          to={links.aboutMe()}
          className="bg-theme-lteal2 dark:bg-theme-lteal hover:!text-theme-white hover:!bg-theme-dteal"
        >
          About Me
        </PillButton>
        <PillButton
          to={links.projects().root()}
          className="bg-theme-lgray dark:bg-theme-dgray hover:!text-theme-white hover:!bg-theme-blue"
        >
          Projects
        </PillButton>
      </div>
    </div>
  );
};
