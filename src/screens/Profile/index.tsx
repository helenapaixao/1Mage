import React from "react";
import Input from "../../components/Input";
import Container from "../../components/Container";
import Button from "../../components/Button";
/* import { LogoContainer, LogoImage} from './styles' */
import Header from "../../components/Header";

const Profile = () => {
  return (
    <>
      {/*   <Header/> */}
      <Container>
        <Input label="Name" placeholder={""} />
        <Input label="Surname" placeholder={""} />
        <Input label="Email" placeholder={""} />
        <Input label="Password" placeholder={""} />
        <Input label="Confirm Password" placeholder={""} />

        <Button label="Register" onPress={() => null} />
      </Container>
    </>
  );
};

export default Profile;
