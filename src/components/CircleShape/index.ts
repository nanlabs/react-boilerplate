import styled from 'styled-components';

export type CircleShapeProps = {
  deg?: string;
  primary?: string;
  secondary?: string;
};

export const CircleShape = styled.div<CircleShapeProps>`
  position: relative;
  background-image: linear-gradient(${(props) => `${props.deg}, ${props.primary}, ${props.secondary}`});
  border-radius: 9999px;
  z-index: 1;
  height: 100px;
  width: 100px;
`;

export default CircleShape;
