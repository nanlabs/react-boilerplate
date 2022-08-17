import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  padding: 0 20px;
`;

export const Brand = styled.div`
  padding-right: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 0 40px;
`;

export const NavItem = styled.li`
  font-size: 20px;
  font-weight: normal;
  margin: 0 14px;
  cursor: pointer;
  list-style: none;

  a {
    text-decoration: none;
    color: black;
  }
`;
