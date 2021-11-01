import React, { useState } from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'

import { VegitableBackground } from '../../assets/Images'
import BackgroundBlur from '../../components/BackgroundBlur'
import Button from '../../components/Button'
import ChooseImage from '../../components/ChooseImage'
import InputField from '../../components/InputField'
import PasswordInput from '../../components/PasswordInput'
import PlainBox from '../../components/PlainBox'

const SignUpSeller  = () =>{

    // state 
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [conformPassword, setconformPassword] = useState('')
    const [address, setAddress] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')

    const [avtar, setAvtar] = useState(null)

    

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
                    seller
                </Text>
            </View>    

            {/* login Box */}
            <View
                 style={styles.LoginBox}
            >
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                >
                    <View style={{
                        flex:1,
                        justifyContent: "center",
                        alignItems: 'center',
                        marginBottom: 40
                    }}>

                        <PlainBox>
                            {/* input Fields */}
                            {/* Name */}
                            <InputField
                                value={name}
                                setValue={setName}
                                name="Name"
                                placeholder="enter name"
                            />
                            {/* Email */}
                            <InputField
                                value={email}
                                setValue={setEmail}
                                name="Email"
                                placeholder="example@gmail.com"
                            />
                            {/* password */}
                            <PasswordInput
                                value={password}
                                name="Password"
                                placeholder="password"
                                setValue={setPassword}
                            />
                            {/* confom Password */}
                            <PasswordInput
                                value={conformPassword}
                                name="Conform assword"
                                placeholder="conform password"
                                setValue={setconformPassword}
                            />

                            
                            {/* Address */}
                            <InputField
                                value={address}
                                name="Adress"
                                placeholder="address"
                                setValue={setAddress}
                                moreStyle={{
                                    height: 100,
                                    alignItems: 'flex-start'
                                }}
                                multiline={true}
                                numberOfLines={4}
                            />

                            {/* Zip Code */}
                            <InputField
                                value={zipCode}
                                name="ZIP-CODE"
                                placeholder="000000"
                                setValue={setZipCode}
                                keyboardType="number-pad"
                            />

                            {/* Mobile Number */}
                            <InputField
                                value={mobileNumber}
                                name="Mobile number"
                                placeholder="enter mobile number"
                                setValue={setMobileNumber}
                                keyboardType="number-pad"
                            />
                            
                      
                            {/* Chhose Image */}
                            <ChooseImage/>

                            {/* logIn button  */}
                            <Button 
                                name="SignUp" 
                                moreStyle={{width: 100}}
                                onPress={()=>{console.log("its Working")}}
                            />
                        </PlainBox>
                    </View>
                </ScrollView>    
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
        flex: 6
    },
    scrollView:{
       minWidth:400,
       maxWidth: 400
    }
})

export default SignUpSeller