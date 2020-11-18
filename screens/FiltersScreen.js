import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const FiltersScreen = props => {
    return(
        <View style={style.screen}>
            <Text>The Filters Screen !</Text>
        </View>
    );
}

FiltersScreen.navigationOptions = navData => {
    return {
        HeaderTitle : "Filter Meals",
        headerLeft : (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="menu" iconName="ios-menu" onPress={() => {navData.navigation.toggleDrawer()}}/>
            </HeaderButtons>
        )
    }
};

const style = StyleSheet.create({
    screen:{
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    }
});

export default FiltersScreen;