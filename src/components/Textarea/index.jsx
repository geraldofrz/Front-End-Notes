/* eslint-disable react/prop-types */
// @ts-nocheck
import { Container } from "./styles";

export function Textarea({value, ...rest}) {
  return(
    <Container {...rest}>
      {value}
    </Container>
  )
}