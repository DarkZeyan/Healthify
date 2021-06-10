import AsyncStorage from '@react-native-community/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert,TouchableOpacity} from 'react-native';
import { appStyle } from '../assets/styles/styleApp';

export default function Water() {
    const [waterCounter, setWaterCounter] = useState(0);
  
    const getWaterConsumed = (waterQuantity) =>{

        setWaterCounter(waterCounter+waterQuantity);
    }

    function waterAlerts(){
      if(waterCounter!=0){
        if(waterCounter<=3500 && waterCounter>=2000){
          Alert.alert('!Bien hecho!','Estas tomando la cantidad de agua apropiada, mantenlo así',['OK']);
        }else if(waterCounter<2000){
          Alert.alert('Cuidado','Estas tomando menos agua de la necesaria, procura beber más',['OK']);
        }else{
          Alert.alert('Cuidado','Estas tomando mas agua de la necesaria, procura reducir tu consumo.',['OK']);
        }
      }
    }

  return (

    <View style={appStyle.main}>
        <View style={appStyle.headerContainer}>
          <Image
          style={appStyle.headerImg}
          source={require('../assets/img/drops.png')}/>
          <Text style={appStyle.headerText}>Registro de agua</Text>
        </View>

        <View style={[appStyle.resultCtr,{marginTop:60}]}>
          <Text style={{ color: '#069689', fontWeight: 'bold', fontSize: 18 }}>Cantidad de agua:</Text>
          <TouchableOpacity onPress={()=>{waterAlerts()}}>
            <Text style={appStyle.resultTextC}>{waterCounter}</Text>
          </TouchableOpacity>
        </View>

        <View style={appStyle.circlesCtr}>

          <View style={appStyle.circleCtr}>
            <TouchableOpacity 
            onPress={()=>{getWaterConsumed(125)}}
            style={appStyle.circleElement1}>  
              <Image
              style={appStyle.waterImg}
              source={require('../assets/img/125ml.png')}/>
              <Text style={appStyle.waterTxt}>125 ml</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            onPress={()=>{getWaterConsumed(250)}}
            style={appStyle.circleElement2}>
              <Image
              style={appStyle.waterImg}
              source={require('../assets/img/250ml.png')}/>
              <Text style={appStyle.waterTxt}>250 ml</Text>
            </TouchableOpacity>
          </View>

          <View style={appStyle.circleCtr}>
            <TouchableOpacity 
            onPress={()=>{getWaterConsumed(350)}}
            style={appStyle.circleElement2}>
              <Image
              style={appStyle.waterImg}
              source={require('../assets/img/350ml.png')}/>
              <Text style={appStyle.waterTxt}>350 ml</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>{getWaterConsumed(500)}}
            style={appStyle.circleElement1}>
              <Image
              style={appStyle.waterImg}
              source={require('../assets/img/500ml.png')}/>
              <Text style={appStyle.waterTxt}>500 ml</Text>
            </TouchableOpacity>
          </View>

        </View>

      
    </View>
    

  );
}