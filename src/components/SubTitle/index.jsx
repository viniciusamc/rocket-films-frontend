import { Container } from "./styles";
import { FiClock } from 'react-icons/fi'

export function SubTitle({img, name, hour}){
  return(

    <Container>
    <img src={img} alt="" srcset="" />
    <span>Por {name} {hour} </span>
  </Container>
)
}