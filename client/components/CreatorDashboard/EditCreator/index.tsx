import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Button, Card, CardContent, Container } from '@mui/material';
import TitleView from '../../TitleView';
import CreatorCompaigns from '../CreatorCompaigns';

import CreateExpModal from '../../CreateExpModal';
import s from './EditCreator.module.css';

const EditCreator = ({ creator }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container className={'text-center'}>
      <h1>Welcome {creator.name}</h1>
      <Card sx={{ mt: 2, display: 'inline-block' }}>
        <CardContent sx={{ textAlign: 'center' }}>
          Token Name : {creator.tokenName}
          <br />
          Token Symbol : {creator.tokenSymbol}
          <br />
        </CardContent>
      </Card>
      <TitleView className={s.title}>My Compaigns</TitleView>
      <CreatorCompaigns />
      <TitleView className={s.title}>My Experiences</TitleView>

      <Button
        onClick={() => setIsOpen(true)}
        sx={{ mt: 2 }}
        startIcon={<AddIcon />}
      >
        Create Experience
      </Button>

      {isOpen && <CreateExpModal handleClose={() => setIsOpen(false)} />}

      <Card sx={{ mt: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          {/* <h2>My Experiences</h2> */}
          exp1
        </CardContent>
      </Card>
    </Container>
  );
};

export default EditCreator;
