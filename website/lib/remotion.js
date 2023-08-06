import {Sequence, Composition, useCurrentFrame, useVideoConfig} from 'remotion';
import {Slide} from '../components/Slide';

export const RemotionVideo = ({movieData, mainCharacter}) => {
  const {fps} = useVideoConfig();
  const frame = useCurrentFrame();

  return (
    <Composition
      id="RemotionVideo"
      component={Slide}
      durationInFrames={movieData.duration * fps}
      fps={fps}
      width={1280}
      height={720}
      defaultProps={{
        mainCharacter: mainCharacter,
        movieData: movieData,
      }}
    >
      {movieData.slides.map((slide, index) => (
        <Sequence
          key={index}
          from={slide.startFrame}
          durationInFrames={slide.duration * fps}
        >
          <Slide slideData={slide} />
        </Sequence>
      ))}
    </Composition>
  );
};