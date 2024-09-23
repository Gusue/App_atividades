import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import quotesData from './assets/quotes.json';
import images from './assets/imageMap';

export default function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const novaCitação = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuoteIndex(randomIndex);
  };

  const { author, quote } = quotesData[quoteIndex];
  const authorImage = images[author]; 

  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>"{quote}"</Text>
      <Text style={styles.authorText}>- {author}</Text>
      <Image source={authorImage} style={styles.authorImage} />
      <TouchableOpacity onPress={novaCitação} style={styles.button}>
        <Text style={styles.buttonText}>Nova Citação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  quoteText: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  authorText: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  authorImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
