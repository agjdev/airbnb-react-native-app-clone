import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        margin:20,
        justifyContent:'flex-start',
        

    },
    image:{
        width:'100%',
        aspectRatio:3/2,
        resizeMode:'cover',
        borderRadius:10,
    },
    bedrooms:{
        color:'#5b5b5b',
        marginVertical:10,
    },
    desc:{
        fontSize:18,
        color:'#000',
        lineHeight:26,
    },
    prices:{
        marginVertical:5,
    },
    oldprice:{
        color:'#5b5b5b',
        fontSize:18,
        textDecorationLine:'line-through',
    },
    newprice:{
        fontWeight:'bold',
        color:'#000',
        fontSize:18,
    },
    totalprice:{
        color:'#5b5b5b',
        fontWeight:'bold',
        fontSize:18,
        marginVertical:5,
        textDecorationLine:'underline',
    }
})



export default styles;