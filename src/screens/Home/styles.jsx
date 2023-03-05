import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    image:{
        width:width,
        height:450,
        resizeMode:'cover',
        justifyContent:'center',
    },
    title:{
        width:'70%',
        fontSize:80,
        fontWeight:'bold',
        color:'#CCC',
        marginLeft:25,

    },
    button:{
        backgroundColor:'#f3f3f3',
        borderRadius:10,
        marginLeft:25,
        justifyContent:'center',
        alignItems:'center',
        width:200,
        height:40,

    },
    buttonText:{
        color:'#282828',
        fontSize:16,

    },
    Searchbutton:{
        backgroundColor:'#f3f3f3',
        borderRadius:30,
        width:width-20,
        marginHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        height:60,
        position:'absolute',
        top:50,
        zIndex:100,

    },
    SearchbuttonText:{
        color:'#f15454',
        fontSize:16,

    },
})



export default styles;
