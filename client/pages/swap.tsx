import {
  Button,
  Card,
  CardContent,
  Container,
  InputBase,
  Stack,
  styled,
  Typography
} from '@mui/material';

const InputStyled = styled(InputBase)`
  font-size: 2rem;
`;

const SwapPage = () => {
  return (
    <Container maxWidth='sm' sx={{ mt: 5 }}>
      <Card>
        <CardContent>
          <Typography variant='h5' sx={{ mb: 2 }}>
            Swap
          </Typography>

          <Card
            sx={{
              p: 2,
              bgcolor: 'background.neutral'
            }}
            variant='outlined'
          >
            <Stack direction='row' justifyContent='space-between'>
              <InputStyled type='number' id='token1' placeholder='0' />

              <SelectTokenButton />
            </Stack>
          </Card>

          <Card
            sx={{
              p: 2,
              mt: 2,
              bgcolor: 'background.neutral'
            }}
            variant='outlined'
          >
            <Stack direction='row' justifyContent='space-between'>
              <InputStyled type='number' id='token1' placeholder='0' />

              <SelectTokenButton />
            </Stack>
          </Card>
        </CardContent>
      </Card>
    </Container>
  );
};

const SelectTokenButton = () => {
  return <Button variant='contained'>Select Token</Button>;
};

export default SwapPage;
