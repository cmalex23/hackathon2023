import Head from 'next/head';
import { NotAuthRedirectWrapper } from '../../components/NotAuthRedirectWrapper';

const CreatorDashboardPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Creator dashboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='mt-5'>
        <div className='home d-flex flex-fill align-items-center'>
          Creator Page
        </div>
      </main>
    </>
  );
};

export default function CreatorDashboard() {
  return (
    <NotAuthRedirectWrapper>
      <CreatorDashboardPage />
    </NotAuthRedirectWrapper>
  );
}
