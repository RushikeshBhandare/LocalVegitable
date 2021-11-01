import React, { useState } from 'react'
import {View, Text, ImageBackgroundBase, StyleSheet, ImageBackground} from 'react-native'

import { VegitableBackground } from '../../assets/Images'
import BackgroundBlur from '../../components/BackgroundBlur'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import Link from '../../components/Link'
import PasswordInput from '../../components/PasswordInput'
import PlainBox from '../../components/PlainBox'

const LoginScreen = () =>{

    // state 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <View style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* background Image */}
            <BackgroundBlur
                image={VegitableBackground}
            />
            <View 
                style={styles.welcomeContiner}
            >
                <Text style={styles.WelcomeText}>
                    Welcome
                </Text>
            </View>    

            {/* login Box */}
            <View
                style={styles.LoginBox}
            >
                <PlainBox>
                    {/* input Fields */}
                    <InputField
                        value={email}
                        setValue={setEmail}
                        name="Email"
                        placeholder="example@gmail.com"
                    />
                    <PasswordInput
                        value={password}
                        name="Password"
                        placeholder="password"
                        setValue={setPassword}
                    />

                    {/* logIn button  */}
                    <Button name="Login" onPress={()=>{console.log("its Working")}}/>
                    
                    {/* other Links */}
                    <Link name="sign up" onPress={()=>{console.log("pressing On link ")}}/>
                    <Link name="seller login" onPress={()=>{console.log("pressing On link ")}}/>
                </PlainBox>
            </View>    

        </View>
    )
}

const styles = StyleSheet.create({
    welcomeContiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    WelcomeText:{
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        margin: 30
    },

    LoginBox:{
        width: '100%',
        alignItems:'center',
        flex: 2
    }
})

export default LoginScreen