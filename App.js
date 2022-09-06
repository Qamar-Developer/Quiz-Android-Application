import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Home from './screens/home'
import Quiz from './screens/quiz'
import Result from './screens/result'
import MyStack from './navigation/index';
import { NavigationContainer } from '@react-navigation/native';


const App =()=> {
  return (

   <NavigationContainer>
      <MyStack/>
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },

});

export default App;