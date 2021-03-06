import React from 'react';
import styled, { css } from 'styled-components';

const ButtonBase = css`
  color: ${(props) => props.theme.palette.primary};
  background-color: ${(props) => props.theme.palette.secondary};
  transition: background-color 1s ease;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${(props) => props.theme.palette.tertiary};
  }
`;

const Primary = styled.button`
  ${ButtonBase}
  font-size: 1.5rem;
  border-radius: 1.5rem;
  padding: 0.4rem 2.2rem;
`;

const Small = styled.button`
  ${ButtonBase}
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.4rem;
`;

export const PrimaryButton = ({ children, ...rest }) => {
  return <Primary {...rest}>{children}</Primary>;
};

export const SmallButton = ({ children, ...rest }) => {
  return <Small {...rest}>{children}</Small>;
};
