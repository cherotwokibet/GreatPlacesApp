import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import MapScreen from '../screens/MapScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import PlacesListScreen from '../screens/PlacesListScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const PlacesNavigator = () => (
    <Stack.Navigator
        initialRouteName='PlacesList'
        screenOptions={{
            headerStyle:{
                backgroundColor:colors.primary
            },
            headerTitleStyle:{
                fontWeight:'bold'
            },
            headerTintColor:'white'
        }}
    >
        <Stack.Screen
            name='Map'
            component={MapScreen}
        ></Stack.Screen>
        <Stack.Screen
            name='NewPlace'
            component={NewPlaceScreen}
            options={()=>({
                headerTitle:'Add Place'
            })}
        ></Stack.Screen>
        <Stack.Screen
            name='PlaceDetail'
            component={PlaceDetailScreen}
            options={({route})=>({
                headerTitle:route.params.placeTitle
            })}
        ></Stack.Screen>
        <Stack.Screen
            name='PlacesList'
            component={PlacesListScreen}
            options={({navigation})=>({
                headerTitle:'All Places',
                headerRight:({tintColor})=>(
                    <Ionicons
                        name='md-add'
                        size={35}
                        style={{marginRight:15}}
                        color={tintColor}
                        onPress={()=>{
                            navigation.navigate('NewPlace');
                        }}
                    />
                )
            })}
        ></Stack.Screen>
    </Stack.Navigator>

);

export default PlacesNavigator;