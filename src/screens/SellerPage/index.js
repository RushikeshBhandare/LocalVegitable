import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { VegitableBackground } from "../../assets/Images";
import SellerInfo from "../../components/SellerInfo";
import VegitableBlock from "../../components/VegitableBlock";

const vegitables = [
    {
        vegitableName: 'Mula',
        sellerName: 'Raash Patil',
        price: '20',
        image: VegitableBackground
    },
    {
        vegitableName: 'Methi chi pendi',
        sellerName: 'Raash Patil',
        price: '10',
        image: VegitableBackground
    },
    {
        vegitableName: 'Mula',
        sellerName: 'Raash Patil',
        price: '20',
        image: VegitableBackground
    },
    {
        vegitableName: 'Methi chi pendi',
        sellerName: 'Raash Patil',
        price: '10',
        image: VegitableBackground
    },
    {
        vegitableName: 'Mula',
        sellerName: 'Raash Patil',
        price: '20',
        image: VegitableBackground
    },
    {
        vegitableName: 'Methi chi pendi',
        sellerName: 'Raash Patil',
        price: '10',
        image: VegitableBackground
    },
    {
        vegitableName: 'Mula',
        sellerName: 'Raash Patil',
        price: '20',
        image: VegitableBackground
    },
    {
        vegitableName: 'Methi chi pendi',
        sellerName: 'Raash Patil',
        price: '10',
        image: VegitableBackground
    },
    {
        vegitableName: 'Mula',
        sellerName: 'Raash Patil',
        price: '20',
        image: VegitableBackground
    },
    {
        vegitableName: 'Methi chi pendi',
        sellerName: 'Raash Patil',
        price: '10',
        image: VegitableBackground
    },
]

const SellerHomePage = () =>{
    return(
        <View
            style={styles.rootContainer}
        >
            <SellerInfo
                name="Rushikesh Bhandare"
                address="At Post Dhamani, Tal-Tasgaon, Dist- Sangli, Maharashtra"
                contactNumner="9623732884"
                image={VegitableBackground}
            />
            {/* text */}
            <View 
                style={{width: '100%', alignItems: 'center', marginTop: 10}}
            >
                <Text style={{color: 'black', fontSize: 18}}>
                    more form the seller
                </Text>
            </View>

            {/* list of vegitable seller sell  */}
            <FlatList
                data={vegitables}
                renderItem={({item })=>{
                    return(
                        <VegitableBlock
                        vegitableName={item.vegitableName}
                        sellerName={item.sellerName}
                        price= {item.price}
                        image={item.image}
                        onPress={()=>{console.log("press on Vegitable ")}}
                    />
                    )
                }}
            />
            <View>
                <Text style={{color: 'black', fontSize: 18}}>
                    Contact me
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        backgroundColor: 'white'
    },
 
})         

export default SellerHomePage