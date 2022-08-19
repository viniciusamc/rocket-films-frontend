import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme})=> theme.COLORS.DARK_PINK};
  
  margin-top: 40px;
  width: 100%;
  border-radius: 8px;
  padding: 32px;

  > h1 {
    font-size: 24px;
    font-weight: bold;
  }

  > div {
    margin-top: 8px;
    margin-bottom: 15px;
  }

  > p {
    text-align: justify;
    line-height: 100%;
    line-height: 19px;
    margin-bottom: 15px;
    opacity: 0.5;
  }

`