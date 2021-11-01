import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { VegitableBackground } from "../../assets/Images";

const SellerInfo = ({name, image, contactNumner, address}) =>{
    return(
        <View
            style={styles.rootContainer}
        >
            <View
                style={styles.innerContainer}
            >
                <Image
                    style={styles.image}
                    source={image}
                />
                <View style={styles.TextContainer}>
                    <Text style={styles.name}>
                        {name}
                    </Text>
                    
                    {/* Adress */}
                    <View style={styles.JoinLine}>
                        <Text style={styles.title}>
                            Address: 
                        </Text>
                        <Text style={styles.text}>
                            {address}
                        </Text>
                    </View>

                    {/* Contact No */}
                    <View style={styles.JoinLine}>
                        <Text style={styles.title}>
                            Contact No: 
                        </Text>
                        <Text style={styles.text}>
                            {contactNumner}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        width: '100%',
        // borderWidth: 1,
        // marginTop: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10
    },
    innerContainer:{
        // height: 130,
        width: '98%',
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 10,
        backgroundColor: 'white',
        alignItems:'center',
        paddingBottom: 10,
        paddingTop: 10

    },

    image:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10
    },
    TextContainer:{
        // borderWidth: 1,
        borderColor: 'black',
        // flex: 1,
        flex: 1,
        // height: 130,
        marginLeft: 30,
        justifyContent: 'center'
    },
    name:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    JoinLine:{
        flexDirection: 'row',
        marginTop: 10
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    text:{
        fontSize: 14,
        marginLeft: 10,
        // borderWidth: 1,
        width: 130,
        overflow: 'hidden'
    }
    
    
})         

export default SellerInfo