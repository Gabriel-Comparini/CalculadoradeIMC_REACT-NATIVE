import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import Result from "./Result";
import Classification from "./Classification";
import IdealWeight from "./IdealWeight";

const FormIMC = () =>{
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(null);

    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura)/100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        }
    };
    
    return (
        <View style = {styles.formContainer}>
            <TextInput 
                style = {styles.input}
                placeholder = "Peso (Kg)"
                keyboardType = "numeric"
                value = {peso}
                onChangeText = {setPeso}

            />

            <TextInput 
                style = {styles.input}
                placeholder = "Altura (Cm)"
                keyboardType = "numeric"
                value = {altura}
                onChangeText = {setAltura}
            />

            <Button title = "Calcular IMC" onPress = {calcularIMC} style = {styles.resultButton} />
            {imc && <Result imc = {imc} />}
            <Classification imc={imc}/>
            <IdealWeight altura = {altura}/>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor:'#f0f0f0',
        padding: 16,
        borderRadius: 10,
        elevation: 8,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },

});

export default FormIMC;
