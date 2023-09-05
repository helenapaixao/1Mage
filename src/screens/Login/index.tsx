import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Input from "../../components/Input"
import Container from '../../components/Container';


const SingIn = () => {
  return (
    <Container>
      <Input label='Email' placeholder={''} />
      <Input label='Password' placeholder={''}/>
    </Container>
  )
}

export default SingIn