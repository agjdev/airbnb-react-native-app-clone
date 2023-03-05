import { StatusBar } from 'react-native';
import React from 'react';
import Router from './src/navigations/Router';


const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      <Router/>
      


    </>

  )
}


export default App;

