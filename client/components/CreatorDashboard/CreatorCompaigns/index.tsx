import React, { useState } from 'react';

import { Button, Card, CardContent, Container, Stack } from '@mui/material';
import CompaignsSlider from './CompaignsSlider';
import AddIcon from '@mui/icons-material/Add';
import CreateCompaignModal from './CreateCompaignModal';

import s from './CreatorCompaigns.module.css';
import cn from 'classnames';

const mock = ['toto', 'tato', 'tota', 'tata', 'bobo', 'coco'];

const CreatorCompaigns = ({ creator, className }: any) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={cn(s.container, className)}>
      <div className={s.buttonContainer}>
        <Button
          className={s.createConpaignButton}
          onClick={() => setOpenModal(true)}
        >
          <AddIcon />
          Create new compaign
        </Button>
        <CreateCompaignModal
          open={openModal}
          handleClose={() => setOpenModal(false)}
        />
      </div>
      <CompaignsSlider className={s.compaignsSlider} compaigns={mock} />
    </div>
  );
};

export default CreatorCompaigns;
