import React from 'react'
import {View, Text,StyleSheet, TextInput} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const InputField = ({name, value, setValue,placeholder, multiline = false, numberOfLines = 1, moreStyle, keyboardType="default" }) =>{
    return(
        <View style={styles.rootContainer}>
            <Text
                style={styles.InputText}
            >
                {name}
            </Text>
            <TextInput
                value={value}
                style={[styles.input, moreStyle]}
                placeholder={placeholder}
                onChangeText={(t)=>{setValue(t)}}
                multiline={multiline}
                numberOfLines={numberOfLines}
                keyboardType={keyboardType}
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

export default InputField