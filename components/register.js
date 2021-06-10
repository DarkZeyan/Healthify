import React, {useState,useEffect} from 'react';
import {View,Text,TouchableOpacity, Image,TextInput,Alert} from 'react-native';
import {Picker} from '@react-native-community/picker';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-community/async-storage';
import {appStyle} from '../assets/styles/styleApp';

export default function Register(props){
    
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [name, setName] = useState('');
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    
        

        // Enviar los datos a la siguiente pantalla
    const setData = async() =>{
        try {
            await AsyncStorage.setItem('Name',name);
            await AsyncStorage.setItem('Height',height);
            await AsyncStorage.setItem('Weight',weight);
            await AsyncStorage.setItem('Gender', gender);
            props.navigation.navigate('imcGUI');
        } catch (error) {
            console.log(error);
        }
    }   

    // obtener el valor de la edad
    let age = getAge(birthDate);
    // Calcular la edad

    function getAge(birthDate){
        let getActualYear = new Date().getFullYear();
        let getBirthYear = new Date(birthDate).getFullYear();
        a = parseInt(getActualYear) - parseInt(getBirthYear);
        // console.log(a);
        return a;
    }
    // Evaluar la entrada a la siguiente pantalla
    function evaluateAge(){
        if (parseInt(age)==0 || name==null || height==0  || weight==0 || gender==null || !birthDate || !name || !gender){
            Alert.alert("Faltan datos","Por favor rellene los datos restantes.", ['OK']);
           
        }else if(parseInt(age)<15 ){
            Alert.alert("Error","Eres menor de 15 años, no puedes usar la aplicación", ['OK']);
        
        }
        else if(parseInt(age)>=15){
            setData();
        }
    }

    
    return(

            // Aplicacion
    <View style={appStyle.container}>
        <View style={appStyle.iconUserContainer}>
            <Image
            style={appStyle.userImg}
            source={require('../assets/img/user.png')}/>
        </View>
        
        {/* Contenedor de los datos */}
        <View style={appStyle.inputContainer}>
            
            {/* Nombre usuario*/}
            <View style={appStyle.elements}>
                <Image
                style={appStyle.icons}
                source={require('../assets/img/name.png')}
                />
                <TextInput 
                autoCapitalize='words'
                textContentType='name'
                onChangeText={name => setName(name)}
                style={appStyle.regTxtInput}
                placeholder="Nombre de usuario"
                placeholderTextColor='#323232'
                />
            </View>

             {/* Genero*/}
            <View style={appStyle.elements}>
                <Image
                style={appStyle.icons}
                source={require('../assets/img/gender.png')}
                />  
                <Picker
                style={{fontSize:10}}
                selectedValue={gender}
                onValueChange={(gender)=>setGender(gender)}
                style={appStyle.regTxtInput}>
                    <Picker.Item value="" label="Sexo"/>
                    <Picker.Item value="M" label="Masculino" />
                    <Picker.Item value="F" label="Femenino"/>
                  
                </Picker>
            </View>
            
  
            
            {/* Fecha de nacimiento */}
            <View style={appStyle.elements}>
                <Image
                style={appStyle.icons}
                source={require('../assets/img/birthdate.png')}
                /> 
                <DatePicker
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                showIcon={false}
                placeholder={birthDate ? birthDate : "Fecha de nacimiento"}
                style={appStyle.regTxtInput}
                customStyles={{
                    placeholderText:{
                        color:'#323232',
                        alignSelf:'flex-start',
                        justifyContent:'flex-start',
                        alignItems:'flex-start',
                        marginLeft:4
                    }
                }}
                
                format='YYYY-MM-DD'
                minDate='1930-01-01'
                maxDate={new Date()}
                onDateChange={(birthDate)=>setBirthDate(birthDate)}
                />
                    
            </View>

             {/* Estatura*/}
            <View style={appStyle.elements}>
                <Image
                style={appStyle.icons}
                source={require('../assets/img/height.png')}
                />
                <TextInput
                style={appStyle.regTxtInput}
                placeholder="Estatura"
                placeholderTextColor='#323232'
                keyboardType='numeric'
                onChangeText={height =>setHeight(height)}
                />
            </View>

             {/* Peso*/}
            <View style={appStyle.elements}>
                <Image
                style={appStyle.icons}
                source={require('../assets/img/weighing.png')}
                />
                <TextInput
                style={appStyle.regTxtInput}
                placeholder="Peso"
                placeholderTextColor='#323232'
                keyboardType='numeric'
                onChangeText={weight =>setWeight(weight)}
                />
              
            </View> 
            <View style={appStyle.elements,{flexDirection:'column'}}>
                <TouchableOpacity style={appStyle.regButton}
                    onPress={()=>{evaluateAge()}}
                >
                    <Text style={appStyle.regBtnText}>Acceder</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
} 
