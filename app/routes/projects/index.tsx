import { Layout } from '~/common/layout';
import { Card, CardList } from '~/common/ui-elements';
import { styled } from '~/stitches';
import { projectItems } from './project-items';

const ProjectsLayout = styled('div', {
  height: '100%',
  width: '100%',
  padding: '40px 20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const Wrapper = styled('div', {
  width: '70rem',
  margin: '0 auto',
});

const Heading = styled('h1', {
  fontSize: '60px',
  color: '$headerText',
  margin: '0 auto',
  marginBottom: '20px',
});

export default function Index() {
  return (
    <Layout>
      <ProjectsLayout>
        <Wrapper>
          <Heading>Projects</Heading>
          <CardList>
            {projectItems.map((project) => (
              <Card key={project.name} title={project.name} to={project.path}>
                {project.description}
              </Card>
            ))}
          </CardList>
        </Wrapper>
      </ProjectsLayout>
    </Layout>
  );
}
