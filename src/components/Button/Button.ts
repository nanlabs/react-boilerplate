import styled from 'styled-components';

const Button = styled.button`
  font-size: 18px;
  color: black;
  border: 2px solid black;
  padding: 10px 40px;
  border-radius: 0px;
  background-color: transparent;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s linear;
  text-decoration: none;

  &:hover {
    color: #ffffff;
    background-color: #000000;
    border-color: #000000;
  }
`;

export default Button;
