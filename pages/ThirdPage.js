

import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const ThirdPage = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 230,
              color:'green',
              fontSize:18
            }}>
          Welcome To The Third Page...!!!
          </Text>
        
        </View>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            color: 'green'
          }}>
          React Navigation Menu
        </Text>
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            color: 'green'
          }}>
         Crafted With ♥ By Javeriya
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default ThirdPage;