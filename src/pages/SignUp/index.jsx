// @ts-nocheck
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";

export function SignUp() {
  return(
    <Container>

      <Background />

      <Form>
        <h1>Your Notes</h1>
        <p>Suas notas em um só lugar</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Cadastrar"/>
        
        <a href="#">Voltar ao ínicio</a>
      </Form>

    </Container>
  )
}