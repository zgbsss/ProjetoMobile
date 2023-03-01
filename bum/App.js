import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header.js';

export default function App() {
  const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5'];
  return (
    <View style={styles.container}>
      <Header titulo="sam gay lindo"/>
      <Header titulo="gabs linda"/>
      <Header titulo="jaaj boiola lindo"/>
      <Header titulo="nao"/>
      <View>
        <FlatList data={tasks} renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 380,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
