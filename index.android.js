/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
} from 'react-native';
import AllOrders from "./js/AllOrders";
import Header from "./js/Header"
class jsq extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    var defaultName = 'AllOrdersComponent';
    var defaultComponent = AllOrders;
    return (
      <Navigator
        initialRoute = {{ name: defaultName, component: defaultComponent }}
        configureScene = {(route) => {
          return Navigator.SceneConfigs.FadeAndroid;
        }}
        renderScene = {(route, navigator) => {
          let Component = route.component;
          if(route.component){
            return <Component navigator = {navigator} />
          }
        }} />
    );
  }
}


AppRegistry.registerComponent('jsq', () => jsq);
