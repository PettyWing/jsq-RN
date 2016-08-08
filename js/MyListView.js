import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ListView, Text, View } from 'react-native';

class MyListView extends Component {
  // 初始化伪数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={ styles.container}>
        <ListView
          dataSource={ this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }

  _getData(){

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(items)
module.exports = MyListView;