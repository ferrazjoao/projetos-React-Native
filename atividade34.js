import React, { Component } from 'react';
import {Text, SafeAreaView, TextInput, View, StyleSheet, Alert, Button } from 'react-native';

class Jogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '', 
      tempo: 5, 
      play: false
    }
    this.contador;
  }

  iniciaJogo = () =>{
    this.contador = setInterval(() => {
      this.setState({tempo: this.state.tempo - 1})
    },1000);
    this.setState({play: true});
  }

  componentDidUpdate(){
    if(this.state.tempo === 0 && this.state.play === true){
      this.setState({play: false})
      this.limpaCronometro()
    }
  }
 
  limpaCronometro(){
    clearInterval(this.contador); 
    Alert.alert(`  Sua pontuação foi : ${this.state.texto.length}`)
  }

  render(){
    return (
      <View>
        <Text style={styles.title} > </Text>
        <Text style={styles.negrito}>Tempo: {this.state.tempo}</Text>
        <TextInput
          style={{
            height: 100, 
            width: 400,
            borderColor: 'black', 
            borderWidth: 2, 
            margin: 5
          }}
          numberOfLines = {4}
          editable={this.state.play}
          multiline = {true}
          placeholder='Digite aqui'
          onChangeText={(text) => this.setState({texto: text})}
          value={this.state.texto}
        />
        
        <Button 
         title = " Clique aqui para iniciar"
         color = 'red'
         onPress={() => {
          this.setState({
            texto: '', 
            tempo: 5, 
            play: true
          })
          this.iniciaJogo()
          }}>
         </Button>
      </View> 
    )
  }
}

const App = () => {
  return (
      <View style = {styles.container}>
        <Text />
        <Text style={styles.title}>Jogo da Digitação</Text>
        <Text />
        <Text style={styles.fonteBase}>Digite o maior número de caracteres possiveis em 5 segundos, pois cada caractere será equivalente a um ponto.</Text>
        <Jogo />
        <Text />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'snow',
  },
  fonteBase: {
    fontFamily: 'Open Sans',
    fontSize:  20
  },
  title: {
    fontFamily: 'Open Sans',
    fontSize: 22,
    fontWeight: 'bold'

  },
  negrito: {
   fontFamily: 'Open Sans',
   fontSize: 20,
   fontWeight: 'bold'
  }
});
export default App;