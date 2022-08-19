import styled from "styled-components";

export const Container = styled.header`
  grid-area: "header";

  width: 100%;
  height: 120px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 24px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.PINK};
    font-weight: 700;
  }
` 

export const InputBox = styled.div`
  width: 100%;
  max-width: 690px;
`

export const Profile = styled.div`
  display: flex;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;

    margin-left: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;

    > a{
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

`