import { links } from '~/common/links';
import { PillButton } from '~/common/ui-elements';
import { Divider } from '~/common/ui-elements/library';
import { styled } from '~/stitches';
import { AnimatedHello } from './animated-hello';

const HeroWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  alignItems: 'center',
  width: 'max-content',
  height: 'max-content',
  zIndex: 30,

  position: 'fixed',
  top: '50%',
  left: '25vw',
  transform: 'translateY(-60%)',
});

const Heading = styled('h1', {
  fontFamily: '$accent',
  color: '$headerText',

  display: 'grid',
  gridTemplateRows: '64px auto',
  height: 'max-content',
  lineHeight: '1',
  fontSize: '48px',
  marginBottom: '48px',
});

const Name = styled('span', {
  fontWeight: '600',
  color: '$headerName',
  marginTop: '48px',
  paddingTop: '16px',
  height: 'max-content',
});

const ButtonWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
});

const AboutMeButton = styled(PillButton, {
  'backgroundColor': '$headerAboutMeButton',
  'transition': 'color 200ms ease-in-out, background-color 200ms ease-in-out',
  'color': '$headerText',

  '&:hover': {
    color: '$white',
    backgroundColor: '$dteal',
  },
});

const ProjectsButton = styled(PillButton, {
  'backgroundColor': '$headerProjectButton',
  'transition': 'color 200ms ease-in-out, background-color 200ms ease-in-out',
  'color': '$headerText',

  '&:hover': {
    color: '$white',
    backgroundColor: '$blue',
  },
});

export const Hero = () => {
  return (
    <HeroWrapper>
      <Heading>
        <AnimatedHello />
        <Name>Kevin Carlos</Name>
      </Heading>

      <Divider orientation="horizontal" />

      <ButtonWrapper>
        <AboutMeButton to={links.aboutMe()}>About Me</AboutMeButton>
        <ProjectsButton to={links.projects().root()}>Projects</ProjectsButton>
      </ButtonWrapper>
    </HeroWrapper>
  );
};
