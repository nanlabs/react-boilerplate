import React, { FC } from 'react';
import Cracked from 'components/Animation/Cracked';

import { Root, AnimationContainer } from './styles';

export interface FullScreenAnimationProps {
  children?: React.ReactNode;
}

const FullScreenAnimation: FC<FullScreenAnimationProps> = ({ children }) => (
  <Root>
    <AnimationContainer>
      <Cracked>{children}</Cracked>
    </AnimationContainer>
  </Root>
);

export default FullScreenAnimation;
