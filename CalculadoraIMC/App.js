import FormIMC from './src/components/FormIMC';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <FormIMC/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
  },
});
