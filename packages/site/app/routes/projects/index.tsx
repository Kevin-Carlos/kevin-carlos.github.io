import { Layout } from '~/common/layout';
import { Card, CardList } from '~/common/ui-elements';
import { projectItems } from './project-items';

export default function Index() {
  return (
    <Layout>
      <div className="h-full w-full px-5 pt-10 flex justify-center align-center">
        <div className="w-[70rem] mx-auto">
          <h1 className="text-6xl dark:text-theme-white mx-auto mb-5">
            Projects
          </h1>
          <CardList>
            {projectItems.map((project) => (
              <Card key={project.name} title={project.name} to={project.path}>
                {project.description}
              </Card>
            ))}
          </CardList>
        </div>
      </div>
    </Layout>
  );
}
