import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useTheme
} from '@mui/material';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { Autoplay } from 'swiper';
import { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';

const EXPERIENCES = [
  {
    id: '1',
    title: 'Experience 1',
    description: 'Description 1'
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

        <Box
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
          <Typography variant='h1' color='primary'>
            {'<'}
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(50%)',
            zIndex: 10,
            cursor: 'pointer'
          }}
          onClick={handleNext}
        >
          <Typography variant='h1' color='primary'>
            {'>'}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

const ExperienceCard = ({ experience }: any) => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h6'>{experience.title}</Typography>
        <Typography sx={{ mt: 2 }}>{experience.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ExperiencesPage;
