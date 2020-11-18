import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from "./MealItem";

const MealList = props => {

    const renderMealItem = itemData => {
        return <MealItem title={itemData.item.title} onSelectMeal={() => {props.navigation.navigate({routeName :'MealDetail', params: {mealId : itemData.item.id}})}} image={itemData.item.imageURL} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability}/>;
    }

    return(
        <View style={style.list}>
            <FlatList style={style.flatList} data={props.listData} renderItem={renderMealItem} keyExtractor={(item, index)=>item.id}/>
        </View>
    );
}

const style = StyleSheet.create({
    list:{
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    },
    flatList : {
        width : "100%",
    }
});

export default MealList;