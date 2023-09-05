import React from 'react';
import Input from "../../components/Input"
import Container from '../../components/Container';
import Button from '../../components/Button';


const SingIn = () => {
  return (
    <Container>
      <Input label='Email' placeholder={''} />
      <Input label='Password' placeholder={''} />
      <Button label='Log in' onPress={() => null} />
    </Container>
  )
}

export default SingIn