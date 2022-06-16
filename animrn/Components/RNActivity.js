import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View }
    from "react-native";



export const RNActivity = () => {


    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="red" />
        </View>
    )
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
});