import { FiLock, FiMail } from 'react-icons/fi'
import { Container, Form, Body } from './style'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Back } from '../../components/Back'


export function SignIn(){
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

        <Back title="Criar Conta"/>
      </Form>

    </Container>
    </Body>

  )
}