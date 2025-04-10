//Comandos para importar (pegar) elementos/funções de outros documentos.
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//Essa é a função principal do Result.js, ela pega o valor do Imc importado e o imprime.
const Result = ({ imc }) => {
    return (
        <View style = {styles.resultView}>
            <Text style = {styles.result}>Seu IMC é: {imc}</Text>
        </View>
    );
}

//Estilização dos elementos.
const styles = StyleSheet.create({
    result: {
        fontSize: 24,
        color:'#000',
    },

    resultView: {
        backgroundColor:'#cfcfcf',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 16,
        borderRadius: 15,
        elevation: 8,
    },
});

//Expotação do função.
export default Result;
