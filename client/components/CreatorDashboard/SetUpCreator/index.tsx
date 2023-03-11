import React, { FormEvent } from 'react';
import Alert from '@mui/material/Alert';
import MockSetUpCreator from './MockApiSetUpCreator';
import { Controller, useForm, FormProvider as Form } from 'react-hook-form';
import RHFTextField from '../../RHFTextField';
import {
  Button,
  Card,
  CardContent,
  Box,
  Container,
  TextField
} from '@mui/material';

const SetUpCreator = () => {
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.currentTarget);
    // const res = MockSetUpCreator();
  };
  return (
    <Container maxWidth='sm' sx={{ mt: 20 }}>
      <Card>
        <CardContent sx={{ textAlign: 'center' }}>
          <Alert
            severity='error'
            sx={{
              margin: 2
            }}
          >
            This is an error alert — <strong>check it out!</strong>
          </Alert>
          <Box
            component='form'
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete='off'
          >
            {/* <Controller
              name={'textValue'}
              control={control}
              render={({ field: { onChange, value } }: any) => (
                <>
                  <TextField
                    onChange={onChange}
                    value={value}
                    label='Name'
                    variant='filled'
                    required
                  />
                  <TextField
                    onChange={onChange}
                    value={value}
                    label='Email'
                    variant='filled'
                    type='email'
                    required
                  />
                  <TextField
                    onChange={onChange}
                    value={value}
                    label='Token Name'
                    variant='filled'
                    required
                  />
                  <TextField
                    onChange={onChange}
                    value={value}
                    label='Token Symbol'
                    variant='filled'
                    required
                  />
                  <TextField
                    onChange={onChange}
                    value={value}
                    label='Twitter'
                    variant='filled'
                  />
                  <TextField
                    onChange={onChange}
                    value={value}
                    label='Instagram'
                    variant='filled'
                  /> */}
            {/* </>
              )} */}
            {/* /> */}
            <Form>
              <form onSubmit={() => console.log('yoyoyo')}>
                <RHFTextField name='Instagram' label='Instagram' />
                <RHFTextField name='twitter' label='twitter' />
                <Button onClick={handleSubmit(onSubmit)}>Create Account</Button>
              </form>
            </Form>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SetUpCreator;
