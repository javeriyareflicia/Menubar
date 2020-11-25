
import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
 
  const toggleDrawer = () => {
   
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
       
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />


      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'First Page', 
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: 'black', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
      </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: 'blue', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', 
          
        }}/>
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', 
        }}/>
    </Stack.Navigator>
  );
}


function thirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ThirdPage"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: 'green', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', 
          
        }}/>
      <Stack.Screen
        name="FirstPage"
        component={ThirdPage}
        options={{
          title: 'First Page', 
        }}/>
    </Stack.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: 'black',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'First page' }}
          component={firstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second page' }}
          component={secondScreenStack} />
          <Drawer.Screen
          name="ThirdPage"
          options={{ drawerLabel: 'Third page' }}
          component={thirdScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;