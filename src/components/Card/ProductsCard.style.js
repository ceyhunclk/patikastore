import React from "react";
import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
container:{
    backgroundColor:"#eee",
    borderRadius:5,
    marginBottom:10,
width:(Dimensions.get("window").width/2)-10,
padding:10,
},
image:{
    height:Dimensions.get("window").height/4,
    borderRadius:5
},
title:{
    fontSize:18,
    fontWeight:"bold",
    color:"#000",
},
price:{
    fontSize:16,
    fontWeight:"600"
},
card_footer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
},
stok:{
   color:"red",
   alignItems:"center",
   fontSize:12
}



})