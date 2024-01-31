import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const BoxLayout = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderContainer = styled.header`
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.small};

  > & {
    display: flex;
    gap: 10px;
  }
`;

export const Par = styled.p`
  transition: transform 0.3s, filter 0.3s;

  &:hover {
    transform: scale(1.1);
    filter: brightness(0.8);
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavigationLink = styled(Link)`
  padding: 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #375143;
  font-weight: 700;
  margin-left: 25px;

  transition: transform 0.3s, filter 0.3s;

  &:hover {
    transform: scale(1.1);
    filter: brightness(0.8);
  }
`;

export const HomeLink = styled(NavigationLink)`
  margin: 0;
  padding: 10px;
  font-size: 25px;
  border-radius: 5px;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.small};
  text-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform 0.3s, filter 0.3s;
`;
