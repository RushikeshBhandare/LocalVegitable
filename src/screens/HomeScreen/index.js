import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { VegitableBackground } from "../../assets/Images";
import SearchScreen from "../../components/SearchBar";
import VegitableBlock from "../../components/VegitableBlock";


const vegitables = [
    {
        vegitableName: 'Mula',
        sellerName: 'Raash Patil',
        price: '20',
        image: VegitableBackground
    },
    {
        vegitableName: 'Kanda',
        sellerName: 'Sourabh Kumbar ',
        price: '60',
        image: VegitableBackground
    },
    {
        vegitableName: 'Methi',
        sellerName: 'Raash Patil',
        price: '10',
        image: VegitableBackground
    },
    {
        vegitableName: 'lasuun ',
        sellerName: 'Gajraj s',
        price: '80',
        image: VegitableBackground
    },
]

const HomeScreen = ( ) =>{
    const [search, setSearch ] = useState('')

    return(
        <View
            style={styles.rootContainer}
        >
            {/* Search Bar */}
            <SearchScreen 
                value={search} 
                setValue={setSearch}
                keyboardType='number-pad'
            />
            {/* List of Avalable Vagitables */}
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
           

        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        backgroundColor: 'white'
    }
})

export default HomeScreen 