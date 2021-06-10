import AsyncStorage from '@react-native-community/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { appStyle } from '../assets/styles/styleApp';

export default function Cal() {
  // States para manipular la informacion
  const [bfCal, setBfCal] = useState(0);
  const [snack1Cal, setSnack1Cal] = useState(0);
  const [brunchCal, setBrunchCal] = useState(0);
  const [snack2Cal, setSnack2Cal] = useState(0);
  const [dinnerCal, setDinnerCal] = useState(0);
  const [gender, setGender] = useState('');

 

  // Traemos el dato del genero
  useEffect(() => {
    async function getData() {
      try {
        setGender(await AsyncStorage.getItem('Gender', gender));
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])

  function getCalories() {
    
    var a = parseInt(snack1Cal);
    var b = parseInt(brunchCal);
    var c = parseInt(bfCal);
    var d = parseInt(snack2Cal);
    var e = parseInt(dinnerCal);

    var calorias = (a+b+c+d+e);
    return calorias;
  }

  function alertsCalories(calorias){
    
    if (gender != null || gender != undefined) {
      if (calorias != 0) {
        if (gender === "M") {
          if (calorias > 2500) {
            Alert.alert('Advertencia', 'Estas consumiendo más calorías de las necesarias, debes tener cuidado o comenzarás a tener problemas de salud.', ['OK']);
          } else if (calorias < 2000) {
            Alert.alert('Advertencia', 'Estas consumiendo menos calorías de las necesarias, debes tener cuidado o comenzarás a tener problemas de salud.', ['OK']);
          }
        }else{
          if (calorias > 2000) {
            Alert.alert('Advertencia', 'Estas consumiendo más calorías de las necesarias, debes tener cuidado o comenzarás a tener problemas de salud.', ['OK']);
          } else if (calorias < 1600) {
            Alert.alert('Advertencia', 'Estas consumiendo menos calorías de las necesarias, debes tener cuidado o comenzarás a tener problemas de salud.', ['OK']);
          }
        }
      }
    }
  }

  return (

    <ScrollView style={appStyle.main}>

      <View style={appStyle.headerContainer}>
        <Image
          style={appStyle.headerImg}
          source={require('../assets/img/calicon.png')} />
        <Text style={appStyle.headerText}>Registro de calorías</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'space-between', marginTop: 50 }}>
        <View style={appStyle.tablesCtr}>

          <View style={appStyle.table}>
            <View style={appStyle.tableTitleCtr}>
              <Text style={appStyle.tableTitle}>Desayuno</Text>
            </View>
            <View style={appStyle.tableRows}>
              <View style={appStyle.rowsTxtCtr}>
                <Text style={appStyle.rowsText}>Total de calorías</Text>
              </View>
              <View style={appStyle.rowsTxtICtr}>
                <View style={appStyle.bolitaQlera}>
                  <TextInput
                    maxLength={4}
                    style={appStyle.rowsTextI}
                    placeholder='Cal'
                    keyboardType='numeric'
                    placeholderTextColor='white'
                    onChangeText={(number) => setBfCal(number)}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={appStyle.table}>
            <View style={appStyle.tableTitleCtr}>
              <Text style={appStyle.tableTitle}>Snack</Text>
            </View>
            <View style={appStyle.tableRows}>
              <View style={appStyle.rowsTxtCtr}>
                <Text style={appStyle.rowsText}>Total de calorías</Text>
              </View>
              <View style={appStyle.rowsTxtICtr}>
                <View style={appStyle.bolitaQlera}>
                  <TextInput
                    maxLength={4}
                    style={appStyle.rowsTextI}
                    placeholder='Cal'
                    keyboardType='numeric'
                    placeholderTextColor='white'
                    onChangeText={(number) => setSnack1Cal(number)} />
                </View>
              </View>
            </View>
          </View>

          <View style={appStyle.table}>
            <View style={appStyle.tableTitleCtr}>
              <Text style={appStyle.tableTitle}>Comida</Text>
            </View>
            <View style={appStyle.tableRows}>
              <View style={appStyle.rowsTxtCtr}>
                <Text style={appStyle.rowsText}>Total de calorías</Text>
              </View>

              <View style={appStyle.rowsTxtICtr}>
                <View style={appStyle.bolitaQlera}>
                  <TextInput
                    maxLength={4}
                    style={appStyle.rowsTextI}
                    placeholder='Cal'
                    keyboardType='numeric'
                    placeholderTextColor='white'
                    onChangeText={(number) => setBrunchCal(parseInt(number))} />
                </View>
              </View>
            </View>
          </View>

          <View style={appStyle.table}>
            <View style={appStyle.tableTitleCtr}>
              <Text style={appStyle.tableTitle}>Snack</Text>
            </View>
            <View style={appStyle.tableRows}>
              <View style={appStyle.rowsTxtCtr}>
                <Text style={appStyle.rowsText}>Total de calorías</Text>
              </View>
              <View style={appStyle.rowsTxtICtr}>
                <View style={appStyle.bolitaQlera}>
                  <TextInput
                    maxLength={4}
                    style={appStyle.rowsTextI}
                    placeholder='Cal'
                    keyboardType='numeric'
                    placeholderTextColor='white'
                    onChangeText={(number) => setSnack2Cal(number)} />
                </View>
              </View>
            </View>
          </View>

          <View style={appStyle.table}>
            <View style={appStyle.tableTitleCtr}>
              <Text style={appStyle.tableTitle}>Cena</Text>
            </View>
            <View style={appStyle.tableRows}>
              <View style={appStyle.rowsTxtCtr}>
                <Text style={appStyle.rowsText}>Total de calorías</Text>
              </View>
              <View style={appStyle.rowsTxtICtr}>
                <View style={appStyle.bolitaQlera}>
                  <TextInput
                    maxLength={4}
                    style={appStyle.rowsTextI}
                    placeholder='Cal'
                    keyboardType='numeric'
                    placeholderTextColor='white'
                    onChangeText={(number) => setDinnerCal(number)} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={appStyle.resultCtr}>
          <Text style={{ color: '#069689', fontWeight: 'bold', fontSize: 18, textAlign:'center'}}>Calorías consumidas:</Text>
          <TouchableOpacity onPress={()=>{alertsCalories(getCalories())}}>
          <Text style={appStyle.resultTextC}>{getCalories()}</Text>
          </TouchableOpacity>
        </View>
      </View>



    </ScrollView>


  );
}