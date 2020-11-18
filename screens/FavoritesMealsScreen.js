import React from 'react'
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesMealsScreen = props => {

    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

    return <MealList listData={favMeals} navigation={props.navigation}/>;
}

FavoritesMealsScreen.navigationOptions = navData => {
    return {
        HeaderTitle : "Your Favorites",
        headerLeft : (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="menu" iconName="ios-menu" onPress={() => {navData.navigation.toggleDrawer()}}/>
            </HeaderButtons>
        )
    }
};

export default FavoritesMealsScreen;