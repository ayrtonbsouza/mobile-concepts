import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

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

  async function handleAddProject() {
    const response = await api.post('projetos', {
      name: `Novo projeto - ${Date.now()}`,
	    status: 'teste',
	    owner: 'Ayrton de Souza',
	    createdAt: '2020-11-06T15:40:00.000Z',
	    updatedAt: '2020-11-06T15:40:00.000Z'
    });
    const project = response.data;
    setProjects([...projects, project])
  }

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
        <TouchableOpacity 
          activeOpacity={0.6} 
          style={styles.button} 
          onPress={handleAddProject} 
        >
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
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
    paddingTop: 5,
    paddingLeft: 20,
    fontWeight: 'bold'
  },
  
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})