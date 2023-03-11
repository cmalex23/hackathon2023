import React, { FC, useState, SetStateAction, useRef, LegacyRef } from 'react';
import {
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  Alert,
  Checkbox,
  Box,
  FormGroup,
  FormControlLabel
} from '@mui/material';

import FormProvider from '../../../FormProvider';
import RHFTextField from '../../../RHFTextField';
import MockCreateCampaign from './MockCreateCampaign';
import { setCampaignsInLocalStorage } from '../../../../utils/localStorage';

import { useForm } from 'react-hook-form';

import cn from 'classnames';
import s from './CreateCompaignModal.module.css';

export interface CreateCompaignModalProps {
  className?: string;
  open: boolean;
  handleClose: () => void;
  setCampaigns: SetStateAction<any>;
}

const optionsPlatform = [
  'twitter',
  'facebook',
  'instagram',
  'youtube',
  'twitch',
  'tiktok'
];

const platformActions: {
  [key: string]: Array<string>;
} = {
  twitter: ['like', 'retweet', 'comment'],
  facebook: ['like', 'share', 'comment'],
  instagram: ['like', 'comment'],
  youtube: ['like', 'share'],
  twitch: ['like', 'share'],
  tiktok: ['like', 'share']
};

const CreateCompaignModal: FC<CreateCompaignModalProps> = ({
  className,
  handleClose,
  open,
  setCampaigns
}) => {
  const methods = useForm();
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState<string>('');
  // const [name, setName] = useState('');

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    setError(null);
    console.log(data);
    const res = MockCreateCampaign({ ...data, platform });
    if (res.succeed) {
      // Store un localstorage for mocking
      // setCampaignsInLocalStorage(data);
      // setCampaigns(data);
      handleClose();
    } else {
      setError(res?.message || 'An error occured please try again');
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <div className={s.subContainer}>
          <DialogTitle id='alert-dialog-title'>Create new Compaign</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              {error ? <Alert severity='error'>{error}</Alert> : null}
              <FormProvider methods={methods}>
                <RHFTextField
                  name='name'
                  label='Name of the campaign'
                  variant='standard'
                  required
                />
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>
                    Platform
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={platform}
                    label='Age'
                    sx={{ width: '100%' }}
                    onChange={(e: SelectChangeEvent) =>
                      setPlatform(e.target.value as string)
                    }
                  >
                    {optionsPlatform.map((opt) => (
                      <MenuItem key={`key-${opt}`} value={opt}>
                        {opt}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box>
                  <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                    {platformActions[platform]?.map((action, i) => (
                      <FormControlLabel
                        key={`platform-action-${i}`}
                        control={<Checkbox />}
                        label={action}
                      />
                    ))}
                  </FormGroup>
                </Box>
              </FormProvider>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit(onSubmit)}>Create</Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
};

export default CreateCompaignModal;
