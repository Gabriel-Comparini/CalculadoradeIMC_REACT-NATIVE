import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Classification = ({ imc }) => {
    if (imc == null) {
        return null;
    } else if (imc <= 18.5 ) {
        return (
            <View style = {styles.cassfView}>
                <Text style = {styles.classf}>
                    Você está <Text style = {styles.corForte}>abaixo do peso</Text>
                </Text>
            </View>
        );
    } else if (imc > 18.5 && imc <= 24.9) {
        return (
            <View style = {styles.cassfView}>
                <Text style = {styles.classf}>Você está com o peso ideal.</Text>
            </View>
        );
    } else if (imc >= 25 && imc <= 29.9) {
        return (
            <View style = {styles.cassfView}>
                <Text style = {styles.classf}>
                    Você está com <Text style = {styles.corForte}>sobrepeso.</Text>
                </Text>
            </View>
        );
    } else if (imc >= 30 && imc <= 34.9) {
        return (
            <View style = {styles.cassfView}>
                <Text style = {styles.classf}>
                    Você está com <Text style = {styles.corForte}>Obesidade Grau I.</Text>
                </Text>
            </View>
        );
    } else if (imc >= 35 && imc <= 39.9) {
        return (
            <View style = {styles.cassfView}>
                <Text style = {styles.classf}>
                    Você está com <Text style = {styles.corForte}>Obesidade Grau II.</Text>
                </Text>
            </View>
        );
    } else {
        return (
            <View style = {styles.cassfView}>
                <Text style = {styles.classf}>
                    Você está com <Text style = {styles.corForte}>Obesidade Grau III.</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    classf: {
        fontSize: 22,
        color:'#333',
    },

    cassfView: {
        backgroundColor:'#bbbbbb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 16,
        borderRadius: 15,
        elevation: 8,
    },

    corForte: {
        color: '#cc0000',
    },
});

export default Classification;