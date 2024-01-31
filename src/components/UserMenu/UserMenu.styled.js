import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px;
`;

export const Click = styled.button`
  font-weight: 500;

  transition: transform 0.3s, filter 0.3s;

  &:hover {
    transform: scale(1.1);
    filter: brightness(0.8);
  }
`;
