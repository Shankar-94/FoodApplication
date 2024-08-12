import { FlatList, Image, StyleSheet, Text, View, SafeAreaView, Pressable, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, recipeList } from '../assets/Categories'
import Icon from 'react-native-vector-icons/FontAwesome'
import {useNavigation} from "@react-navigation/native"

const Recipes = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{
        marginRight: 15
    }}>
      <FlatList data={recipeList} renderItem={({item})=>
        <Pressable
        onPress={()=>{
            navigation.navigate("RecipeDetails", {item: item})
        }}
        style={{
        backgroundColor: colors.COLOR_LIGHT,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 16, 
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 26
      }}>
        <Image source={item.image} style={{width: 150, height: 150, resizeMode: "center"}}/>
        <Text>{item.name}</Text>
        <View style={{
            flexDirection: "row",
            marginTop: 8
        }}>
            <Text style={{marginRight: 4}}>{item.time}</Text>
            <Text style={{marginRight: 4}}>|</Text>
            <View style={{flexDirection: "row"}}>
                <Text style={{marginRight: 4}}>{item.rating}</Text>
                <Icon name = "star" size = {16} color={colors.COLOR_PRIMARY} style={{marginTop: 2}}/>
            </View>
            <View>
                
            </View>
        </View>
      </Pressable>}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between"
      }}
      showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default Recipes

const styles = StyleSheet.create({})