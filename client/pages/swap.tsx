import {
  Button,
  Card,
  CardContent,
  Container,
  InputBase,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme
} from '@mui/material';

const SwapPage = () => {
  const theme = useTheme();
  return (
    <Container maxWidth='sm' sx={{ mt: 5 }}>
      <Card>
        <CardContent>
          <Typography variant='h5' sx={{ mb: 2 }}>
            Swap
          </Typography>

          <Card></Card>
          <Stack
            direction='row'
            justifyContent='space-between'
            sx={{
              bgcolor: 'background.neutral',
              border: 1,
              borderRadius: theme.shape.borderRadius,
              borderColor: 'grey.50032'
            }}
          >
            <InputBase type='number' id='token1' placeholder='0' />

            <SelectTokenButton />
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

const SelectTokenButton = () => {
  return <Button variant='contained'>Select Token</Button>;
};

export default SwapPage;
