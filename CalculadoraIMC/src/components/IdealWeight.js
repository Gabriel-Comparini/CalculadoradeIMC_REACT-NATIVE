import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const IdealWeight = ({ altura }) => {
    if(altura == null){
        return null;
    } else if (altura) {
        altura = altura/100;
        let minWeight = 18.5 * altura * altura;
        let maxWeight = 24.9 * altura * altura;
        
        return (
            <View style = {styles.idealwView}>
                <Text style = {styles.idealweight}>
                    Seu Peso mínimo ideal é {minWeight.toFixed(2)}Kg
                    {'\n\n'}
                    Seu Peso máximo ideal é {maxWeight.toFixed(2)}Kg
                </Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({

    idealweight: {
        fontSize: 22,
        color:'#333',
        textAlign: 'center',
    },

    idealwView: {
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

export default IdealWeight;