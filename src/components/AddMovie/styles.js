import styled from "styled-components";

export const Container = styled.button`
  background: ${({theme}) => theme.COLORS.PINK};
  border: none;
  border-radius: 8px;

  font-size: 16px;
  display: flex;
  align-items: center;

  padding: 15px 32px;

  > svg {
    font-size: 24px;
    margin-right: 8px;
  }
`