import styled from 'styled-components';

export type RingShapeProps = {
  size?: string;
  color?: string;
  ring?: string;
};

export const RingShape = styled.div<RingShapeProps>`
  position: relative;
  background-color: transparent;
  z-index: 1;
  border-width: 20px;
  border-style: solid;
  border-radius: 9999px;
  height: ${(props) => props.size || '100px'};
  width: ${(props) => props.size || '100px'};
  border-color: ${(props) => props.color || 'teal'};
  border-width: ${(props) => props.ring || '20px'};
`;

export default RingShape;
