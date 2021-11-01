import React from 'react'
import {View, Text,StyleSheet, TouchableOpacity} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Link = ({name, onPress, style}) =>{
    return(
        <View style={styles.rootContainer}>
            <TouchableOpacity 
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
        alignItems: 'flex-end',
        
    },
    text:{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 16,
        textDecorationLine:'underline'
    }
    
})

export default Link