import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

export const StyledButton = styled.button`
  background-color: #1976d2;
  cursor: pointer;
  color: white;
  padding: 6px 16px;
  border-radius: 4px;
  font-weight: 500;
  border: none;
  font-size: 22px;
  text-decoration: none;
  font-weight: 100;
  transition: background-color 0.2s ease-in-out;
`
