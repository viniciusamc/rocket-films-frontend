import { Container } from "./styles";

export function AddMovie({icon: Icon, title, }){
  return(
    <Container>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}