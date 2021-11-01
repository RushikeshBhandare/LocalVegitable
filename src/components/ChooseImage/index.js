import React, {useState}  from "react"
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native"
import {launchImageLibrary} from 'react-native-image-picker'


import {Camera} from '../../assets/Images'

const ChooseImage = () =>{

    const [avtar, setAvtar] = useState(null)


    const choosePhoto = ( ) =>{
        console.log('Choose Photo')
        const options = {}
       launchImageLibrary(options, response=>{
            // console.log("response", response.assets[0].uri)
            setAvtar(response.assets[0].uri)
        })
    }

    return(
        <View>
            <Text style={styles.text}>
                Choose photo  
            </Text>
            <View style={{
                flexDirection: 'row'
            }}>
                <TouchableOpacity
                    onPress={choosePhoto}
                >
                    <Image
                        style={styles.image}
                        source={Camera}
                    />
                </TouchableOpacity>
                <Image
                    style={styles.image}
                    source={{uri: avtar}}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black'
    },
    image:{
        width: 50,
        height: 50,
        margin: 10
    }
})


export default ChooseImage