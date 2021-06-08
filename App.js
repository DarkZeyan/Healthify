import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Register from './components/register';
import imcGUI from  './components/imc';

const StackRoutes = createStackNavigator();
const BottomTabNav = createBottomTabNavigator();

function TabRoutes(){

  return(
    <BottomTabNav.Navigator initialRouteName="imcGUI" backBehavior="none">
      <BottomTabNav.Screen name="imcGUI" component={imcGUI}/>
    </BottomTabNav.Navigator>
  )

}



export default function App(){
  return(
    <NavigationContainer  detachInactiveScreens>
      <StackRoutes.Navigator headerMode="none" backBehavior="none">
        <StackRoutes.Screen name="Register" component={Register}/>
        <StackRoutes.Screen name="imcGUI" component={TabRoutes}/>
      </StackRoutes.Navigator>
    </NavigationContainer>
  );
}