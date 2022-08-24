import { Container, Main } from './style'
import { FiArrowLeft } from 'react-icons/fi'

import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';
import { Back } from '../../components/Back';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function Movie(){
  return(
    <Container>
      <Header />
      <Main>
        <Back title={"Voltar"} icon={FiArrowLeft}/>
        <h1>
          Novo Filme
        </h1>

        <div className="input">
          <Input placeholder={"Título"} type="text"/>
          <Input placeholder={"Sua nota (de 0 a 5)"} type="number" min="0" max="5"/>
        </div>

          <TextArea placeholder={"Observações"} />


          <div className="markers">
            <h3>Marcadores</h3>
            <div className="tags">
            <NoteItem isNew placeholder="Novo Marcador"/>
            <NoteItem value="React"/>
            </div>
          </div>

          <div className="send">
            <Button title={"Excluir FIlme"} />
            <Button title={"Salvar Alterações"} />
          </div>
      </Main>
    </Container>
  )
}