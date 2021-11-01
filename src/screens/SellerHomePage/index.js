import React, {useState} from "react";
import { View, StyleSheet, FlatList, Text,  TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import { VegitableBackground } from "../../assets/Images";
import AddModel from "../../components/AddModel";
import SellerInfo from "../../components/SellerInfo";
import SellerVegitableBlock from "../../components/SellerVegitableBlock";

const vegitables = [
    {
        vegitableName: 'Mula',
        sellerName: 'Raash Patil',
        price: '20',
        image: VegitableBackground
    },
    {
        vegitableName: 'Methi chi bhaji',
        sellerName: 'Raash Patil',
        price: '10',
        image: VegitableBackground
    },
]

const SellerHomePage = () =>{
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        console.log('Toglling Model')
      setModalVisible(!isModalVisible);
    };
  
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
            <FlatList
                data={vegitables}
                renderItem={({item })=>{
                    return(
                        <SellerVegitableBlock
                            vegitableName={item.vegitableName}
                            sellerName={item.sellerName}
                            price= {item.price}
                            image={item.image}
                            onPress={()=>{console.log("press on Vegitable ")}}
                    />
                    )
                }}
            />

            {/* Add New Vegitable  */}

            <TouchableOpacity   
                style={styles.addVegContainer}
                onPress={()=>{toggleModal()}}
            >
                <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
            {/* Model */}

           <AddModel
                onPress={toggleModal}
                isModalVisible={isModalVisible}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
          backgroundColor: 'white'
    },
    addVegContainer: {
 
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 50,
        right: 20,
        backgroundColor: '#FF8585'
    },
    addText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})         

export default SellerHomePage