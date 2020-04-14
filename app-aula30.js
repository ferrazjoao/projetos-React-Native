import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

function Render(){
  const [textoDigitado, setTextoDigitado] = useState('');
  const [textoPostado, setTextoPostado] = useState('')
  
  return(
  <View style={styles.container}>
      <Text style={styles.titulo} >Digite um texto aqui</Text>
      <TextInput style ={{
        height: 100, 
        width: 300,
        borderColor: 'black', 
        borderWidth: 2, 
        margin: 5}}
        placeholder="Digite uma frase de um livro por exemplo"
        multiline={true}
        onChangeText={texto => setTextoDigitado(texto)}
        maxLength={140}
        value = {textoDigitado}
        />
      <Button
      onPress={() => {
        if (textoDigitado.length < 50){
          Alert.alert("Esse texto precisa ter no mínimo 50 caracteres")
        }else{
        setTextoPostado(textoDigitado),
        Alert.alert("Sua frase foi postada")
        setTextoDigitado('')
        }
      }}
      title="Postar" color="black" />
    
      <Text style={styles.titulo}>Mural: </Text>
      <Text style={styles.fonteBase}>{textoPostado}</Text>
    </View>

  )
}



export default function App() {
  return(
    <Render/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonteBase: {
    fontFamily: '',
    fontSize:  20
},
titulo: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 'bold'

},
negrito: {
  fontFamily: 'Roboto',
  fontSize: 20,
  fontWeight: 'bold'

}
});