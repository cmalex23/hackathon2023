import React, { useState } from 'react';
import Head from 'next/head';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { SetUpCreator, EditCreator } from '../../components/CreatorDashboard';
import { NotAuthRedirectWrapper } from '../../components/NotAuthRedirectWrapper';

const CreatorDashboardPage = () => {
  const [isFirstTime, setisFirstTime] = useState(true);

  return (
    <>
      <Head>
        <title>Creator Dashboard</title>
        <meta name='description' content='Creator dashboard' />
      </Head>
      <main className='mt-5'>
        <div className='home d-flex flex-fill flex-column align-items-center justify-content-center'>
          {/* TODO remove box when api is working */}
          <Box sx={{ minWidth: 120, marginBottom: 3 }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>isFirstTime</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={isFirstTime ? 'true' : 'false'}
                label='Age'
                onChange={(e) =>
                  setisFirstTime(e.target.value === 'true' ? true : false)
                }
              >
                <MenuItem value={'true'}>True</MenuItem>
                <MenuItem value={'false'}>False</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {isFirstTime ? <SetUpCreator /> : <EditCreator />}
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
