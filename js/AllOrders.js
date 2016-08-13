import React, { Component } from 'react';
import { StyleSheet, ListView, Image, Text, View, TouchableOpacity } from 'react-native';

var img = require('../imgs/more_btn.png')

class OrderListView extends Component {
  // 初始化伪数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this._getData())
    };
  }
  render() {
    return (
      <View style={ styles.container}>
        <ListView
          dataSource={ this.state.dataSource}
          renderRow={this._renderItem.bind(this)} //bind ?
          renderSeparator={this._renderSeparator}
          style={ styles.listview}
        />
      </View>
    );
  }

  _getData(){
    const data = [{
    title: '韩式5微米PP棉滤芯X1',
    time: '2015.09.06 15:31',
    price: ' ￥123',
    state: '待收货',  //1待发货/2待收货/3已完成/4已取消
    },{
      title: '韩式1微米PP棉滤芯X2 50G抗污染反渗透XXXXXX',
      time: '2015.09.06 15:32',
      price: ' ￥482',
      state: '已完成',
    },{
      title: '韩式3微米PP棉滤芯X1',
      time: '2015.09.06 15:32',
      price: ' ￥386',
      state: '待发货',
    },{
      title: '韩式6微米PP棉滤芯X2',
      time: '2015.09.06 15:32',
      price: ' ￥634',
      state: '已取消',
    },{
    title: '韩式5微米PP棉滤芯X1',
    time: '2015.09.06 15:31',
    price: ' ￥123',
    state: '待收货',  //1待发货/2待收货/3已完成/4已取消
    },{
      title: '韩式1微米PP棉滤芯X2 50G抗污染反渗透XXXXXX',
      time: '2015.09.06 15:32',
      price: ' ￥482',
      state: '已完成',
    },{
      title: '韩式3微米PP棉滤芯X1',
      time: '2015.09.06 15:32',
      price: ' ￥386',
      state: '待发货',
    },{
      title: '韩式6微米PP棉滤芯X2',
      time: '2015.09.06 15:32',
      price: ' ￥634',
      state: '已取消',
    }];
    return data;
  }
  
  _renderItem (rowData, sectionID, rowID) {
    var color = rowData.state==='待发货' || rowData.state==='待收货' ? 'red' : '#8d8d8d';
    return (
      <TouchableOpacity onPress={() => this._pressRow(rowID)}>
        <View style={styles.itemcontainer}>
          <View style={styles.leftcontainer}>
            <Text numberOfLines={1} style={styles.black}>{rowData.title}</Text>
            <Text style={styles.grey}>{rowData.time}</Text>
            <View style={styles.statecontainer}>
              <View flexDirection='row'>
                <Text style={styles.grey}>{'合计:'}</Text>
                <Text style={styles.red}>{rowData.price}</Text>
              </View>
              <Text style={[styles.grey,{color:color}]}>{rowData.state}</Text>
            </View>
          </View>
          <View style={styles.thumb}>
            <Image source={img} style={styles.img}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  _pressRow(rowID){
    alert("hellow"+rowID);
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
 //   color: '#8d8d8d',
    fontSize: 16,
  },
  red: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'red',
    fontSize: 16,
  },
});

module.exports = OrderListView;