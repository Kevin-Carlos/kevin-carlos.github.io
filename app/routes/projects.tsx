import { Outlet } from '@remix-run/react';
import { Layout } from '~/common/layout';

export default function Index() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
