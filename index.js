import React from 'react';
import { AppRegistry, Text } from 'react-native';
import Header from '@components/Header';

const App = () => (
  <Header headerText={"Albums!"} />
);

AppRegistry.registerComponent('albums', () => App);
