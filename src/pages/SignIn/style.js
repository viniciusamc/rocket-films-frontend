import styled from "styled-components";
import backgroundIMG from "../../assets/background.png"

export const Body = styled.body`
  min-height: 100vh;
  display: grid;

  flex: 1;
  background: url(${backgroundIMG}) no-repeat center center;
  background-size: cover;

`

export const Container = styled.main`
  width: 640px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div{
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 48px;
      color: ${({theme}) => theme.COLORS.PINK}
    }

    p {
      font-size: 14px;
      opacity: .5;
      margin-bottom: 48px;
    }
  }


`

export const Form = styled.form`
  width: 340px;
  display: flex;
  flex-direction: column;

  > legend {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 48px;
  }

  > Input {
    margin-bottom: 8px;
  }

  > Button {
    margin-top: 24px;
    margin-bottom: 42px;
    justify-content: center;
  }

`