import React, { useState } from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';
import SlidePart from './SlidePart';
import Settings from './Settings';

const Slide = ({ slideData, updateSlide }) => {
  const [selectedPart, setSelectedPart] = useState(null);

  const handleSelectPart = (partId) => {
    setSelectedPart(partId);
  };

  const handleUpdatePart = (partId, newSettings) => {
    const updatedParts = slideData.parts.map((part) =>
      part.id === partId ? { ...part, ...newSettings } : part
    );
    updateSlide(slideData.id, { parts: updatedParts });
  };

  return (
    <Box border="1px" borderColor="gray.200" borderRadius="md" p={4}>
      <VStack spacing={4} align="stretch">
        {slideData.parts.map((part) => (
          <SlidePart
            key={part.id}
            partData={part}
            isSelected={selectedPart === part.id}
            onSelect={() => handleSelectPart(part.id)}
          />
        ))}
        <Button colorScheme="teal" onClick={() => updateSlide(slideData.id, { parts: [...slideData.parts, { id: Date.now(), media: '', caption: '', duration: 5, transition: 'fade' }] })}>
          Add Part
        </Button>
      </VStack>
      {selectedPart && (
        <Settings
          settings={slideData.parts.find((part) => part.id === selectedPart)}
          onUpdate={(newSettings) => handleUpdatePart(selectedPart, newSettings)}
        />
      )}
    </Box>
  );
};

export default Slide;