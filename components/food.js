import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, ScrollView } from 'react-native';
import { appStyle } from '../assets/styles/styleApp';

export default function Food() {

  return (

    <ScrollView style={appStyle.main}>
        <View style={appStyle.headerContainer}>
            <Image
            style={appStyle.headerImg}
            source={require('../assets/img/dinner.png')}/>
            <Text style={appStyle.headerText}>Platillos saludables</Text>
        </View>

        <View style={appStyle.foodCtr}>
         
         <View style={appStyle.regFood}>
          <Text style={[appStyle.textRegFood,{marginTop:20}]}>Desayuno</Text>
          <ScrollView horizontal>
            <View style={appStyle.foodImages}>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/breakfast/avena.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/breakfast/centeno.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/breakfast/espinacas.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/breakfast/tortilla.png')}/>      

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/breakfast/platano.png')}/>      

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/breakfast/yogur.png')}/>      

            </View>
          </ScrollView>
         </View>

         <View style={appStyle.regFood}>
          <Text style={appStyle.textRegFood}>Snack</Text>
          <ScrollView horizontal>
            <View style={appStyle.foodImages}>
              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/snacks/b.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/snacks/fruta.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/snacks/galletas.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/snacks/gelatina.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/snacks/palomitas.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/snacks/secos.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/snacks/yogur.png')}/>
  
            </View>
          </ScrollView>
         </View>

         <View style={appStyle.regFood}>
          <Text style={appStyle.textRegFood}>Comida</Text>
          <ScrollView horizontal>
            <View style={appStyle.foodImages}>
              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/brunch/brochetas.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/brunch/garbanzo.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/brunch/guisantes.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/brunch/lentejas.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/brunch/pescado.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/brunch/tallarines.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/brunch/tomate.png')}/>
  
            </View>
          </ScrollView>
         </View>

         <View style={appStyle.regFood}>
          <Text style={appStyle.textRegFood}>Cena</Text>
          <ScrollView horizontal>
            <View style={appStyle.foodImages}>
              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/dinner/arroz.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/dinner/esparragos.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/dinner/lasagna.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/dinner/pimiento.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/dinner/rollitos.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/dinner/salmon.png')}/>

              <Image
              style={appStyle.foodImg}
              source={require('../assets/img/food/dinner/zanahoria.png')}/>
  
            </View>
          </ScrollView>
         </View>

        </View>
      
    </ScrollView>
    

  );
}