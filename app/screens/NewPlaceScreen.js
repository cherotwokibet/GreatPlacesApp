import React, { useState } from 'react';
import {
    ScrollView,
    TextInput,
    Button, 
    View, 
    StyleSheet, 
    Text
} from 'react-native';
import { useDispatch } from 'react-redux';

import * as placesActions from '../store/actions/places';
import colors from '../config/colors';
import ImagePicker from '../components/ImagePicker';
import LocationPicker from '../components/LocationPicker';


function NewPlaceScreen(props) {
    const [titleValue, setTitleValue] = useState('');
    const [selectedImage, setSelectedImage] = useState();

    const dispatch = useDispatch();

    const titleChangeHandler = (text) => {
        setTitleValue(text);
    };
 
    const imageTakenHandler = (imagePath) => {
        setSelectedImage(imagePath);
    };

    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue,selectedImage));
        props.navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={titleChangeHandler}
                    value={titleValue} 
                />
                <ImagePicker onImageTaken={imageTakenHandler} />
                <LocationPicker/>
                <Button
                    title='Save Place'
                    color={colors.primary}
                    onPress={savePlaceHandler} 
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    form:{
        margin:30
    },
    label:{
        fontSize:18,
        marginBottom:15
    },
    textInput:{
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        marginBottom:15,
        paddingVertical:4,
        paddingHorizontal:2
    }
})

export default NewPlaceScreen;