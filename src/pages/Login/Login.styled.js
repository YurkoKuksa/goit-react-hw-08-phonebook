import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
`;

export const ParLogin = styled.p`
  margin: 16px;
  font-size: 20px;
  color: darkblue;
  font-weight: 700;
`;

export const Asking = styled.p`
  margin: 40px 16px 10px;
  font-weight: 600;
  font-size: 20px;
  color: #9a082a;
`;

export const ClickHere = styled(NavLink)`
  display: inline-block;
  font-weight: 700;
  color: darkgreen;
  margin: 5px 16px;

  padding: 4px 12px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #e9eef2;

  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  transition: transform 0.3s, filter 0.3s, background-color 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.4);
    background-color: #2476c7;
    color: #f6ecef;
  }
  &:active {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

export const ButtonLogin = styled.button`
  padding: 4px 12px;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s;
  background-color: #3498db;
  color: #fff;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  &:hover {
    background-color: #2476c7;
    /* #3488db */
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

export const Label = styled.label`
  font-weight: 700;
  margin: 16px;
`;

export const FormStyled = styled.form`
  margin-bottom: 20px;
`;
