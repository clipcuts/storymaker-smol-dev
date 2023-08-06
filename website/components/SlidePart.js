import React, { useState } from 'react';
import { Box, Image, Text, Button, Input, Select } from '@chakra-ui/react';

const SlidePart = ({ partData, updatePart }) => {
  const [media, setMedia] = useState(partData.media);
  const [caption, setCaption] = useState(partData.caption);
  const [duration, setDuration] = useState(partData.duration);
  const [transition, setTransition] = useState(partData.transition);

  const handleMediaChange = (e) => {
    setMedia(e.target.value);
    updatePart({ ...partData, media: e.target.value });
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
    updatePart({ ...partData, caption: e.target.value });
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    updatePart({ ...partData, duration: e.target.value });
  };

  const handleTransitionChange = (e) => {
    setTransition(e.target.value);
    updatePart({ ...partData, transition: e.target.value });
  };

  return (
    <Box className={`slidePart-${partData.id}`} border="1px" borderRadius="md" p="4" mb="4">
      <Image src={media} alt={caption} />
      <Text>{caption}</Text>
      <Input type="text" value={media} onChange={handleMediaChange} placeholder="Media URL" />
      <Input type="text" value={caption} onChange={handleCaptionChange} placeholder="Caption" />
      <Input type="number" value={duration} onChange={handleDurationChange} placeholder="Duration" />
      <Select value={transition} onChange={handleTransitionChange}>
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
        <option value="zoom">Zoom</option>
      </Select>
      <Button colorScheme="red" onClick={() => updatePart(null)}>Remove Part</Button>
    </Box>
  );
};

export default SlidePart;