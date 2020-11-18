import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = props => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >=21){
        TouchableCmp = TouchableNativeFeedback;
    }
    return(
        <View style={style.gridItem}>
            <TouchableCmp style={style.gridTouch} onPress={props.onSelect}>
                <View style={{...style.container, ...{backgroundColor : props.color}}}>
                    <Text style={style.title} nomberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
}

const style = StyleSheet.create({
    gridItem:{
        flex:1,
        margin : 15,
        height : 150,
        borderRadius : 10,
        overflow : "hidden",
    },
    gridTouch:{
        flex : 1
    },
    container : {
        flex : 1,
        borderRadius : 10,
        shadowColor : 'black',
        shadowOpacity : 0.26,
        shadowOffset : {width : 0, height : 2},
        shadowRadius : 10,
        elevation : 3,
        padding : 15,
        justifyContent : "flex-end",
        alignItems : "flex-end",
    },
    title:{
        fontFamily : 'open-sans-bold',
        fontSize : 22,
        textAlign : "right",
    }
});

export default CategoryGridTile;