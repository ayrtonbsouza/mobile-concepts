import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';

/**
 * Não possuem valor semântico;
 * Não possuem estilização própria
 * View: div - footer - header - main - aside - section
 * Text: p, span, h1, h2, h3
 * Todos componentes por padrão "display:flex"
 */

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projetos').then(response => {
      setProjects(response.data)
    })
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.name}</Text>
          )}
        />
      </SafeAreaView>
      {/* <View style={styles.container}>
        { projects.map(project => (
          <Text style={styles.project} key={project.id}>{project.name}</Text>
        ))}
      </View> */}

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7159c1',
    flex: 1,
  },

  project: {
    color: '#FFF',
    fontSize: 25,
  }
})