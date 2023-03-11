import React from 'react';

import { Button, Card, CardContent, Container, Stack } from '@mui/material';
import TitleView from '../../TitleView';
import CreatorCompaigns from '../CreatorCompaigns';

import s from './EditCreator.module.css';

const EditCreator = ({ creator }: any) => {
  return (
    <Container className={'text-center'} sx={{ mt: 20 }}>
      <h1>Welcome {creator.name}</h1>
      <TitleView className={s.title}>My Compaigns</TitleView>
      <CreatorCompaigns />
      <TitleView className={s.title}>My Experiences</TitleView>
      <Card sx={{ mt: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          {/* <h2>My Experiences</h2> */}
          titi
        </CardContent>
      </Card>
    </Container>
  );
};

export default EditCreator;
