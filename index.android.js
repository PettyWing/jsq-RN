/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
var MyOrder = require('./js/AllOrders');

class jsq extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <MyOrder/>
    );
  }
}


AppRegistry.registerComponent('jsq', () => jsq);
