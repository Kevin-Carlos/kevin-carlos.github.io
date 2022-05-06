import { Layout } from '~/common/layout';
import { NaiveBox, WeightedBox } from './crates';

export default function Index() {
  return (
    <Layout>
      <div className="h-full w-full flex justify-center items-center">
        <ul className="dark:text-theme-white grid gap-5 md:grid-cols-2">
          <WeightedBox />

          <NaiveBox />
        </ul>
      </div>
    </Layout>
  );
}
