
import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  Modal,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
  ImageBackground,
  
 
 


} from 'react-native';


const image = { uri: "https://image.shutterstock.com/image-photo/bokeh-lights-background-design-element-260nw-1668073321.jpg" };
  
const FirstPage = ({ navigation }) => {
  const [modalVisible, setModalVisible, onLoginClick] = useState(false);
  return (
    <ScrollView>



       <View style={styles.centeredView}>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please Enter The Details And login...!!!</Text>
            <TextInput 
          placeholder="Email" />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
       <Button
        title="Submit"
        color="black"
       
        onPress={() => Alert.alert('Login Successfull....!!!')}
      />
    

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "black",marginTop:20 }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
             
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Login</Text>
      </TouchableHighlight>
      </View>



      <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>This Is Background Image...!!!</Text>
    </ImageBackground>
  </View>

 

    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
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
              color:'black',
              fontSize: 18,
              marginTop: 10
              

            }}>
            Welcome To The First Page...!!!
          </Text>
          <Text style={{color: 'blue',fontSize: 16,marginBottom: 23}}
      onPress={() => Linking.openURL('http://google.com')}>
  Google
</Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              color:'black',
              fontSize: 20,
              marginBottom:20
              

            }}>
          Direct URL Image :
          </Text>
        
          <Image  style={{ marginTop: 20 }}
          source={{
            uri: 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
          }}
          style={{ width: 300, height: 300 }}
        />

         <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              color:'black',
              fontSize: 18,
              marginTop:20,
              marginBottom:15

            }}>
           Explicite Image :
          </Text>
      <Image source={require('../assets/pic.png')}  style={{ width: 300, height: 300, marginBottom:25 }}/>

      <ScrollView>
      <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              color:'black',
              fontSize: 20,
              marginBottom:20

            }}>
          Scrollable Paragraph :
          </Text>
 <ScrollView horizontal={true}>

<Text  style={{
              height:280,
              textAlign: 'justify',
              color:'black',
              width:1000

          
             

            }}>Welcome to the very start of your React Native journey!
   If you're looking for environment setup instructions, they've moved to their own section. Continue reading for an introduction to the documentation, Native Components, React, and more! Welcome to the very start of your React Native journey! If you're looking for environment setup instructions, they've moved to their own section. Continue reading for an introduction to the documentation, Native Components, React, and more!. Welcome to the very start of your React Native journey! If you're looking for environment setup instructions, they've moved to their own section. Continue reading for an introduction to the documentation, Native Components, React, and more!, Welcome to the very start of your React Native journey! If you're looking for environment setup instructions, they've moved to their own section. Continue reading for an introduction to the documentation, Native Components, React, and more!,Welcome to the very start of your React Native journey! If you're looking for environment setup instructions, they've moved to their own section. Continue reading for an introduction to the documentation, Native Components, React, and more!, Welcome to the very start of your React Native journey! If you're looking for environment setup instructions, they've moved to their own section. Continue reading for an introduction to the documentation, Native Components, React, and more!, Welcome to the very start of your React Native journey! If you're looking for environment setup instructions, they've moved to their own section. Continue reading for an introduction to the documentation, Native Components, React, and more!</Text>


</ScrollView>
</ScrollView>
          
          {/* <Button
            onPress={
              () => navigation.navigate('SecondPage')
            }
            title="Go to Second Page"
          />
          <Button
            onPress={
              () => navigation.navigate('ThirdPage')
            }
            title="Go to Third Page"
          /> */}
        </View>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            color: 'black',
        
          }}>
           React Navigation Menu
        </Text>
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            color: 'black'
          }}>
         Crafted With ♥ By Javeriya
        </Text>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "black",
    // borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 400,
    marginTop:20
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});


export default FirstPage;