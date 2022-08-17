import styled from 'styled-components';

export const FixedContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

type NavProps = {
  condensed: boolean;
};

export const Nav = styled.nav<NavProps>`
  display: flex;
  flex: 1;
  justify-content: center;
  color: black;
  background-color: #fefefe;
  transition: all 0.2s ease-in-out 0s;
  padding: ${({ condensed }) => (condensed ? '20px 0' : '40px 0px')};
  box-shadow: ${({ condensed }) => (condensed ? '0 2px 10px 0 rgba(36, 50, 66, 0.075)' : 'none')};

  .desktop-nav {
    display: flex;
  }

  .mobile-nav {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }

    .mobile-nav {
      display: flex;
    }
  }
`;
