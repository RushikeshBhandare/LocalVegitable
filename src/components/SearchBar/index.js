import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Button from "../Button";

const SearchScreen = ({value, setValue, keyboardType= "default"}) =>{
    return(
        <View
            style={styles.rootContainer}
        >
            <View
                style={styles.inputContainer}
            >
                <TextInput
                    value={value}
                    style={styles.inputText}
                    placeholder="enter zip code"
                    onChangeText={(t)=>{setValue(t)}}
                    keyboardType={keyboardType}
                />
                <View 
                    style={styles.buttonContianer}
                >
                    <Button
                        moreStyle={styles.button}
                        name="search"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        // borderWidth: 1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer:{
        borderWidth: 0.5,
        borderColor: 'gray',
        width: '90%',
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 3,
        backgroundColor: 'white'
    },
    inputText:{
        flex: 1,
        fontSize: 30,
        paddingLeft: 20
    },  
    buttonContianer:{
        alignSelf: 'flex-end'
    },
    button:{
        // alignSelf: 'flex-end'
        
    }
})         

export default SearchScreen