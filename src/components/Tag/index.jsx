/* eslint-disable react/prop-types */
// @ts-nocheck
import { Container } from "./styles";


export function Tag({title, ...rest}) {
  return(
    <Container {...rest}>
      {title}
    </Container>
  );
}