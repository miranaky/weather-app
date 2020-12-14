import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY='1aed40158b10e39db901b908cf788a32';

export default class extends React.Component {
  state ={
    isLoading:true,
  }
  getWeather = async (latitude,longitude) => {
    const {
      data:{
        main:{temp,temp_max,temp_min,humidity},
        weather,
      }
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    )
    this.setState({
      isLoading:false,
      temp,
      condition:weather[0].main
    })
    console.log(temp,condition,)
  }
  getLocation =  async () => {
    try {
      await Location.requestPermissionsAsync()
      const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
    } catch (error) {
      Alert.alert("Can't find you.","You need to allow location.")
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const {isLoading,temp,condition} = this.state;
    return isLoading? <Loading></Loading> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }

}
