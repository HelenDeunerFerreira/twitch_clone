import React, { ReactNode } from "react";
import { Wrapper, Heading } from "./styles";

interface ComingSoonProps {
  children?: ReactNode;
}

function ComingSoon({ children }: ComingSoonProps) {
  return (
    <Wrapper>
      <Heading>Coming Soon...</Heading>
    </Wrapper>
  );
}

export default ComingSoon;
