import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header'; // Importe o componente Header

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
    </View>
  );
};

export default Home;