import React, { FC } from 'react';
import Cracked from 'components/Animation/Cracked';

import './styles.css';

export interface FullScreenAnimationProps {
  children?: React.ReactNode;
}

const FullScreenAnimation: FC<FullScreenAnimationProps> = ({ children }) => (
  <div className="fullscreen-animation-root">
    <div className="fullscreen-animation-container">
      <Cracked>{children}</Cracked>
    </div>
  </div>
);

export default FullScreenAnimation;
