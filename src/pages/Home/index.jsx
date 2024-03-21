// @ts-nocheck

import { FiPlus } from "react-icons/fi";
import { Container, Logo, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home() {
  return(
    <Container>
        <Logo>
          <h1>YourNotes</h1>
        </Logo>

        <Header />

        <Menu>
          <li><ButtonText title='Todos' isActive/></li>
          <li><ButtonText title='React' /></li>
          <li><ButtonText title='Nodejs' /></li>
        </Menu>

        <Search>
          <Input placeholder="Pesquisar pelo título"/>
        </Search>
          
        <Content>
          <Section title="Minhas notas">
            <Note data={ {
              title: "React",
              tags: [
                {id: 1, name: "react"},
                {id: 2, name: "frango"}
              ]
            } } />
          </Section>

        </Content>

        <NewNote to="/new">
          <FiPlus />
          Criar Nota
        </NewNote>
    </Container>
  )
}