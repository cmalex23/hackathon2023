import { Box, Button, Card, CardContent, Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider from '../../FormProvider';
import RHFTextField from '../../RHFTextField';

const SetUpCreator = () => {
  const methods = useForm();

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
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
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <RHFTextField name='Instagram' label='Instagram' />
              <RHFTextField name='twitter' label='twitter' />
              <Button type='submit'>Create Account</Button>
            </FormProvider>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SetUpCreator;
