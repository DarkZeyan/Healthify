import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert,TouchableOpacity } from 'react-native';
import { appStyle } from '../assets/styles/styleApp';

export default function RegCalWat(props) {


    



  return (

    <View style={appStyle.main}>
        <View style={appStyle.headerContainer}>
            <Image
            style={[appStyle.headerImg,{marginLeft:110}]}
            source={require('../assets/img/dietplan.png')}/>
            <Text style={[appStyle.headerText,{marginRight:140}]}>Registro</Text>
        </View>

        <View style={appStyle.stackButtonsCtr}>
            <View style={appStyle.stackButtons}>
                <TouchableOpacity 
                style={appStyle.regButtonScreen}
                onPress={()=>{props.navigation.navigate('Cal')}}>
                  <Image source={require('../assets/img/calbutton.png')} style={appStyle.regButtonImg} 
                  />
                  <Text style={appStyle.buttonText}>Registro de calorías</Text>  
                </TouchableOpacity>
            </View>
            <View style={appStyle.stackButtons}>
            <TouchableOpacity style={appStyle.regButtonScreen}
             onPress={()=>{props.navigation.navigate('Water')}}>
                <Image source={require('../assets/img/waterbutton.png')} style={appStyle.regButtonImg} 
                  />
                <Text style={appStyle.buttonText}>Registro de agua</Text>  
            </TouchableOpacity>
        </View>
        </View>
    </View>
    

  );
}