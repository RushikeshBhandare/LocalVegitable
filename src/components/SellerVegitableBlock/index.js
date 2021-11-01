import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, } from "react-native";
import { Delete } from "../../assets/Images";

const SellerVegitableBlock = ({vegitableName, sellerName, image, price, onPress}) =>{
    return(
        <View
            style={styles.rootContainer}
        >
            <View 
                onPress={onPress}
                style={styles.innerContainer}
            >   
             {/* delete Button  */}
                <TouchableOpacity style={styles.deleteButton}>
                        <Image
                            style={styles.deleteImage}
                            source={Delete}
                        />
                </TouchableOpacity>
                
                {/* Image */}
                <Image
                    style={styles.image}
                    source={image}
                />
                <View style={styles.TextContainer}>
                    <Text style={styles.name}>
                        {vegitableName}
                    </Text>

                    <Text style={styles.text}>
                        Price : {price} Rs-Kg
                    </Text>

                    <Text style={styles.text}>
                        {sellerName}
                    </Text>
                </View>

               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        width: '100%',
        // borderWidth: 1,
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    innerContainer:{
        height: 80,
        borderWidth: 1,
        // borderColor: 'red',
        // margin: 10
        width: '90%',
        borderRadius: 10,
        flexDirection: 'row',
        position: 'relative'
    },
    image:{
        flex: 1,
        height: 78,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    TextContainer:{
        flex: 1
    },
    name:{
        fontWeight: 'bold',
        color : 'black',
        fontSize: 16,
        marginLeft: 10,

    },
    text:{
        marginLeft: 10,
        marginTop: 5
    },
    deleteButton:{
        width: 30,
        height: 30,
        position: 'absolute',
        right: 5,
        top: 5
    },
    deleteImage:{
        width: 30,
        height: 30
    }
    
})         

export default SellerVegitableBlock