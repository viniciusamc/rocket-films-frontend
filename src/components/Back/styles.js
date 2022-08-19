import styled from "styled-components";

export const Container = styled.button`
  color: ${({theme }) => theme.COLORS.PINK};
  background: none;
  border: none;

  font-size: 16px;
  display: flex;
  align-items: center;

  > svg {
    font-size: 24px;
    margin-right: 8px;
  }
`