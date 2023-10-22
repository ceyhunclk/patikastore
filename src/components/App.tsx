import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import dataStore from "./PatikaStore_data.json";
import ProductsCard from "./Card/ProductsCard";

const App=()=>{
return (
<SafeAreaView  style={style.anakutu}>
  <Text style={style.header}>PATIKASTORE</Text>
  <TextInput placeholder="Ara..." style={style.textInput}></TextInput>
  <FlatList columnWrapperStyle={{justifyContent: 'space-between'}}  numColumns={2} data={dataStore} renderItem={({item})=>(
<ProductsCard product={item} />
  )} >

  </FlatList>
</SafeAreaView>
)


}

const style=StyleSheet.create({
anakutu:{
  flex:1,
  padding:5,
  margin:5
  
},
header:{
  fontSize:33,
  fontWeight:"bold",
  color:"#800080"
},
textInput:{
 fontSize:22,
 padding:15,
 backgroundColor:"#eee",
 marginTop:10,
 marginBottom:10,
 borderRadius:10
}


})
export default App;