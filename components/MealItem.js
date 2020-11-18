import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import DefaultText from '../components/DefaultText';

const MealItem = props => {
    
    return(
        <View style={style.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...style.mealRow, ...style.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={style.bgImage}>
                            <View style={style.titleContainer}>
                                <Text style={style.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...style.mealRow, ...style.mealDetail}}>
                        <DefaultText>{props.duration} min</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    titleContainer:{
        backgroundColor : 'rgba(0,0,0,0.5)',
        paddingHorizontal:12,
        paddingHorizontal:5,
    },
    title:{
        color : "white",
        fontFamily:'open-sans-bold',
        fontSize:22,
        textAlign:"center",
    },
    bgImage : {
        width:"100%",
        height:"100%",
        justifyContent:"flex-end",
    },
    mealRow:{
        flexDirection:"row",
    },
    mealItem:{
        height : 200,
        marginVertical : 10,
        width : "100%",
        backgroundColor:"#f5f5f5",
        borderRadius:10,
        overflow : "hidden",
    },
    mealHeader:{
        height : "85%",
    },
    mealDetail:{
        paddingHorizontal : 10,
        justifyContent : 'space-between',
        alignItems:"center",
        height:"15%",
    }
});

export default MealItem;