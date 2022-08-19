import { Container } from "./styles";

export function Title({title, rating:Icon, ...rest}){
  return(
    <Container> 
      {title}
      {Icon && <Icon size={20} />}
      {Icon && <Icon size={20} />}
      {Icon && <Icon size={20} />}
      {Icon && <Icon size={20} />}
      {Icon && <Icon size={20} />}
    </Container>
  )
}