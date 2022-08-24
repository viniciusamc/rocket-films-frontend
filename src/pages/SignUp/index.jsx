import { FiArrowLeft, FiLock, FiUser, FiMail } from 'react-icons/fi'
import { Container, Form, Body } from './style'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Back } from '../../components/Back'

export function SignUp(){
  return(
    <Body>
    <Container>
      <Form>
      <div>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
      </div>

      <legend>Faça seu login</legend>
        <Input
        icon={FiUser} 
        type="text"
        placeholder="Nome"
        />

        <Input
        icon={FiMail} 
        type="email"
        placeholder="E-mail"
        />
        
        <Input
        icon={FiLock} 
        type="password"
        placeholder="Senha"
        />

        <Button title="Entrar"/>

        <Back icon={FiArrowLeft} title="Voltar para o login"/>
      </Form>

    </Container>
    </Body>

  )
}