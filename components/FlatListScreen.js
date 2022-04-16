import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';

const data = [
  {
    id: 1,
    message:
      'Lorem ipsum dolor sit amet. In soluta debitis qui quaerat molestiae eos distinctio non quia cupiditate est magni quibusdam et quae corrupti.',
    datetime: '20:11 11/04/2022',
  },
  {
    id: 2,
    message:
      'Et reprehenderit ullam qui perferendis veritatis aut autem aliquid et officiis beatae qui iure autem ut recusandae minima!',
    datetime: '20:11 11/04/2022',
  },
  {
    id: 3,
    message:
      'Ut explicabo laudantium vel dicta voluptates eum molestiae voluptatem vel corrupti fugit.',
    datetime: '20:11 11/04/2022',
  },
  {
    id: 4,
    message:
      'Et aliquid voluptas et assumenda tenetur eos corporis possimus aut provident porro et doloribus Quis aut aperiam similique.',
    datetime: '20:11 11/04/2022',
  },
  {
    id: 5,
    message:
      'Non quidem voluptatem ea nisi molestiae sed facilis explicabo ut necessitatibus dolorem et laborum error qui eligendi fugit qui debitis alias.',
    datetime: '20:11 11/04/2022',
  },
  {
    id: 6,
    message:
      'Et explicabo beatae qui repellendus molestias id debitis voluptas hic quia magnam vel dignissimos commodi est labore maxime.',
    datetime: '20:11 11/04/2022',
  },
];

const renderItem = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.message}>{item.message}</Text>
    <Text style={styles.time}>{item.datetime}</Text>
  </View>
);

class FlatListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flat_list}
        />
      </SafeAreaView>
    );
  }
}

const styles=StyleSheet.create({
  flat_list:{

  },
  item:{
    marginLeft:10,
    marginRight:10,
    marginTop: 10,
    backgroundColor: '#e8827b',
    padding:7,
    borderRadius: 10,
  },
  message:{
    color: '#000',
    fontSize:16,
  },
  time:{
    color: '#3b201e',
    fontSize:13,
  },
})

export default FlatListScreen;
