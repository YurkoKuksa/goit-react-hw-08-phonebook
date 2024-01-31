import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BoxUl = styled.ul`
  display: flex;
  gap: 15px;
  padding: 15px;
`;

export const ClickLink = styled(Link)``;

export const List = styled.li`
  font-weight: 500;

  transition: transform 0.3s, filter 0.3s;

  &:hover {
    transform: scale(1.1);
    filter: brightness(0.8);
  }
`;
