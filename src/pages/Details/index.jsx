// eslint-disable-next-line no-unused-vars
// @ts-nocheck
import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonTenxt } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonTenxt title="Excluir nota" />

          <h1>Testando a testa com testosterona</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed nemo, ipsa, voluptatum autem reprehenderit, dolorum cupiditate facere deleniti vel quo animi corrupti? Esse perferendis distinctio perspiciatis odio beatae laudantium.</p>

          <Section title="Links úteis">
            <Links>
            <li><a href="#">https://www.youtube.com/watch?v=wGPdAKVMkIE</a></li>
            <li><a href="#">https://www.youtube.com/watch?v=wGPdAKVMkIE</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title={"Voltar"} />
        </Content>
      </main>
    </Container>
  );
}