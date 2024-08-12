import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = ({headerText, headerIcon}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.htext}>{headerText}</Text>
      <Icon name = {headerIcon} size = {24} color="#f96163"/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {flexDirection: "row", margin: 12},
    htext: {flex: 1, fontSize: 22, fontWeight: "500"}
})