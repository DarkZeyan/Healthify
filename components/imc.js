import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { appStyle } from '../assets/styles/styleApp';
import AsyncStorage from '@react-native-community/async-storage';


export default function imcGUI() {
  const [name, setName] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  // import de los datos desde la pestaña de registro
  useEffect(() => {
    async function getData() {
      try {
        setName(await AsyncStorage.getItem('Name', name));
        setHeight(await AsyncStorage.getItem('Height', height));
        setWeight(await AsyncStorage.getItem('Weight', weight));
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  
  // Transformar a enteros la altura y el peso para calcular el imc
  parseInt(height);
  parseInt(weight);
  // Obtener el imc
   function getIMC() {
      
      const imc = weight / (Math.pow(height, 2));
      if(height!=0 && weight!=0){
      if(imc>=30){
        Alert.alert('Advertencia',`Hola ${name}.\nTienes obesidad. Tienes que bajar de peso o sufriras problemas de salud.`,['OK']);
      }else if(imc>25){
        Alert.alert('Advertencia',`Hola ${name}.\nTienes sobrepeso, procura consumir menos calorías`,['OK']);
      }else if(imc>18.5){
        Alert.alert('¡Felicidades!',`Hola ${name}.\nTu IMC es el correcto`,['OK']);
      }else{
        Alert.alert('Advertencia',`Hola ${name} Tu IMC es muy bajo.\nTienes que subir de peso`,['OK']);
      }
    }
      return imc.toFixed(1);
    
   
  }

  return (

    <View style={appStyle.main}>
      <View style={appStyle.headerContainer}>
        <Image
        style={appStyle.headerImg}
        source={require('../assets/img/bmi.png')}/>
        <Text style={appStyle.headerText}>Índice de masa corporal</Text>
      </View>

      <View style={appStyle.imcTextContainer}>
        <Text style={appStyle.imc}>{getIMC()}</Text>
      </View>
      <View style={appStyle.statsContainer}>
        <View style={appStyle.statsElements}>
          <View style={{ backgroundColor: "#5271ff", width: 20, height: 20 }}></View>
         
            <Text style={{marginLeft:10}}>Bajo</Text>
    
          <Text style={{marginRight:25,fontWeight:'bold',fontSize:14}}>{`<18.5`}</Text>
        </View>
        <View style={appStyle.statsElements}>
          <View style={{ backgroundColor: "#58f1b1", width: 20, height: 20 }}></View>
         
            <Text style={{ marginLeft:20 }}>Normal</Text>
          
          <Text style={appStyle.textImcValues}>18.5 - 24.9</Text>
        </View>
        <View style={appStyle.statsElements}>
          <View style={{ backgroundColor: "#ffbd59", width: 20, height: 20 }}></View>
          
            <Text style={{ marginLeft:20}}>Sobrepeso</Text>
        
          <Text style={appStyle.textImcValues}>25 - 29.9</Text>
        </View>
        <View style={appStyle.statsElements}>
          <View style={{ backgroundColor: "#ff1616", width: 20, height: 20 }}></View>
      
            <Text style={{marginLeft:10}}>Obesidad</Text>
       
          <Text style={{marginRight:30,fontWeight:'bold',fontSize:14}}>{`30>`}</Text>
        </View>
      </View>
    </View>
    

  );
}