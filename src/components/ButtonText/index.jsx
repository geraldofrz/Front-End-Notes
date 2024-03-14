/* eslint-disable react/prop-types */
// @ts-nocheck
import { Container } from "./styles";


export function ButtonTenxt({title, ...rest}) {
  return(
    <Container type="button" {...rest}>
      {title}
    </Container>
  );
}