import styled from "styled-components";

export const Container = styled.div`
`

export const Main = styled.main`
  width: 1100px;
  margin: 40px auto;

  > h1 {
    margin-top: 24px;
  }

  > .input {
    margin-top: 40px;
    display: flex;
    gap: 40px;

    margin-bottom: 10px;
  }

  > .markers{
    > h3 {
      margin-top: 40px;
      margin-bottom: 20px;
    }

    > .tags {
      width: 100%;
      padding: 16px;
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
      display: flex;
      gap: 24px;

      border-radius: 8px;
    }
  }

  > .send {
    margin-top: 40px;
    display: flex;
    width: 100%;
    gap: 40px;

    > Button {
      width: 100%;
      justify-content: center;
    }

    > Button:first-child {
      background-color: ${({ theme}) => theme.COLORS.BACKGROUND_1000};
      color: ${({ theme}) => theme.COLORS.PINK};
    }
  }
`