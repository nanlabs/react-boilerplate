import styled from 'styled-components';

export const MobileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  display: none;
  background-color: #fefefe;
`;

export const NavContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  padding: 0 20px;

  .side-menu:checked ~ ${MobileContainer} {
    display: flex;
  }

  .side-menu:checked ~ body {
    overflow: hidden;
  }
`;

export const HiddenMenuInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const LabelMenu = styled.label`
  z-index: 1001;
`;

export const MobileContent = styled.div`
  display: flex;
`;

export const Brand = styled.div`
  padding-right: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 150px 0 0 0;
`;

export const NavItem = styled.li`
  font-size: 20px;
  font-weight: normal;
  margin: 7px 0;
  cursor: pointer;
  list-style: none;

  a {
    text-decoration: none;
    color: black;
  }
`;
