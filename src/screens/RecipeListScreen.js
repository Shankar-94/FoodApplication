import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchFilter from '../components/SearchFilter'
import CategoryFilter from '../components/CategoryFilter'
import Recipes from '../components/Recipes'

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header headerText={"Hi, Shankar"} headerIcon={"bell-o"}/>
      <SearchFilter icon = "search" placeholder={"Enter Your Favorite Recipe"}/>

      <View style={{marginTop: 22, marginLeft: 22}}>
        <Text style={{fontSize: 22, fontWeight: "bold"}}>Categories</Text>
        <CategoryFilter/>
      </View>

      <View style={{marginTop: 22, marginLeft: 22, flex: 1}}>
        <Text style={{fontSize: 22, fontWeight: "bold"}}>Recipes</Text>
        <Recipes/>
      </View>
    </SafeAreaView>
  )
}

export default RecipeListScreen

const styles = StyleSheet.create({})