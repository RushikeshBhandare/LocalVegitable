import React from 'react'
import {View, StyleSheet,} from 'react-native'

import { VegitableBackground } from '../../assets/Images'

const PlainBox = ({children}) =>{
    return(
        <View style={styles.rootContainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        backgroundColor: 'white',
        width: '85%',
        borderRadius: 15,
        elevation: 5,
        padding: 30
    },
})

export default PlainBox