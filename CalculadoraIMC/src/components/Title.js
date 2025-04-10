//Comando que importa o React.
import { Text, StyleSheet } from 'react-native';

//Função principal do Title.js, ela imprime o Título.
const Title = () => {
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

//Estilização do Título.
const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom: 24,
    },
});

//Exportação da função Title.js.
export default Title;
