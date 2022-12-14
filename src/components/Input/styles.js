import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;
  position: relative;

  > svg {
      margin-left: 16px;
      
      position: absolute;
      top:50%;
      left:2px;
      transform: translateY(-50%);
    }

  > input {
    width: 100%;
    height: 56px;
    padding: 12px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    color: ${({theme}) => theme.COLORS.GRAY_100};

    padding: 19px 44px;
    border-radius: 10px;
    border: none;

    &:placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

`