import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

function PlaceDetailScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Place Details Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default PlaceDetailScreen;