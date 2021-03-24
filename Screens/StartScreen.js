import React from 'react'
import { View, Text, Image,Dimensions, TouchableOpacity,Alert } from 'react-native'
const {width,height} = Dimensions.get('window')
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import {FlingGestureHandler,State,Directions} from "react-native-gesture-handler"
import Animated,{Value} from 'react-native-reanimated';
import { onGestureEvent } from 'react-native-redash/lib/module/v1';


const StartScreen = (props) => {
    const translationY = new Value(0);
    const state = new Value(State.UNDETERMINED);

    const gestureHandler = onGestureEvent({
        translationY,
        state,
      });
    return (
        <FlingGestureHandler
        direction={Directions.DOWN}
        onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.ACTIVE) {
              props.navigation.replace('packscreen')
            }}}
        >
        <View style={{flex:1}}>
            <StatusBar hidden/>
            <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
                    <Image  resizeMode="contain" style={{width:width/1.05,bottom:20}} source={require('../assets/Title.png')}/>
            </View>
           
            <View style={{flex:1}}>
                <LottieView
                source={require("../assets/Lottie/swipedown.json")}
                autoPlay
                loop
                />
            </View>
           
            <View  style={{flex:.3,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily:'NunitoExtraBold',fontSize:20,color:'white'}}>
                    Swipe Down to Begin
                </Text>
            </View>
           
        </View>
        </FlingGestureHandler>
    )
}

export default StartScreen
