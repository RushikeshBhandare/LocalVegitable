import React, { useState }  from "react";
import {  StyleSheet, Text, View, TouchableOpacity, } from "react-native";

import Modal from 'react-native-modal'

import InputField from '../InputField'
import ChooseImage from '../ChooseImage'
import Button from '../Button'

const AddModel = ({onPress, isModalVisible}) =>{
    const [vegitableName, setVegitableName] = useState('')
    const [price, setPrice] = useState('')

    const AddItem = () =>{
        console.log('Add item')
        onPress()
    }

    return(
        <Modal
            style={{alignItems: 'center'}} 
            isVisible={isModalVisible}
        >
            <View
                style={styles.rootContainer}
            >
                {/* closeButton  */}
                <TouchableOpacity
                    onPress={onPress} 
                    style={styles.close}
                >
                    <Text style={styles.closeText}>Close</Text> 
                </TouchableOpacity>
                    {/* Vegitable name  */}
                <InputField
                    value={vegitableName}
                    name='Vegitable Name'
                    placeholder='enter vegitable name'
                    setValue={setVegitableName}_
                />

                {/* Camera */}
                <ChooseImage/>

                      {/* Price name  */}
                      <InputField
                    value={price}
                    name='Price '
                    placeholder='enter amout per kg'
                    setValue={setPrice}_
                />

                <Button
                    onPress = {AddItem}
                    name="Add"
                /> 

            </View>   
        </Modal>
    )
}

const styles =StyleSheet.create({
    rootContainer:{
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        // height: 500,
        padding: 10,
    },  
    close:{
        width: 40,
        height: 40,
        borderWidth: 1,
        position: 'absolute',
        top: 5,
        right :10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    closeText:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 11
    },
    CameraContainer:{
        width: '100%',
        height: 150,
        borderRadius: 10,
        borderWidth: 1
    },
})

export default AddModel