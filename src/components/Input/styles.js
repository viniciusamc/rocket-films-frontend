import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  height: 56px;

  padding: 19px 24px;
  border-radius: 10px;
  border: none;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

  color: ${({theme}) => theme.COLORS.GRAY_100};

  &::placeholder{
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-size: 14px;
    
  }
`