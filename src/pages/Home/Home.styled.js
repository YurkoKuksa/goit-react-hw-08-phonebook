import styled from 'styled-components';
import { Link } from 'react-router-dom';
// export const Container = styled.div`
//   padding: 15px 25px;
// `;

// export const Title = styled.h1`
//   font-size: 23px;
//   color: darkgreen;
//   font-weight: 700;
//   margin-bottom: 10px;
// `;

// export const Picture = styled.img`
//   width: 600px;
//   height: auto;
//   margin: 0 auto;
// `;

// export const Lii = styled.li`
//   margin-bottom: 5px;
//   font-weight: 600;
// `;

// export const ListItems = styled.p`
//   &:hover {
//     font-weight: 700;
//     color: darkgreen;
//   }
// `;

export const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  margin: 20px;
  color: #666;
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  margin: 20px;
  color: #4285f4;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
