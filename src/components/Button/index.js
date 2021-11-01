import React from 'react'
import {View, Text,StyleSheet, TouchableOpacity} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Button = ({name, onPress, moreStyle}) =>{
    return(
        <View style={styles.rootContainer}>
            <TouchableOpacity 
                style={[styles.innerContainer, moreStyle]}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        width: '100%',
        alignItems: 'center'
    },
    innerContainer:{
        backgroundColor: '#46BF01',
        width:70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'center',
        margin: 10
    },
    text:{
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        margin: 10
    }
})

export default Button