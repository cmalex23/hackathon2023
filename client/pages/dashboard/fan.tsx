import {
  Card,
  CardContent,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography
} from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NotAuthRedirectWrapper } from '../../components/NotAuthRedirectWrapper';

const CREATORS = [
  { id: '1', name: 'Creator 1' },
  { id: '2', name: 'Creator 2' },
  { id: '3', name: 'Creator 3' },
  { id: '3', name: 'Creator 3' },
  { id: '3', name: 'Creator 3' },
  { id: '3', name: 'Creator 3' },
  { id: '3', name: 'Creator 3' }
];

const FanDashboardPage = () => {
  const { push } = useRouter();

  const onClickItem = (creatorId: string) => {
    push(`/experiences/${creatorId}`);
  };

  return (
    <>
      <Head>
        <title>Fan dashboard</title>
        <meta name='description' content='Fan dashboard' />
      </Head>
      <Container maxWidth='sm' sx={{ mt: 5 }}>
        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant='h4' sx={{ mb: 3 }}>
              Current creators
            </Typography>

            <ImageList
              sx={{ maxWidth: '500px', maxHeight: '70vh', pb: 2 }}
              cols={2}
              gap={10}
            >
              {CREATORS.map((creator, creatorId) => (
                <ImageListItem
                  key={creatorId}
                  onClick={() => onClickItem(creator.id)}
                  sx={{ cursor: 'pointer' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://source.unsplash.com/random/${Math.floor(
                      Math.random() * 1000
                    )}`}
                    alt={`Creator #${creatorId + 1}`}
                    style={{
                      minWidth: '150px',
                      minHeight: '150px',
                      borderRadius: '12px'
                    }}
                  />

                  <ImageListItemBar
                    title={`Creator #${creatorId + 1}`}
                    style={{ borderRadius: '0 0 12px 12px' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default function FanDashboard() {
  return (
    <NotAuthRedirectWrapper>
      <FanDashboardPage />
    </NotAuthRedirectWrapper>
  );
}
