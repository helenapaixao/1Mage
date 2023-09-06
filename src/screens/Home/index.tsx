import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header'; 
import Card from '../../components/Card';
import {TextCategories} from './styles'
import SearchInput from '../../components/InputSearch';

const Home: React.FC = () => {
  const handleMenuPress = () => {
    // Implemente a ação do menu aqui
  };

  const handleBellPress = () => {
    // Implemente a ação da campainha aqui
  };

  return (
    <View>
      <Header title="Home" onMenuPress={handleMenuPress} onBellPress={handleBellPress} />

      <SearchInput onSearch={() => null} />
      <Card />
      <TextCategories>Categories</TextCategories>
    </View>
  );
};

export default Home;
