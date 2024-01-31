import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
`;

export const Title = styled.h1`
  color: #1b4213;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  margin: 20px;
  color: #545454;
  text-indent: 20px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  font-weight: 700;
  font-size: 25px;
  margin: 20px auto;
  padding: 10px;
  color: #4285f4;
  text-decoration: none;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.inner};
  transition: background-color 0.3s, filter 0.3s;
  background-color: #98f398;

  &:hover {
    background-color: #7cf77c;
    color: #5f98f5;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 700px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
`;
