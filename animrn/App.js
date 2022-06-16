import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Srng } from './Components/Srng'
import { RNActivity } from './Components/RNActivity'
import { RNBottomSheet } from './Components/RNBottomSheet'



const App = () => {
  return (
 
    // <View>
    //   {/* <Srng/> */}
    //   <RNActivity />
    // </View>

    <View>
      <RNBottomSheet />
    </View>


    // <View>
    //   <Text>
    //     Srng 0720  
    //   </Text>      
    // </View>      
  )
}

export default App

const styles = StyleSheet.create({})