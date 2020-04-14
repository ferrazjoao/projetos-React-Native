import React from 'react';
import {Text, StyleSheet, Button, SafeAreaView} from 'react-native';

class Votos extends React.Component {
  constructor() {
    super();
    this.state = {
      votos: 0,
    };
  }
  render() {
    return (

      <SafeAreaView>
      <Text> Total de Votos : {this.state.votos} </Text>
      <Button
      onPress = {() => { this.setState ({votos: this.state.votos +1 })}}
      title = 'Votar'
      />
    </SafeAreaView>
    )
  }
}
export default Votos