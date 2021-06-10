import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, ScrollView } from 'react-native';
import { appStyle } from '../assets/styles/styleApp';

export default function Training() {

  return (

    <ScrollView style={appStyle.main}>
        <View style={appStyle.headerContainer}>
            <Image
            style={appStyle.headerImg}
            source={require('../assets/img/dumbbell.png')}/>
            <Text style={appStyle.headerText}>Ejercicios en casa</Text>
        </View>

        <View style={appStyle.foodCtr}>
         
         <View style={appStyle.regFood}>
          <Text style={[appStyle.textRegFood,{marginTop:20}]}>Abdomen</Text>
          <ScrollView horizontal>
            <View style={appStyle.foodImages}>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/abdomen/bcrunch.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/abdomen/deadbug.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/abdomen/girosrusos.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/abdomen/plancha.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/abdomen/planchaflex.png')}/>

            </View>
          </ScrollView>
         </View>

         <View style={appStyle.regFood}>
          <Text style={appStyle.textRegFood}>Pierna</Text>
          <ScrollView horizontal>
            <View style={appStyle.foodImages}>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/pierna/pataBurr.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/pierna/sentadillas.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/pierna/sentaSalto.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/pierna/zancadas.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/pierna/zancaLa.png')}/>
  
            </View>
          </ScrollView>
         </View>

         <View style={appStyle.regFood}>
          <Text style={appStyle.textRegFood}>Glúteos</Text>
          <ScrollView horizontal>
            <View style={appStyle.foodImages}>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/gluteo/gato.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/gluteo/gluteom.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/gluteo/sentadillas.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/gluteo/step.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/training/gluteo/triangulos.png')}/>
  
            </View>
          </ScrollView>
         </View>

        </View>
      
    </ScrollView>
    

  );
}