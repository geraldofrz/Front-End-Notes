// @ts-nocheck
import { FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>Your Notes</h1>
        <p>Suas notas em um só lugar</p>

        <h2>Faça seu login</h2>

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

        <Button title="Entrar"/>
        
        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}