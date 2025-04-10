import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Result = ({ imc }) => {
    return (
        <View style = {styles.resultView}>
            <Text style = {styles.result}>Seu IMC é: {imc}</Text>
        </View>
    );
}

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

export default Result;