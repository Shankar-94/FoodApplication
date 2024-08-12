import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchFilter = ({icon, placeholder}) => {
  return (
    <View style = {styles.container}>
      <TextInput style = {styles.textip}>{placeholder}</TextInput>
      <Icon name = {icon} size = {20} color="#f96163" style={{marginLeft: 100, marginTop: 13}}/>
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row", 
        paddingVertical: 3,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 16,
        margin: 20,

        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 7
    }, 
    textip: {
        paddingLeft: 8,
        fontSize: 16,
        color: "#808080"
    }
})