import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Srng } from './Components/Srng'
import { RNActivity } from './Components/RNActivity'
import { RNBottomSheet } from './Components/RNBottomSheet'
import { RNSwitch } from './Components/RNSwitch'



const App = () => {
  return (
 
    // <View>
    //   {/* <Srng/> */}
    //   <RNActivity />
    // </View>

    // <View>
    //   <RNBottomSheet />
    // </View>


    <View style={{marginTop:"20%"}}>
      
      {/* <RNActivity /> */}
      {/* <RNBottomSheet /> */}
      <RNSwitch />
      
    </View>      
  )
}

export default App

const styles = StyleSheet.create({})