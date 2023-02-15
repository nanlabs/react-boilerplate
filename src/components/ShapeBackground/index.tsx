import React from 'react';
import { Root, ShapeWrapper } from './styles.js';
import CircleShape from '@/components/CircleShape';
import RingShape from '@/components/RingShape';
import { UpDown, UpDownWide } from '@/components/Animations';
import useWindowSize from '@/hooks/useWindowSize';

const violet = '#805ad5';
const lightGreen = '#38b2ac';
const red = '#f56565';

const ShapeBackground = () => {
  const windowSize = useWindowSize();
  const showRightShapes = (windowSize.width ?? 0) > 1200;

  return (
    <Root>
      <LeftShapes />
      {showRightShapes && <RightShapes />}
    </Root>
  );
};

const LeftShapes = () => {
  return (
    <>
      <ShapeWrapper top="180px" left="-200px">
        <UpDown animationDuration="15s">
          <RingShape size="225px" ring="50px" color={lightGreen} />
        </UpDown>
      </ShapeWrapper>
      <ShapeWrapper top="180px" left="-115px">
        <UpDownWide>
          <RingShape size="30px" ring="5px" color={red} />
        </UpDownWide>
      </ShapeWrapper>
      <ShapeWrapper top="20px" left="600px">
        <UpDownWide>
          <RingShape size="30px" ring="5px" color={lightGreen} />
        </UpDownWide>
      </ShapeWrapper>
      <ShapeWrapper top="50px" left="700px">
        <UpDownWide animationDirection="alternate-reverse">
          <RingShape size="30px" ring="5px" color={red} />
        </UpDownWide>
      </ShapeWrapper>
      <ShapeWrapper top="240px" left="500px">
        <UpDownWide>
          <RingShape size="30px" ring="5px" color={violet} />
        </UpDownWide>
      </ShapeWrapper>
      <ShapeWrapper top="70px" left="100px">
        <UpDown>
          <RingShape size="30px" ring="5px" color={lightGreen} />
        </UpDown>
      </ShapeWrapper>
      <ShapeWrapper top="100px" left="0px">
        <UpDown>
          <RingShape size="30px" ring="5px" color={violet} />
        </UpDown>
      </ShapeWrapper>
      <ShapeWrapper top="270px" left="300px">
        <UpDownWide animationDuration="7s">
          <RingShape size="30px" ring="5px" color={red} />
        </UpDownWide>
      </ShapeWrapper>
      <ShapeWrapper top="150px" left="200px">
        <UpDownWide animationDirection="alternate-reverse">
          <RingShape size="30px" ring="5px" color={violet} />
        </UpDownWide>
      </ShapeWrapper>
      <ShapeWrapper top="30px" left="400px">
        <UpDown animationDirection="alternate-reverse">
          <RingShape size="30px" ring="5px" color={lightGreen} />
        </UpDown>
      </ShapeWrapper>
      <ShapeWrapper top="-180px" left="-150px">
        <CircleShape height="200px" width="200px" deg={'135deg'} primary={'#a0aec0'} secondary={'#4a5568'} />
      </ShapeWrapper>{' '}
    </>
  );
};

const RightShapes = () => (
  <>
    <ShapeWrapper top="10.41vw" right="7.8vw">
      <RingShape size="3.2vw" ring="0.6vw" color={lightGreen} />
    </ShapeWrapper>
    <ShapeWrapper top="9.89vw" right="0">
      <RingShape size="1.4vw" ring="0.3vw" color={lightGreen} />
    </ShapeWrapper>
    <ShapeWrapper top="13.2vw" right="3.9vw">
      <RingShape size="1.4vw" ring="0.3vw" color={lightGreen} />
    </ShapeWrapper>
    <ShapeWrapper top="-6.51vw" right="1vw">
      <RingShape size="3.5vw" ring="0.6vw" color={red} />
    </ShapeWrapper>
    <ShapeWrapper top="2.82vw" right="6.25vw">
      <RingShape size="1.3vw" ring="0.3vw" color={red} />
    </ShapeWrapper>
    <ShapeWrapper top="5vw" right="1vw">
      <UpDown>
        <CircleShape height="7vw" width="7vw" deg={'135deg'} primary={violet} secondary={'#d6bcfa'} />
      </UpDown>
    </ShapeWrapper>
    <ShapeWrapper top="-5vw" right="17vw">
      <UpDown animationDirection="alternate-reverse">
        <CircleShape height="7vw" width="7vw" deg={'225deg'} primary={'#9ae6b4'} secondary={'#48bb78'} />
      </UpDown>
    </ShapeWrapper>
  </>
);

export default ShapeBackground;
