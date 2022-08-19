import { Container } from "./styles";
import { TextIcon } from "../TextIcon";

export function Section({title, icon: Icon, text, tags}){
  return(
    <Container>
        <h1>{title}</h1>
        <div>{Icon && <Icon size={20} />} {Icon && <Icon size={20} />} {Icon && <Icon size={20} />} {Icon && <Icon size={20} />} {Icon && <Icon size={20} />} </div>

        <p>{text}</p>
        <TextIcon title={tags}/>
    </Container>
  )
}