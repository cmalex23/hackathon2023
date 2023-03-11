import { Button, Card, CardContent, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <Container maxWidth='sm' sx={{ mt: 20 }}>
      <Card>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant='h4'>Choose your type</Typography>

          <Stack
            direction='row'
            spacing={3}
            justifyContent='center'
            sx={{ mt: 3 }}
          >
            <Link href='/dashboard/creator'>
              <Button variant='contained'>Creator</Button>
            </Link>
            <Link href='/dashboard/fan'>
              <Button variant='contained'>Fan</Button>
            </Link>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DashboardPage;
