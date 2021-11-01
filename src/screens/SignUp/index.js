import React, { useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'

import { VegitableBackground } from '../../assets/Images'
import BackgroundBlur from '../../components/BackgroundBlur'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import Link from '../../components/Link'
import PasswordInput from '../../components/PasswordInput'
import PlainBox from '../../components/PlainBox'

const SignUp  = () =>{

    // state 
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [conformPassword, setconformPassword] = useState('')

    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <BackgroundBlur
                image={VegitableBackground}
            />
            <View 
                style={styles.welcomeContiner}
            >
                <Text style={styles.WelcomeText}>
                    Sign Up
                </Text>
            </View>    

            {/* login Box */}
            <View
                style={styles.LoginBox}
            >
                <PlainBox>
                    {/* input Fields */}
                    <InputField
                        value={name}
                        setValue={setName}
                        name="Name"
                        placeholder="enter name"
                    />
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
                    <PasswordInput
                        value={conformPassword}
                        name="Conform password"
                        placeholder="conform password"
                        setValue={setconformPassword}
                    />

                    {/* logIn button  */}
                    <Button 
                        name="SignUp" 
                        moreStyle={{width: 100}}
                        onPress={()=>{console.log("its Working")}}
                    />
                    
                    {/* other Links */}
                    <Link name="become a seller" onPress={()=>{console.log("Become A seller")}}/>
                </PlainBox>
            </View>    

        {/* </BackgroundBlur> */}
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeContiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        // position:'absolute'
    },
    WelcomeText:{
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        margin: 30,
        position: 'absolute'
    },

    LoginBox:{
        width: '100%',
        alignItems:'center',
        flex: 4
    }
})

export default SignUp