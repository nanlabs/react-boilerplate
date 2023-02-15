import styled from 'styled-components';

export type CircleShapeProps = {
  height?: string;
  width?: string;
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
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}
`;

export default CircleShape;
