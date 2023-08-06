import React, { useContext } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { MovieContext } from '../lib/contexts.js';
import Slide from './Slide.js';

const SlideList = () => {
  const { movieData, updateSlide } = useContext(MovieContext);

  return (
    <VStack spacing={4} align="stretch">
      {movieData.slides.map((slide, index) => (
        <Box key={slide.id} id={`slide-${slide.id}`}>
          <Slide
            slideData={slide}
            onSlideChange={(newSlideData) => updateSlide(index, newSlideData)}
          />
        </Box>
      ))}
    </VStack>
  );
};

export default SlideList;