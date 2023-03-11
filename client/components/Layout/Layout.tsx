import React from 'react';
import { AuthenticatedRoutesWrapper } from '@multiversx/sdk-dapp/wrappers';
import { routes, routeNames } from '../../routes';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { useRouter } from 'next/router';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { query } = useRouter();

  return (
    <div className='d-flex flex-column flex-fill wrapper'>
      <Navbar />
      <main
        className='d-flex flex-column flex-grow-1'
        style={{ marginTop: 80 }}
      >
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${routeNames.login}${query}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
      <Footer />
    </div>
  );
};
