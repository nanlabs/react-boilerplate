import styled from 'styled-components';

export const Root = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export type ShapeWrapperProps = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  zIndex?: number;
};

export const ShapeWrapper = styled.div<ShapeWrapperProps>`
  display: block;
  position: absolute;
  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
`;
