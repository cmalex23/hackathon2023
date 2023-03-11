import Head from 'next/head';
import { NotAuthRedirectWrapper } from '../../components/NotAuthRedirectWrapper';

const FanDashboardPage = () => {
  return (
    <>
      <Head>
        <title>Fan dashboard</title>
        <meta name='description' content='Fan dashboard' />
      </Head>
      <main className='mt-5'>
        <div className='home d-flex flex-fill align-items-center'>Fan Page</div>
      </main>
    </>
  );
};

export default function FanDashboard() {
  return (
    <NotAuthRedirectWrapper>
      <FanDashboardPage />
    </NotAuthRedirectWrapper>
  );
}
