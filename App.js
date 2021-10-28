import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore,combineReducers,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';


import PlacesNavigator from './app/navigation/PlacesNavigator';
import placesReducer from './app/store/reducers/places';
import { init } from './app/helpers/db';

init().then(() => {
  console.log('Initialized db') 
}).catch((err) => {
  console.log('Initializing db failed');
  console.log(err)
})

const rootReducer = combineReducers({
  places: placesReducer
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PlacesNavigator/>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

