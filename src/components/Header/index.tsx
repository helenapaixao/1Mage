import React from 'react';
import { TouchableOpacity } from 'react-native';
import {HeaderContainer, Title, IconContainer} from './styles'

import Icon from 'react-native-vector-icons/FontAwesome'; 
import Avatar from '../Avatar';

// ...

// Em algum lugar dentro do seu componente
<Icon name="bell" size={30} color="black" />

interface HeaderProps {
  title: string;
  onMenuPress: () => void;
  onBellPress: () => void;
}

const Header = ({ title, onMenuPress, onBellPress } :HeaderProps) => {
  return (
    <HeaderContainer>
      <TouchableOpacity onPress={onMenuPress}>
    <Icon name="bars"  size={30} color="black" />
      </TouchableOpacity>
 
      <IconContainer>
        <TouchableOpacity onPress={onBellPress}>
      <Icon name="bell" size={30} color="black" />
        </TouchableOpacity>
       <Avatar   />
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
