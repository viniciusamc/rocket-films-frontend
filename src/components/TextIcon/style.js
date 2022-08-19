import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  display: flex;
`

export const Tags = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.DARK_PINK};

  font-size: 16px;
  color: ${({theme}) => theme.COLORS.WHITE};
  
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
`
