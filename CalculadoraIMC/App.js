//Comandos para importar (pegar) elementos/funções de outros documentos
import FormIMC from './src/components/FormIMC';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';

//Função padrão do App.js, é a função principal, ela executa o código
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <FormIMC/>
    </View>
  );
}

//Estilização do view do App.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
  },
});
