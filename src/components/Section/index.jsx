/* eslint-disable react/prop-types */
// @ts-nocheck
import { Container } from "./styles";


export function Section({title, children}) {
  return(
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}