import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('FlatList')}>
            <Text style={styles.txt}>FlatList</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('ScrollView')}>
            <Text style={styles.txt}>ScrollView</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('SectionList')}>
            <Text style={styles.txt}>SectionList</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
  },
  btn: {
    margin: 10,
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height: 40,
    backgroundColor:'red',
  },
  txt: {
    color:'#000',
    fontSize:16,
  },
})

export default Home;
