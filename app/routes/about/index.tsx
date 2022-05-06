import { Layout } from '~/common/layout';
import { Descriptions } from './descriptions';

export default function AboutMe() {
  return (
    <Layout>
      <div className="flex w-full h-full items-center justify-center">
        <Descriptions />
      </div>
    </Layout>
  );
}
