import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Seção Superior */}
      <View style={styles.header}>
        {[...Array(4)].map((_, index) => (
          <View key={index} style={styles.smallCircleWhite} />
        ))}
        <View style={styles.smallCircleBlue} />
      </View>

      {/* Seção do Meio */}
      <View style={styles.body}>
        {/* Quadrado Azul */}
        <View style={styles.largeSquare}>
          {/* Bolinhas da esquerda */}
          <View style={styles.sideCirclesLeft}>
            {[...Array(5)].map((_, index) => (
              <View key={index} style={styles.sideCircle} />
            ))}
          </View>

          {/* Círculo grande central */}
          <View style={styles.centerCircle} />

          {/* Bolinhas da direita */}
          <View style={styles.sideCirclesRight}>
            {[...Array(5)].map((_, index) => (
              <View key={index}  style={[styles.sideCircle, index === 3 && { backgroundColor: 'grey' }]}  />
            ))}
          </View>
        </View>

        {/* Adicione o texto "Design" e o botão logo aqui */}
        <View style={styles.designRow}>
          <Text style={styles.designText}>Design</Text>
          <View style={styles.designButton} />
        </View>

        {/* Retângulos Laranja */}
        <View style={styles.rectanglesContainer}>
          {[...Array(3)].map((_, index) => (
            <View key={index} style={[styles.rectangle, index === 2 && { backgroundColor: 'grey' }]} />
          ))}
        </View>
      </View>

      {/* Seção Inferior */}
      <View style={styles.footer}>
        <View style={styles.bottomCircle} />
        <View style={styles.bottomCircleWhite} />
        <View style={styles.bottomCircleWhite} />
        <View style={styles.bottomCircle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  smallCircleWhite: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
  },
  smallCircleBlue: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'grey',
    borderWidth: 2,
    borderColor: 'black',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  largeSquare: {
    width: 250,
    height: 250,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    position: 'relative',
    borderRadius: 20,
    marginBottom: 20,
  },
  centerCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'grey',
    position: 'absolute',
    top: '35%',
    left: '35%',
  },
  sideCirclesLeft: {
    position: 'absolute',
    top: '10%',
    left: 10,
    justifyContent: 'space-between',
    height: '80%',
  },
  sideCirclesRight: {
    position: 'absolute',
    top: '10%',
    right: 10,
    justifyContent: 'space-between',
    height: '80%',
  },
  sideCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
  },
  rectanglesContainer: {
    width: 250,
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:0,
    paddingHorizontal: 0,
  },
  rectangle: {
    width: 70,
    height: 200,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
  },
  designRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 250, // Mesmo tamanho do quadrado azul
    marginBottom: 10,
    paddingHorizontal: 0,
  },
  designText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  designButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black', // Cor do botão
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    marginTop: 0,
  },
  bottomCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'grey',
    borderWidth: 2,
    borderColor: 'black',
  },
  bottomCircleWhite: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
  },
});
