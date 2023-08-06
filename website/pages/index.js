import React, { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import FileInput from '../components/FileInput';
import CharacterInput from '../components/CharacterInput';
import MoviePreview from '../components/MoviePreview';
import SlideList from '../components/SlideList';
import RenderButton from '../components/RenderButton';
import ProgressBar from '../components/ProgressBar';
import '../styles/tailwind.css';
import '../styles/chakra.js';

export default function Home() {
  const [gedcomData, setGedcomData] = useState(null);
  const [mainCharacter, setMainCharacter] = useState(null);
  const [movieData, setMovieData] = useState({slides: []});
  const [renderProgress, setRenderProgress] = useState(0);

  return (
    <ChakraProvider>
      <div className="flex flex-row h-screen">
        <div className="w-1/2 p-4">
          <FileInput setGedcomData={setGedcomData} />
          {gedcomData && <CharacterInput setMainCharacter={setMainCharacter} />}
          {mainCharacter && <SlideList movieData={movieData} setMovieData={setMovieData} />}
          <RenderButton movieData={movieData} setRenderProgress={setRenderProgress} />
        </div>
        <div className="w-1/2 p-4">
          {mainCharacter && <MoviePreview movieData={movieData} />}
        </div>
      </div>
      <ProgressBar renderProgress={renderProgress} />
    </ChakraProvider>
  );
}