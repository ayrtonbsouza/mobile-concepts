import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

/**
 * Não possuem valor semântico;
 * Não possuem estilização própria
 * View: div - footer - header - main - aside - section
 * Text: p, span, h1, h2, h3
 * Todos componentes por padrão "display:flex"
 */

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello, world</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7159c1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold'
  }
})