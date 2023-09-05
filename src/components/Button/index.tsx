import React from "react";
import { ButtonText, Container } from "./styles";

interface ButtonProps {
  onPress: () => void;
  label: string;
}

const Button = ({ onPress, label }: ButtonProps) => {
  return (
    <Container onPress={onPress}>
      <ButtonText>{label}</ButtonText>
    </Container>
  );
};

export default Button;
