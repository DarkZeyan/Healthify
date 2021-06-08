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
    imcMain:{
        backgroundColor:'#f6f0f0',
        flex:1
    },
    headerContainer:{
        backgroundColor:"#58f1b1",
        flex:1,
        flexDirection:'row',
        height:400,
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
        fontSize:96,
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
    imcImg:{
        height:60,
        width:60,
        alignSelf:'center',
        marginLeft:20
    }



});

export {appStyle};
