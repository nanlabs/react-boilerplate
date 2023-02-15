import React from 'react';
import logo from '@/assets/images/react.svg';
import NanLabsIcon from '@/components/NanLabsIcon';
import ShapeBackground from '@/components/ShapeBackground';
import useWindowSize from '@/hooks/useWindowSize';

import {
  Root,
  HeroContainer,
  TextContainer,
  Title,
  Subtitle,
  IllustrationContainer,
  Image,
  ImageContainer,
} from './styles.js';

const Hero = () => {
  const windowSize = useWindowSize();
  const showIllustration = (windowSize.width ?? 0) > 1200;

  return (
    <Root>
      <HeroContainer>
        <TextContainer fullWidth={!showIllustration}>
          <Title>NaNLabs</Title>
          <Subtitle>React Webpack Template demo</Subtitle>
        </TextContainer>
        {showIllustration && (
          <IllustrationContainer>
            <Image src={logo} position="absolute" alt="logo" top="-12vw" right="-5vw" height="21vw" />
            <ImageContainer top="1vw" right="10vw">
              <NanLabsIcon
                fill={'#5d73f5'}
                width="17vw"
                height="17vw"
                filter={'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .4))'}
              />
            </ImageContainer>
          </IllustrationContainer>
        )}
        <ShapeBackground />
      </HeroContainer>
    </Root>
  );
};
export default Hero;
