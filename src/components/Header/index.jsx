// @ts-nocheck
import { useAuth } from "../../hooks/auths";
import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri"

export function Header() {
  const { signOut } = useAuth();
  
  return(
    <Container>
      <Profile to="/profile">
      <img src="https://github.com/geraldofrz.png" alt="Foto de perfil do usuário." />

      <div>
        <span>Bem Vindo</span>
        <strong>Geraldo Frazão</strong>
      </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}