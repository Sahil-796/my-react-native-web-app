import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles';

const fruits = [
  {
    name: 'Apple',
    image: 'https://example.com/apple.jpg',
    description: 'Apples are nutritious fruits that offer a variety of health benefits.',
    nutrition: '52 calories, 0.2g protein, 14g carbs, 0.2g fat',
  },
  {
    name: 'Banana',
    image: 'https://example.com/banana.jpg',
    description: 'Bananas are rich in potassium and provide quick energy.',
    nutrition: '89 calories, 1.1g protein, 23g carbs, 0.3g fat',
  },
  {
    name: 'Orange',
    image: 'https://example.com/orange.jpg',
    description: 'Oranges are a great source of vitamin C and hydration.',
    nutrition: '47 calories, 0.9g protein, 12g carbs, 0.1g fat',
  },
  {
    name: 'Strawberry',
    image: 'https://example.com/strawberry.jpg',
    description: 'Strawberries are packed with antioxidants and vitamins.',
    nutrition: '32 calories, 0.7g protein, 7.7g carbs, 0.3g fat',
  },
  {
    name: 'Grapes',
    image: 'https://example.com/grapes.jpg',
    description: 'Grapes are sweet, juicy fruits that are high in vitamins and minerals.',
    nutrition: '69 calories, 0.7g protein, 18g carbs, 0.2g fat',
  },
];

const FruitDescription = () => {
  return (
    <View style={styles.container}>
      {fruits.map((fruit, index) => (
        <View key={index} style={styles.fruitContainer}>
          <Image source={{ uri: fruit.image }} style={styles.image} />
          <Text style={styles.fruitName}>{fruit.name}</Text>
          <Text style={styles.description}>{fruit.description}</Text>
          <Text style={styles.nutrition}>{fruit.nutrition}</Text>
        </View>
      ))}
    </View>
  );
};

export default FruitDescription;