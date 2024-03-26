/* eslint-disable react/prop-types */
// @ts-nocheck
import { Container } from "./styles";

export function Button({ title, loading = false, ...rest }) {
  return(
      <Container 
      type="button"
      disabled={loading}
      {...rest}
      >
        {loading ? "carregando..." : title}
      </Container>
  );
}