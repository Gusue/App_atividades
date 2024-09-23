import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementar = () => setCount(count + 1);
  const decrementar = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Entrar (+)" onPress={incrementar} />
        <Button title="Sair (-)" onPress={decrementar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 48,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
