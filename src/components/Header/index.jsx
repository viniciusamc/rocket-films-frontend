import { Container, Profile, InputBox } from "./styles";
import { FiSearch } from 'react-icons/fi'

import { Input } from "../Input";

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <InputBox>
        <Input placeholder="Pesquisar pelo título" type="text" icon={FiSearch}/>
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