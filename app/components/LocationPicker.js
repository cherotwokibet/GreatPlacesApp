import React, {useState} from 'react';
import { 
    View,
    Button,
    Text,
    ActivityIndicator,
    Alert, 
    StyleSheet
} from 'react-native';
import * as Location from 'expo-location';

import colors from '../config/colors';
import MapPreview from './MapPreview';

function LocationPicker(props) {
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation,setPickedLocation] = useState();

    const verifyPermissions = async () => {
        const {granted} = await Location.requestPermissionsAsync();
        
        if (!granted) {
            Alert.alert(
                'Insufficient permissions!',
                'You need to grant location permissions to use this app.',
                [{text:'Okay'}]
            );
            return false;
        };
        
        return true;
    };

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions();
        if(!hasPermission){
            return;
        }
        try {
            setIsFetching(true);
            const location = await Location.getCurrentPositionAsync({timeInterval:5000});
            // console.log(location);
            setPickedLocation({
                lat:location.coords.latitude,
                lng:location.coords.longitude
            });
        } catch (error) {
            Alert.alert(
                'Could not fetch location!',
                'Please try again later or pick a location on the map.',
                [{text:'Okay'}]
            );
        }
        setIsFetching(false);
    };

    return (
        <View style={styles.locationpicker}>
            <MapPreview style={styles.MapPreview} location={pickedLocation}>
                {isFetching ? (
                    <ActivityIndicator
                        size='large'
                        color={colors.primary}
                    />
                ) : (
                    <Text>No location chosen yet!</Text>
                )}
            </MapPreview>
            <Button
                title='Get User Location'
                color={colors.primary}
                onPress={getLocationHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    locationpicker:{
        marginBottom:15,
    },
    mapPreview:{
        marginBottom:10,
        width:'100%',
        height:150,
        borderColor:'#ccc',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default LocationPicker;