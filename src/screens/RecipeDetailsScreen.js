import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const RecipeDetailsScreen = ({navigation, route}) => {
  const {item} = route.params;
  console.log(item);
  return (
    <View style={{
        backgroundColor: item.color, flex: 1
    }}>
        <SafeAreaView style={{
            flexDirection: "row",
            marginHorizontal: 8,
            marginTop: 5
        }}>
            <Pressable 
            onPress={()=>{
                navigation.goBack()
            }}
            style={{flex: 1}}>
                <Icon name = {"arrow-circle-left"} size = {30} color = "white"/>
            </Pressable>
            <Icon name = {"heart-o"} size = {30} color = "white"/>
        </SafeAreaView>
      <View style={{
        backgroundColor: "#fff", flex: 1, marginTop: 240, borderTopLeftRadius: 56, borderTopRightRadius: 56, alignItems: "center", paddingHorizontal: 16
      }}>
        <View style={{
            height: 300,
            width: 300,
            position: 'absolute',
            top: -150,
            marginLeft: 45
        }}>
        <Image source={item.image} style={{width: "100%", height: "100%", resizeMode: "cover"}}/>
        </View>
        <View style={{alignContent: "center"}}>
            <Text style={{
                marginTop: 180,
                fontSize: 28,
                fontWeight: "bold"
            }}>{item.name}</Text>
            <Text style={{fontSize: 20, marginVertical: 16,}}>{item.description}</Text>

            <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%",}}>
                <View style={{backgroundColor: "rgba(255, 0, 0, 0.38)", paddingHorizontal: 16, borderRadius: 8, paddingVertical: 26, alignItems: "center", marginLeft: 20}}>
                    <Text style={{
                        fontSize: 40
                    }}>⏰</Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 500
                    }}>{item.time}</Text>
                </View>
                <View style={{backgroundColor: "rgba(135, 206, 235, 0.8)", padding: 16, borderRadius: 8, paddingVertical: 26, alignItems: "center"}}>
                    <Text style={{
                        fontSize: 40
                    }}>🍳</Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 500
                    }}>{item.difficulty}</Text>
                </View>
                <View style={{backgroundColor: "rgba(255, 165, 0, 0.48)", padding: 16, borderRadius: 8, paddingVertical: 26, alignItems: "center"}}>
                    <Text style={{
                        fontSize: 40
                    }}>🔥</Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 500
                    }}>{item.calories}</Text>
                </View>
            </View>
        </View>
      </View>
      
    </View>
  )
}

export default RecipeDetailsScreen

const styles = StyleSheet.create({})