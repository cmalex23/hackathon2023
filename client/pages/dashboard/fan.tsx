import React from 'react';
import { walletConnectV2ProjectId } from '../../config';
import { routeNames } from '../../routes';
import { AuthRedirectWrapper } from '../../components/AuthRedirectWrapper';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const FanDashboardPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Fan dashboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='mt-5'>
        <div className='home d-flex flex-fill align-items-center'>Fan Page</div>
      </main>
    </>
  );
};

export default function FanDashboard() {
  return <FanDashboardPage />;
}
