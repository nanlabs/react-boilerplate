import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  background-color: var(--background-color);
`;

export const HeroContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  height: 100%;
  max-width: 1500px;
  min-height: 250px;
  margin: 60px 100px;
  position: relative;

  @media (max-width: var(--breakpoint-mobile)px) {
    margin: 60px 30px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width: ${(props) => (props.fullWidth ? '100%' : '50%')};
  flex-direction: column;
  z-index: 100;
`;

export const Title = styled.h1`
  color: var(--text-color-primary);
  font-size: 48px;
  font-weight: 700;
  text-align: left;
  line-height: 1.25;
  margin: 4px 0;

  @media (max-width: var(--breakpoint-mobile)px) {
    font-size: 26px;
  }
`;

export const Subtitle = styled.h2`
  color: var(--text-color-secondary);
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  line-height: 1.65;
  margin: 10px 0;

  @media (max-width: var(--breakpoint-mobile)px) {
    font-size: 18px;
  }
`;

export const IllustrationContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Image = styled.img`
  position: absolute;
  z-index: 10;
`;

export const ImageContainer = styled.div`
  position: absolute;
  z-index: 10;
`;
