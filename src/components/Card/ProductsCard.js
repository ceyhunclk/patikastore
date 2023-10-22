import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./ProductsCard.style";
const ProductsCard=({product})=>{

return (
<View style={styles.container}>
<Image style={styles.image} source={{uri: product.imgURL}}/>
    <Text style={styles.title}>{product.title}</Text>
    <View style={styles.card_footer}>
       <Text style={styles.price}>{product.price}</Text> 
       <Text style={styles.stok}>{product.inStock?"":"Stokta Yok"}</Text> 
    </View>
    

</View>

)



}
export default ProductsCard;