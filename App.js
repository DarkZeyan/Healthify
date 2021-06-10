import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Register from './components/register';
import imcGUI from  './components/imc';
import RegCalWat from './components/regCalWat';
import Food from './components/food';
import Water from './components/water';
import Cal from './components/cal';
import Training from './components/training';
import SplashScreen from 'react-native-splash-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const StackRoutes = createStackNavigator();
const BottomTabNav = createBottomTabNavigator();

function TabRoutes(){

  return(
    <BottomTabNav.Navigator 

    screenOptions={({route})=>({

      tabBarIcon:()=>{
        let icon;

        if(route.name==='imcGUI'){
          icon = <FontAwesome5 name={'weight'} color={'#069689'} size={32}/>;
        }else if(route.name==='RegCalWater'){
          icon = <FontAwesome5 name={'clipboard-list'} color={'#069689'} size={32}/>
        }else if(route.name==='Food'){
          icon = <MaterialCommunityIcons name={'food-apple'} color={'#069689'} size={32}/>
        }else{
          icon = <FontAwesome5 name={'dumbbell'} color={'#069689'} size={24}/>
        }
        return icon;
      },

    })}
    tabBarOptions={
      {
        activeTintColor:'#069689',
        inactiveBackgroundColor:'#f6f0f0',
        showLabel:false
      }
    }

    initialRouteName="imcGUI" backBehavior="initialRoute">
      <BottomTabNav.Screen name="imcGUI" component={imcGUI}/>
      <BottomTabNav.Screen name="RegCalWater" component={RegCalWat}/>
      <BottomTabNav.Screen name="Food" component={Food}/>
      <BottomTabNav.Screen name="Training" component={Training}/>
    </BottomTabNav.Navigator>
  )
}
export default function App(){
    useEffect(()=>{
      SplashScreen.hide();
    });
  return(
    <NavigationContainer  detachInactiveScreens>
      <StackRoutes.Navigator headerMode="none" backBehavior="none">
        <StackRoutes.Screen name="Register" component={Register}/>
        <StackRoutes.Screen name="imcGUI" component={TabRoutes}/>
        <StackRoutes.Screen name="Cal" component={Cal}/>
        <StackRoutes.Screen name="Water" component={Water}/>
        
      </StackRoutes.Navigator>
    </NavigationContainer>
  );
}