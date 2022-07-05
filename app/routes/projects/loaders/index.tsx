import { Layout } from '~/common/layout';
import { Spinners } from './Spinners';

export default function Index() {
  return (
    <Layout>
      <div className="h-full w-full flex justify-center items-center">
        {/* <HaloCountdown /> */}
        <Spinners />
      </div>
    </Layout>
  );
}
