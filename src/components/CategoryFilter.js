import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categories, colors } from '../assets/Categories'

const CategoryFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            categories.map((category, index)=>{
                return <View 
                    key={index}
                    style={{
                    backgroundColor: index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                    marginRight: 36,
                    borderRadius: 8,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    marginVertical: 16,

                    shadowColor: "#000",
                    shadowOffset: {width: 0, height: 4},
                    shadowOpacity: 0.1,
                    shadowRadius: 7
                }}>
                    <Text style={{
                        color: index === 0 && colors.COLOR_LIGHT,
                        fontSize: 18
                    }}>{category.category}</Text>
                </View>
            })
        }
      </ScrollView>
    </View>
  )
}

export default CategoryFilter

const styles = StyleSheet.create({})