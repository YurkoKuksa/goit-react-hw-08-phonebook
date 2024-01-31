import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
`;

export const ParRegister = styled.p`
  margin: 16px;
  font-size: 20px;
  color: darkblue;
  font-weight: 700;
`;

export const ButtonRegister = styled.button`
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

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const PicBox = styled.div`
  margin: 20px;
  overflow: hidden;
  height: 400px;
`;

export const PictureRegister = styled.img`
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  height: auto;
`;
