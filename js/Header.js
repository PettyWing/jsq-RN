import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    ToastAndroid,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import ScrollableTabView , {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import AllOrders from "./AllOrders"
import SendOrders from "./SendOrders"
import ReceiveOrders from "./ReceiveOrders"

export default class Header extends Component {
  // 初始化伪数据

  constructor(props) {
    super(props);
     this.buttonBackAction = this.buttonBackAction.bind(this);
        this.state = {
            tabSelected: 1
        };
  }
   //返回
    buttonBackAction() {
        ToastAndroid.show('It is selected', ToastAndroid.SHORT);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 45, backgroundColor: 'white', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { this.buttonBackAction() } } style={{ marginLeft: 10, justifyContent: 'center' }}>
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={require('./ic_menu_back.png') }
                            />
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.titleText}>{"我的订单"}</Text>
                    </View>
                </View>

                <View style={{ height: 0.5, backgroundColor: '#BFBFBF' }}></View>

                <ScrollableTabView
                    tabBarUnderlineColor="#0289cd"
                    tabBarActiveTextColor="#0289cd"
                    tabBarInactiveTextColor ="#808080"
                    tabBarTextStyle={{ fontSize: 14 , }}
                    renderTabBar={() => <DefaultTabBar />}
                    >
                    <AllOrders tabLabel='全部订单' {...this.props}></AllOrders>
                    <SendOrders tabLabel='待发货订单' {...this.props}></SendOrders>
                    <ReceiveOrders tabLabel='待接收订单'{...this.props}></ReceiveOrders>
                </ScrollableTabView>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 8,
    },
    titleText: {
        fontSize: 15, color: 'black', alignSelf: 'center',
    },
});

