import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { LogoContainer, LogoImage, MiddleTextContainer } from "./styles";
import { useNavigation } from "@react-navigation/native";


const SingIn = () => {
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    navigation.navigate("SingIn");
  };

  const handleLogin = () => {
     navigation.navigate("Home")
   }
  return (
    <>
      <Container>
        <LogoContainer>
          <LogoImage source={require("../../../assets/logo.svg")} />
        </LogoContainer>
        <Input label="Email" placeholder={""} />
        <Input label="Password" placeholder={""} />
        <Button label="Log in" onPress={handleLogin} />
        <MiddleTextContainer>
          <Text style={{ color: "#64748B" }}>Or continue with</Text>
          <TouchableOpacity onPress={handleCreateAccount}>
            <Text style={{ color: "#64748B", fontWeight: "500" }}>
              Don't have an account? Create now
            </Text>
          </TouchableOpacity>
        </MiddleTextContainer>
      </Container>
    </>
  );
};

export default SingIn;
