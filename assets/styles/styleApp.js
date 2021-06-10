import {StyleSheet,Platform} from 'react-native'

const appStyle = StyleSheet.create({

    // Register 
    container:{
        flex:1,
        backgroundColor:'#58f1b1',
    },
    iconUserContainer:{
        width:100,
        height:100,
        backgroundColor:'#069689',
        borderWidth:1,
        borderColor:'transparent',
        borderRadius:100,
        alignSelf:'center',
        justifyContent:'center',
        marginTop:50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    userImg:{
        width:72,
        height:72,
        alignSelf:'center',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

    },
    inputContainer:{
        margin:40,
        backgroundColor:'#FFFFFF',
        height:500,
        borderRadius:20,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    elements:{
        flex:2,
        margin:20,
        flexDirection:'row'
    },
    icons:{
        width:42,
        height:42
    },
    regTxtInput:{
        backgroundColor:'#d9d9d9',
        justifyContent:'center',
        marginLeft:20,
        width:200,
        color:'#323232',
        height:40
    },
    regButton:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#069689',
        borderWidth:1,
        borderRadius:20,
        width:110,
        height:45,
        margin:10
    },
    regBtnText:{
        color:'white',
        fontFamily:Platform.OS === 'ios' ? 'AppleSDGothicNeo-Bold' : 'Roboto',
        fontSize:18,
        textAlign:'center'
    },

    // IMC
    main:{
        backgroundColor:'#f6f0f0',
        flex:1
    },
    headerContainer:{
        backgroundColor:"#04cc78",
        flexDirection:'row',
        height:90,
        alignItems:'center',
        justifyContent:'space-between',
    },
    headerText:{
        color:'white',
        fontFamily:Platform.OS === 'ios' ? 'AppleSDGothicNeo-Bold' : 'Roboto',
        fontSize:25,
        alignSelf:'center',
        marginRight:20
    },
    imcTextContainer:{
        marginTop:20,
        flex:3
    },
    imc:{
        color:'black',
        fontFamily:Platform.OS === 'ios' ? 'AppleSDGothicNeo-Bold' : 'Roboto',
        fontSize:108,
        alignSelf:'center',
        justifyContent:'center',
        fontWeight:"800"
    },
    statsContainer:{
        flex:4,
        flexDirection:'column',
        borderRadius:30,
        backgroundColor:'white',
        margin:20,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    statsElements:{
        flex:3,
        justifyContent:'space-between',
        flexDirection:'row',
        margin:20,
        
    },
    textImcValues:{
        fontWeight:"bold",
        fontSize:14
    },
    headerImg:{
        height:60,
        width:60,
        alignSelf:'center',
        marginLeft:20
    },


    
    // regCalWat
    stackButtonsCtr:{
        flex:2,
        margin:40,
        height:800  
    },

    stackButtons:{
        flex:2,
        borderWidth:1,
        borderColor:'transparent',
        borderRadius:10,
        backgroundColor:'#93e4c2',
        justifyContent:'center',
        marginBottom:30,

    },
    regButtonImg:{
        width:170,
        height:170,
        alignSelf:'center'
        
    },
    buttonText:{
        fontSize:24,
        fontFamily:Platform.OS === 'ios' ? 'AppleSDGothicNeo-Bold' : 'Roboto',
        color:'white',
        alignSelf:'center',
        textAlign:'center',
        textShadowColor:'black',
        textShadowOffset:{wdith: 0, height:2},
        textShadowRadius:2,
    },



    //Cal
    tablesCtr:{
        alignItems:'center'
    },
    table:{
        margin:20,
        height:100,
        width:300,
        borderColor:'#069689',
        borderTopWidth:2,
        borderBottomWidth:2,
        borderRadius:10,
    },
    tableTitleCtr:{
        backgroundColor:'#069689',
        borderTopEndRadius:5,
        borderTopStartRadius:5,
        alignItems:'center',
    },
    tableTitle:{
        fontFamily:Platform.OS === 'ios' ? 'AppleSDGothicNeo-Bold' : 'Roboto',
        color:'white',
        textAlign:'center',
        fontSize:20,
        height:30
    },
    rowsText:{
        color:'#069689',
        fontSize:15,
    },
    rowsTextI:{
        color:'white',
        fontSize:15,
    },
    tableRows:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'#069689',
        borderBottomEndRadius:5,
        borderBottomStartRadius:5,
        borderStartWidth:1,
        borderEndWidth:1,
        borderBottomWidth:2,
    },
    rowsTxtCtr:{
        flex:1,
        marginRight:20,
        marginLeft:20,
        justifyContent:'center',
        borderEndWidth:3,
        borderEndColor:'#069689',
        width:150,
        
    },
    rowsTxtICtr:{
        flex:1,
        marginRight:20,
        marginLeft:20,
        justifyContent:'center',
        width:150,

    },
    resultCtr:{
        height:90,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    bolitaQlera:{
        backgroundColor:'#069689',
        borderRadius:80,
        width:60,
        alignItems:'center'
    },
    resultTextC:{
        backgroundColor:'#93e4c2',
        borderRadius:10,
        marginBottom:20,
        width:120,
        height:40,
        marginRight:20,
        alignSelf:'center',
        textAlignVertical:'center',
        textAlign:'center'

    },

    // water

    circlesCtr:{
        flex:1,
        marginBottom:70,
        height:700
    },
    circleCtr:{
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:60
    },
    circleElement1:{
      
        height:150,
        width:150,
        justifyContent:'center',
        backgroundColor:'#93e4c2',
        borderRadius:120,
        margin:20   
    },
    circleElement2:{
        height:150,
        width:150,
        justifyContent:'center',
        backgroundColor:'#266671',
        borderRadius:260,
        margin:20
    },
    waterImg:{
        height:80,
        width:80,
        alignSelf:'center'
    },
    waterTxt:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },

    // food

    foodCtr:{
        flex:4,
    },
    regFood:{
        
    },
    textRegFood:{
        fontFamily:Platform.OS === 'ios' ? 'AppleSDGothicNeo-Bold' : 'Roboto',
        fontSize:22,
        marginLeft:20,
        fontWeight:'bold'
    },
    foodImages:{
        flexDirection:'row',
        height:200,
        justifyContent:'space-between',
        margin:20
    },
    foodImg:{
        height:160,
        width:180,
        resizeMode:'cover',
        alignSelf:'center',
        marginRight:10,
        borderWidth:2,
        borderRadius:10
        
    }


});

export {appStyle};
