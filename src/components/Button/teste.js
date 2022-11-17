import React from 'react';
import styled from 'styled-components';


const Button = ({ type, children }) => {

const ButtonComponent = styled.button`

  font-family: 'Montserrat', sans-serif;
  padding: 12px 30px;
  margin: 0px;
  border: none;
  cursor: pointer; 
  color: ${({ type }) => fontColors[type]};
  background-color: ${({ type }) => backgroundColors[type]};
    
    &:hover {
      font-weight: 500;
      background-color: ${({ type }) => hoverBgColors[type]};
      transition: 0.3s; 
    }
`;

const fontColors = {
    primary: '#000',
    secondary: '#FFF',
    ghost: '#000',
  
  };
  
  const backgroundColors = {
    primary: '#FFD940',
    secondary: '#999999',
    ghost: 'rgba(214, 214, 214, 0)',
  
  };
  
  const hoverBgColors = {
    primary: '#f0c000',
    secondary: '#7a7a7a',
    ghost: 'rgba(214, 214, 214, 0.48)',
  };

  return (
    <ButtonComponent type={type}>
      {children}
    </ButtonComponent>
  );
};





export default Button;