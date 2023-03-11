import React from 'react';

import { Button, Card, CardContent, Container, Stack } from '@mui/material';
import CompaignsSlider from './CompaignsSlider';
import TitleView from '../../TitleView';

import s from './CreatorCompaigns.module.css';
import cn from 'classnames';

const mock = ['toto', 'tato', 'tota', 'tata', 'bobo', 'coco'];

const CreatorCompaigns = ({ creator, className }: any) => {
  return (
    <div className={cn(s.container, className)}>
      <Button>Create new compaign</Button>
      <CompaignsSlider compaigns={mock} />
    </div>
  );
};

export default CreatorCompaigns;
