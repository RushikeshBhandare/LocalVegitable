import React, { useState } from 'react'
import {View, Text,StyleSheet, TextInput} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const PasswordInput = ({name, value, setValue,  placeholder}) =>{
    const [showPassword, setShowPassword] = useState(false)
    return(
        <View style={styles.rootContainer}>
            <Text
                style={styles.InputText}
            >
                {name}
            </Text>
            <TextInput
                value={value}
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry
                onChangeText={(t)=>{setValue(t)}}  
            />
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        
    },
    InputText:{
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black'
    },
    input:{
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        fontSize: 18,
        height: 45,
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10 
    }
})

export default PasswordInput