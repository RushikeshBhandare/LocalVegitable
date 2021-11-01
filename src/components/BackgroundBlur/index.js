import React, {useEffect} from 'react'
import {StyleSheet, ImageBackground, Image, Animated} from 'react-native'

const BackgroundBlur = ({image, children}) =>{
    const width = new Animated.Value(460);
 
    const height = new Animated.Value(600);
    useEffect(() => {
        Animated.timing(
          width,
          {
            toValue: 400,
            duration: 5000,
            useNativeDriver: false,
          },
        ).start();
        Animated.timing(
          height,
          {
            toValue: 800,
            duration: 10000,
            useNativeDriver: false,
          },
        ).start();
      },);
    return(
        <Animated.Image
            style={{
                width: width,
                height: '100%',
                position: 'absolute',
              }}
            blurRadius={2}    
            source={image}
        />
        //    {/* {children}
        // </Animated.Image> */}
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        blurRadius:5,
        alignItems: 'center'
    },
    
})

export default BackgroundBlur