import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        fontSize:18,
        justifyContent:'space-between',
        paddingVertical:20,
        marginHorizontal:20,
        borderBottomWidth:1,
        borderColor:'#DADADA',
        
    },
    button:{
     
        color:'#282828',
        borderWidth:1,
        width:30,
        border:'dotted',
        height:30,
        borderRadius:15,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
    },
})



export default styles;