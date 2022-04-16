import React, {Component} from 'react';
import {View, Text, SafeAreaView, SectionList, StyleSheet} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Item = ({title}) => (
  <View style={styles.item} >
    <Text style={styles.txt}>{title}</Text>
  </View>
);

class SectionListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item}/>}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.title}>{title}</Text>
          )}
          style={styles.section_list}
        />
      </SafeAreaView>
    );
  }
}

const styles=StyleSheet.create({
  section_list: {

  },
  item: {
    backgroundColor: '#e8827b',
    padding:7,
  },
  title: {
    fontSize: 20,
    color: '#033d99',
  },
  txt: {
    fontSize: 14,
    color: '#000',
  },
})

export default SectionListScreen;
