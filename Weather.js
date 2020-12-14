import React from 'react';
import { View, Text, StyleSheet,StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
        Thunderstorm:{
            iconName:"weather-lightning",
            gradient:["#373b44","#4286f4","#FFFFFF"],
            subtitle:"Keep Calm and Stay Home",
            },
        Drizzle:{
            iconName:"weather-rainy",
            gradient:["#373B44", "#4286f4","#89F7FE",],
            subtitle:"In the early morning of drizzle.",
            },
        Rain:{
            iconName:"weather-pouring",
            gradient:["#005BEA","#00C6FB" ],
            subtitle:"It's raining, so I thought of you",
            },
        Snow:{
            iconName:"weather-snowy-heavy",
            gradient:["#7DE2FC", "#B9B6E5"],
            subtitle:"Do you want to build a snowman?",
            },
        Mist:{
            iconName:"weather-rainy",
            gradient:["#0052D4","#65C7F7", "##9CECFB"],
            subtitle:"It's like you have no glasses on.",
            },
        Smoke:{
            iconName:"weather-cloudy-alert",
            gradient:["#403B4A","#E7E9BB"],
            subtitle:"It is not a fog.",
            },
        Haze:{
            iconName:"weather-hazy",
            gradient:["#db36a4","#f7ff00"],
            subtitle:"Just don't go outside.",
            },
        Dust:{
            iconName:"weather-cloudy-alert",
            gradient:["#4DA0B0", "#D39D38"],
            subtitle:"Thanks a lot China 🖕.",
            },
        Fog:{
            iconName:"weather-fog",
            gradient:["#076585","#fff"],
            subtitle:"An iron trumpet rang in the halo of fog.",
            },
        Sand:{
            iconName:"weather-cloudy-alert",
            gradient:["#19547b","#ffd89b"],
            subtitle:"Sing, friends of the sand. Even if you lose everything.",
            },
        Ash:{
            iconName:"weather-cloudy-alert",
            gradient:["#3f4c6b","#606c88"],
            subtitle:"We are fucked",
            },
        Squall:{
            iconName:"weather-windy-variant",
            gradient:["#1F1C2C","#928DAB"],
            subtitle:"Welcome to the Southeast Asia",
            },
        Tornado:{
            iconName:"weather-tornado",
            gradient:["#232526","#414345"],
            subtitle:"Keep Calm and Stay Home",
            },
        Clear:{
            iconName:"weather-sunny",
            gradient:["#FF7300", "#FEF253"],
            subtitle:"See the stars come joining down from the sky",
            },
        Clouds:{
            iconName:"weather-cloudy",
            gradient:[ "#304352","#D7D2CC"],
            subtitle:"The rain stopped, After a bright day",
            },
}

export default function Weather ({temp,condition}) {
    return (
        <LinearGradient  // Background Linear Gradient
            colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content"></StatusBar>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer,...styles.textContainer}}>
                <Text style={styles.title}>{condition}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    halfContainer: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp: {
        fontSize:46,
        color:"white",
    },
    title:{
        fontSize:44,
        fontWeight:"300",
        color:"white",
        marginBottom: 10,
    },
    subtitle:{
        fontWeight:"600",
        color:"white",
        fontSize:24,
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start",

    }
});