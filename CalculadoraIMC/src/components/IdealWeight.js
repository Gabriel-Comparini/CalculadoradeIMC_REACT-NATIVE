//Aqui são importados do React e React-Native os elementos usados no documento.
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//Essa é a função principal do IdealWeight.js
const IdealWeight = ({ altura }) => {
    //Esse If/Else define se o valor importado do FormIMC.js é nulo ou não.
    if(altura == null){
        return null;
    } else if (altura) {
        //Essas são as contas necessária para definir seu peso máximo com base na altura.
        //A altura é dividida por 100 para ficar em metros.
        altura = altura/100;
        let minWeight = 18.5 * altura * altura;
        let maxWeight = 24.9 * altura * altura;
        
        return (
            //Elemento impresso pela função.
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

//Estilização do elemento impresso pela função.
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

//Exporta a função IdealWeight. 
export default IdealWeight;
