import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { onBuyExperience } from '../../utils/contractUtils';

const EXPERIENCES = [
  {
    id: '1',
    title: 'Experience 1',
    description: 'Description 1',
    price: 1
  },
  {
    id: '2',
    title: 'Experience 2',
    description: 'Description 2'
  },
  {
    id: '1',
    title: 'Experience 1',
    description: 'Description 1'
  },
  {
    id: '1',
    title: 'Experience 1',
    description: 'Description 1'
  },
  {
    id: '1',
    title: 'Experience 1',
    description: 'Description 1'
  },
  {
    id: '1',
    title: 'Experience 1',
    description: 'Description 1'
  }
];

const ExperiencesPage = () => {
  const router = useRouter();
  const { authorId } = router.query;

  const [swiper, setSwiper] = useState<SwiperClass>();

  const handlePrevious = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant='h3' textAlign='center'>
        Experiences for author: {authorId}
      </Typography>

      <Box sx={{ position: 'relative', mt: 3 }}>
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper: SwiperClass) => setSwiper(swiper)}
          autoplay
          style={{ overflow: 'visible' }}
          breakpoints={{
            1280: {
              slidesPerView: Math.min(EXPERIENCES.length, 4),
              spaceBetween: 30
            },
            900: {
              slidesPerView: Math.min(EXPERIENCES.length, 3),
              spaceBetween: 22
            },
            600: {
              slidesPerView: Math.min(EXPERIENCES.length, 2),
              spaceBetween: 10
            },
            0: {
              slidesPerView: Math.min(EXPERIENCES.length, 1.25),
              spaceBetween: 5
            }
          }}
        >
          {EXPERIENCES.map((experience) => (
            <SwiperSlide key={experience.id}>
              <ExperienceCard experience={experience} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Button
          variant='contained'
          size='large'
          color='inherit'
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            zIndex: 10,
            cursor: 'pointer'
          }}
          onClick={handlePrevious}
        >
          <KeyboardArrowLeftIcon />
        </Button>

        <Button
          variant='contained'
          size='large'
          color='inherit'
          sx={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 10,
            cursor: 'pointer'
          }}
          onClick={handleNext}
        >
          <KeyboardArrowRightIcon />
        </Button>
      </Box>
    </Container>
  );
};

const ExperienceCard = ({ experience }: any) => {
  const onBuy = () => {
    onBuyExperience(experience.price ?? 5000);
  };

  return (
    <Card>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://source.unsplash.com/random/${Math.floor(
          Math.random() * 1000
        )}`}
        alt={`Creator #${0 + 1}`}
        style={{
          minWidth: '150px',
          minHeight: '150px',
          borderRadius: '12px'
        }}
      />

      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant='h5'>{experience.title}</Typography>
        <Typography sx={{ mt: 1, mb: 2 }}>{experience.description}</Typography>

        <Button
          onClick={onBuy}
          variant='contained'
          size='large'
          startIcon={<AccountBalanceWalletIcon />}
          fullWidth
        >
          Buy for {experience.price ?? 20} SAL
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExperiencesPage;
