//Comandos para importar (pegar) elementos/funções de outros documentos.
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import Result from "./Result";
import Classification from "./Classification";
import IdealWeight from "./IdealWeight";

//Função padrão do FormIMC, ela cria imputs para coletar os valores altura e peso, com eles, uma conta é realizada por meio de outra função (interna), para assim calcular o imc.
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
    
    //Imprime os Imputs e o button.
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

            {/* As duas linhas seguintes exportam os valores do imc e da altura para os outros documentos. */}
            <Classification imc={imc}/>
            <IdealWeight altura = {altura}/>
        </View>
    );
};

//Estilização dos elementos do documento.
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

//Exporta o FormIMC.
export default FormIMC;
