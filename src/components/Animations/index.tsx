import styled, { keyframes, css } from 'styled-components';

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const upDown = keyframes`
  from {
    transform: translate3d(0,25px,0);
  }
  to {
    transform: translate3d(0,-50px,0);
  }
`;

export const upDownWide = keyframes`
  from {
    transform: translate3d(0,0,0);
  }
  to {
    transform: translate3d(0,-150px,0);
  }
`;

export const upDownAnimation = css`
  animation: ${upDown} 7s ease-in-out infinite alternate;
`;

export const upDownWideAnimation = css`
  animation: ${upDownWide} 15s ease-in-out infinite alternate;
`;

export const UpDown = styled.div`
  ${upDownAnimation};
  position: relative;
  ${(props) => props}
`;

export const UpDownWide = styled.div`
  ${upDownWideAnimation};
  position: relative;
  ${(props) => props}
`;
