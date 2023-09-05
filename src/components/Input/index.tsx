import React, { useState } from "react";
import { InputCustom, InputContainer, Label } from "./styles";

interface InputProps {
  label: string;
  placeholder: string;
}

const Input = ({ label }: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputCustom
        placeholder={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
      />
    </InputContainer>
  );
};

export default Input;
