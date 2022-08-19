import { Container, Profile, InputBox } from "./styles";

import { Input } from "../Input";

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <InputBox>
        <Input placeholder="Pesquisar pelo título" type="text"/>
      </InputBox>
      <Profile>
        <div>
          <span>Vinicius Martins</span>
          <a href="#">sair</a>
        </div>
        <img src="http://github.com/Viiniciusgm.png" alt="User" />
      </Profile>
    </Container>
  )
}