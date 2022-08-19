import { Main, Title, Head, Scroll } from './style'
import { FiPlus, FiStar } from 'react-icons/fi'

import { Header } from "../../components/Header";
import { AddMovie } from '../../components/AddMovie';
import { Section } from '../../components/Section';

export function Home(){
  return(
    <main>
      <Header/>
      <Main>
        <Head>
          <Title>Meus Filmes</Title>
          <AddMovie title="Adicionar Filme" icon={FiPlus}/>
        </Head>
        <Scroll>
        <Section title={"Inter"} icon={FiStar} text={"Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se "} tags="Ficção"/>

        <Section title={"Inter"} icon={FiStar} text={"Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se "} tags="Ficção"/>

        <Section title={"Inter"} icon={FiStar} text={"Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se "} tags="Ficção"/>
        </Scroll>

      </Main>
    </main>
  )
}