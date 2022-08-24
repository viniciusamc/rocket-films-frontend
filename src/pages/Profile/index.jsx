import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from "./style";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';



export function Profile(){
  return(
    <Container>
      <header>
        <a to="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/Viiniciusgm.png" 
            alt="Foto do usuário"
          />

          <label>
            <FiCamera />
            <input 
             id="avatar"
             type="file"
            />

          </label>
        </Avatar>

        <Input
        placeholder="Nome"
        type="text"
        icon={FiUser}
        />
        
        <Input
        placeholder="Email"
        type="text"
        icon={FiMail}
        />

        <Input
        placeholder="Senha atual"
        type="password"
        icon={FiLock}
        />

        <Input
        placeholder="Nova Senha"
        type="password"
        icon={FiLock}
        />

        <Button title="Salvar"/>

      </Form>
    </Container>
  )
}