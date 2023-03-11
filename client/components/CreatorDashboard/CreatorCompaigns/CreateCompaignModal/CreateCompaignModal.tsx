import React, { FC, useState, useRef, LegacyRef } from 'react';
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
  MenuItem
} from '@mui/material';
// import { FormLabel, Select, Option } from '@mui/joy';

import FormProvider from '../../../FormProvider';
import RHFTextField from '../../../RHFTextField';

import { useForm } from 'react-hook-form';

import cn from 'classnames';
import s from './CreateCompaignModal.module.css';

export interface CreateCompaignModalProps {
  className?: string;
  open: boolean;
  handleClose: () => void;
}

const optionsPlatform = ['twitter', 'facebook', 'instagram'];

const CreateCompaignModal: FC<CreateCompaignModalProps> = ({
  className,
  handleClose,
  open
}) => {
  const methods = useForm();
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState('');
  // const [name, setName] = useState('');

  const { handleSubmit } = methods;
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
              </FormProvider>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Create</Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
};

export default CreateCompaignModal;
