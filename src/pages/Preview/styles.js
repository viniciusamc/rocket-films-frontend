import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 160px auto;
  grid-template-areas: 
  "header"
  "container";

  > main {
    grid-area: container;
    overflow-y: auto;
    padding: 64px 0;
    margin: 0 auto;
    background: red;
  }

  background-color: ${({theme}) => theme.COLORS_BACKGROUND_900};
`

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  > button:first-child {
    align-self: end;
  }
  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }
  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`

export const Tag = styled.div`
  margin: 40px 0;
  display: flex;
  gap: 8px;
`

export const Text = styled.p`
  font-size: 16px;
  line-height: 21px;
  text-align: justify;
  color: ${({theme}) => theme.COLORS.WHITE};
`