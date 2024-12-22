import React from 'react';
import { View } from 'react-native';
import FruitDescription from './components/FruitDescription';
import styles from './styles/styles';

const App = () => {
  return (
    <View style={styles.container}>
      <FruitDescription />
    </View>
  );
};

export default App;