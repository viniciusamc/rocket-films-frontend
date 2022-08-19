import styled from "styled-components";

export const Container = styled.div`
  font-size: 36px;
  line-height: 46px;
  text-align: left;
  margin-top: 24px;
  margin-bottom: 24px;

  color: ${({theme}) => theme.COLORS.WHITE};

  > svg:first-child {
    margin-left: 20px;  
  }

  > svg {
    font-size: 14px;
    margin-left: 10px;
  }
`