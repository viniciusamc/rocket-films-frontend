import { Container, Form, Body } from './style'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
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
        <Input placeholder="E-mail"/>
        <Input placeholder="Senha"/>

        <Button title="Entrar"/>

        <Back title="Criar Conta"/>
      </Form>

    </Container>
    </Body>

  )
}