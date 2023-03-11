import React, { useState } from 'react';
import { Button, Card, CardContent, Container, Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';
import FormProvider from '../../FormProvider';
import RHFTextField from '../../RHFTextField';
import MockSetUpCreator from './MockApiSetUpCreator';
import { setCreatorInLocalStorage } from '../../../utils/localStorage';

const SetUpCreator = ({ setCreator }: any) => {
  const [error, setError] = useState<string | null>(null);
  const methods = useForm();

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    setError(null);
    const res = MockSetUpCreator(data);
    if (res.succeed) {
      // Store un localstorage for mocking
      setCreatorInLocalStorage(data);
      setCreator(data);
    } else {
      setError(res?.message || 'An error occured please try again');
    }
  };

  return (
    <Container maxWidth='sm' sx={{ mt: 20 }}>
      <Card>
        <CardContent sx={{ textAlign: 'center' }}>
          {error ? (
            <Alert
              severity='error'
              sx={{
                margin: 2
              }}
            >
              {error}
            </Alert>
          ) : null}
          <FormProvider methods={methods}>
            <Stack
              direction='row'
              justifyContent={'center'}
              spacing={1}
              margin={1}
            >
              <RHFTextField
                className='w-1/2'
                name='name'
                label='Name'
                variant='filled'
                required
              />
              <RHFTextField
                name='email'
                label='Email'
                variant='filled'
                type='email'
                required
              />
            </Stack>
            <Stack
              direction='row'
              justifyContent={'center'}
              spacing={1}
              margin={1}
            >
              <RHFTextField
                name='tokenName'
                label='Token Name'
                variant='filled'
                required
              />
              <RHFTextField
                name='tokenSymbol'
                label='Token Symbol'
                variant='filled'
                required
              />
            </Stack>
            <Stack
              direction='row'
              justifyContent={'center'}
              spacing={1}
              margin={1}
            >
              <RHFTextField name='twitter' label='Twitter' variant='filled' />
              <RHFTextField
                name='instagram'
                label='Instagram'
                variant='filled'
              />
            </Stack>
            <Button
              sx={{
                width: '100%',
                marginTop: '1rem',
                padding: '1rem'
              }}
              onClick={handleSubmit(onSubmit)}
              className='w-full'
            >
              Create Account
            </Button>
          </FormProvider>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SetUpCreator;
