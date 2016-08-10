import React, { Component } from 'react';
import { StyleSheet, ListView, Image, Text, View } from 'react-native';

var img = require('../imgs/more_btn.png')
class MyListView extends Component {
  // 初始化伪数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel'
      ])
    };
  }
  render() {
    return (
      <View style={ styles.container}>
        <ListView
          dataSource={ this.state.dataSource}
          renderRow={this._renderItem}
          renderSeparator={this._renderSeparator}
          style={ styles.listview}
        />
      </View>
    );
  }

  _getData(){

  }
  
  _renderItem() {
    return (
      <View style={styles.itemcontainer}>
        <View style={styles.leftcontainer}>
          <Text style={styles.black}>{'韩式5微米PP棉滤芯x1'}</Text>
          <Text style={styles.grey}>{'2015.09.06 15:31'}</Text>
          <View style={styles.statecontainer}>
            <View flexDirection='row'>
              <Text style={styles.grey}>{'合计:'}</Text>
              <Text style={styles.red}>{' ￥123'}</Text>
            </View>
            <Text style={styles.grey}>{'已完成'}</Text>
          </View>
        </View>
        <View style={styles.thumb}>
          <Image source={img} style={styles.img}/>
        </View>
      </View>
    );
  }

  _renderSeparator() {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: '#CCCCCC' ,
        }}
      />
    );
  }

}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    //justifyContent: 'center',
    //alignItems: 'stretch',
    backgroundColor: '#F3F3F3',
  },
  listview: {
    backgroundColor: '#F5FCFF',
  },
  itemcontainer: {
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  leftcontainer: {
    flex: 10,
    marginLeft: 20, 
  },
  thumb: {
    marginLeft: 10, 
    flex: 1,
  },
  img: {
    width: 18,
    height: 18, 
  },
  statecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  black: {
    paddingTop: 1,
    paddingBottom: 1,
    color: '#333333',
    fontSize: 19,
  },
  grey: {
    paddingTop: 1,
    paddingBottom: 1,
    color: '#8d8d8d',
    fontSize: 16,
  },
  red: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'red',
    fontSize: 16,
  },
});

module.exports = MyListView;