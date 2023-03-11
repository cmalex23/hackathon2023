import React from 'react';
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks';
import { logout } from '@multiversx/sdk-dapp/utils';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar as BsNavbar, NavItem, Nav } from 'react-bootstrap';
import { dAppName } from '../../../config';
import { routeNames } from '../../../routes';
import Link from 'next/link';
import Image from 'next/image';
import {
  AppBar,
  Box,
  Button,
  Container,
  FormLabel,
  Typography
} from '@mui/material';

export const Navbar = () => {
  const isLoggedIn = useGetIsLoggedIn();

  const handleLogout = () => {
    logout(`${window.location.origin}/login`);
  };

  return (
    <AppBar>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 84
        }}
      >
        <Link
          className='d-flex align-items-center navbar-brand mr-0'
          href={isLoggedIn ? routeNames.dashboard : routeNames.home}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Image
            src='/assets/img/multiversx.svg'
            className='multiversx-logo'
            width={100}
            height={100}
            alt='MultiversX'
          />
          <Typography variant='h5'>{dAppName}</Typography>
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        <Nav className='ml-auto'>
          {isLoggedIn && (
            <>
              <NavItem>
                <Link href={routeNames.statistics} className='nav-link'>
                  <FontAwesomeIcon
                    icon={faChartSimple}
                    className='text-muted'
                  />
                </Link>
              </NavItem>

              <NavItem>
                <Link href='/dashboard/transactions' className='nav-link'>
                  <Button>Transactions</Button>
                </Link>
              </NavItem>

              <NavItem>
                <Link href={routeNames.swap} className='nav-link'>
                  <Button>Swap</Button>
                </Link>
              </NavItem>

              <NavItem>
                <div className='nav-link'>
                  <Button onClick={handleLogout}>Disconnect</Button>
                </div>
              </NavItem>
            </>
          )}
        </Nav>
      </Container>
    </AppBar>
  );
};
