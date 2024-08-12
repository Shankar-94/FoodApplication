import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const WelcomeScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Image source={require("../assets/Images/WelcomeImage.jpg")} resizeMode="cover" style = {styles.image}/>
      <Text style = {styles.recipeTextStyle}>Best Food Recipes</Text>
      <Text style = {styles.cookText}>Cooking at its Best</Text>
      <TouchableOpacity style = {styles.Button}
      onPress={()=>{
        navigation.navigate("RecipeList")
      }}
      >
        <Text style = {styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        
    },
    image: {
        width: 400,
        height: 500
    },

    recipeTextStyle: {
        color: "#f96163",
        fontSize: 22,
        fontWeight: "bold"
    },

    cookText: {
        color: "#3c444c",
        fontSize: 42,
        fontWeight: "bold",
        marginTop: 44,
        marginBottom: 20
    }, 
    
    Button: {
        backgroundColor: "#f96163",
        borderRadius: 18, 
        paddingVertical: 18,
        width: "80%",
        alignItems: "center",
    },

    buttonText : {
        fontSize: 18,
        color: "#fff", 
        fontWeight: "700"
    }
})