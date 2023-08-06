import { useState } from 'react';
import { Box, Button, Input, Select } from '@chakra-ui/react';

const Settings = ({ slide, updateSlide }) => {
  const [caption, setCaption] = useState(slide.caption);
  const [duration, setDuration] = useState(slide.duration);
  const [transition, setTransition] = useState(slide.transition);
  const [media, setMedia] = useState(slide.media);

  const handleUpdate = () => {
    updateSlide({
      ...slide,
      caption,
      duration,
      transition,
      media,
    });
  };

  return (
    <Box>
      <Input
        id={`settings-${slide.id}`}
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Caption"
      />
      <Input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration"
      />
      <Select
        value={transition}
        onChange={(e) => setTransition(e.target.value)}
      >
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
        <option value="zoom">Zoom</option>
      </Select>
      <Input
        type="file"
        onChange={(e) => setMedia(e.target.files[0])}
        placeholder="Media"
      />
      <Button onClick={handleUpdate}>Update Slide</Button>
    </Box>
  );
};

export default Settings;