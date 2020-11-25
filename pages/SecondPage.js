

import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Linking,
  AppRegistry,
  ScrollView,
 
} from 'react-native';


import React from 'react';

import { Video } from 'expo-av';


const SecondPage = ({ navigation }) => {
 
  
 


  return (
    
    <ScrollView> 
   
     
       <View style={styles.container}>
       <View>
      <Text  style={{
             
              textAlign: 'center',
              color:'black',
              fontSize: 20,
              marginTop: 50,
              marginBottom:-50
              

            }}>Play This Vedio And Enjoy...!!!</Text>
    </View>
  <Video
  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
 
  useNativeControls
  style={{ width: 300, height: 300, marginTop:100 }}
/>


<Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            color: 'blue',
            marginTop:10
        
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
      </ScrollView>
     
        
       
       
     
      

   
   
   
    
  );
        }
       
      
       


export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    alignItems: 'center',
    justifyContent: 'center',
  },

 
});