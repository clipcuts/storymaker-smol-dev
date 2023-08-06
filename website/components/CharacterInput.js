import React, { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

const CharacterInput = ({ onCharacterSelect }) => {
  const [character, setCharacter] = useState('');

  const handleCharacterChange = (event) => {
    setCharacter(event.target.value);
  };

  const handleCharacterSubmit = () => {
    onCharacterSelect(character);
  };

  return (
    <Box>
      <Input
        id="characterInput"
        placeholder="Enter main character"
        value={character}
        onChange={handleCharacterChange}
      />
      <Button onClick={handleCharacterSubmit}>Select Character</Button>
    </Box>
  );
};

export default CharacterInput;