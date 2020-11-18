import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import DefaultText from '../components/DefaultText';

import {MEALS} from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton'

const ListItem = props => {
    return <View style={style.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return(
        <ScrollView>
            <Image source={{uri : selectedMeal.imageURL}} style={style.image}/>
            <View style={style.details}>
                <DefaultText>{selectedMeal.duration} min</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={style.title}>Ingredients</Text>
                {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={style.title}>Steps</Text>
                {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle : selectedMeal.title,
        headerRight : 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName='ios-star' onPress={() => { console.log('Mark as favorite!') }}/>
        </HeaderButtons>
    };
}

const style = StyleSheet.create({
    image:{
        width : "100%",
        height : 200,
    },
    details:{
        flexDirection:'row',
        padding: 15,
        justifyContent : "space-around",
    },
    title:{
        fontFamily : 'open-sans-bold',
        fontSize : 22,
        textAlign : "center",
    },
    listItem:{
        marginVertical : 10,
        marginHorizontal : 20,
        borderColor : '#ccc',
        borderWidth : 1,
        padding: 10,
    }
});

export default MealDetailScreen;