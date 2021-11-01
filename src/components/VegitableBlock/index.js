import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { VegitableBackground } from "../../assets/Images";

const VegitableBlock = ({vegitableName, sellerName, image, price, onPress}) =>{
    return(
        <View
            style={styles.rootContainer}
        >
            <TouchableOpacity 
                onPress={onPress}
                style={styles.innerContainer}
            >
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

            </TouchableOpacity>
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
        flexDirection: 'row'
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
    }
    
})         

export default VegitableBlock