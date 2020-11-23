// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const SecondPage = ({ navigation }) => {
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
              color:'blue',
              marginBottom: 230,
              fontSize: 18
            }}>
           Welcome To The Second Page...!!!
          </Text>
          {/* <Button
            title="Go to First Page"
            onPress={
              () => navigation.navigate('FirstPage')
            }
          />
          <Button
            title="Go to Third Page"
            onPress={
              () => navigation.navigate('ThirdPage')
            }
          /> */}
        </View>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            color: 'blue'
          }}>
           React Navigation Menu
        </Text>
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            color: 'blue'
          }}>
          Crafted With ♥ By Javeriya
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SecondPage;