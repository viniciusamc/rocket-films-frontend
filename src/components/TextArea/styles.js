import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > textarea {
    width: 100%;
    min-height: 270px;
    resize: none;
    margin: 0 auto;

    padding: 19px 44px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    border-radius: 10px;
    border: none;

    &:placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

`