import { Button } from "@chakra-ui/react";
import { useMovieData } from "../lib/movieContext";

export default function RenderButton() {
  const { movieData, startRender } = useMovieData();

  const handleClick = () => {
    if (!movieData.mainCharacter || movieData.slides.length === 0) {
      alert("Please select a main character and add at least one slide before rendering.");
      return;
    }

    startRender();
  };

  return (
    <Button colorScheme="teal" onClick={handleClick}>
      Render
    </Button>
  );
}