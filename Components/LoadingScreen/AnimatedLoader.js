import React,{useState} from 'react'
import {  useClock, useValue, useValues } from "react-native-redash/lib/module/v1";
import * as Progress from 'react-native-progress';
import { View, Text,Dimensions ,StyleSheet, Image} from 'react-native'
import LottieView from 'lottie-react-native';
import Color from '../../Colors/Color'
const {width,height} =Dimensions.get('window')
import Animated, { Easing, useCode } from 'react-native-reanimated';
const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  call,
  block,
  and,
  not,
  eq,
  concat,
} = Animated;

const runTiming=(clock)=>{
    const state = {
        finished:new Value(0),
        position: new Value(0),
        frameTime: new Value(0),
        time: new Value(0),
    }
    const config = {
        toValue: new Value(1),
        duration: 2500,
        easing:Easing.inOut(Easing.ease)
    }

    // Basically run 
    // if (state.finished===1){ 
    //     state.finished=0;
    //     state.frameTime=0;
    //     state.time=0;
    //     config.toValue= !state.position
    // } else{
    //     return state.position
    // }
    return block([
        cond(not(clockRunning(clock)), set(state.time,0), timing(clock,state,config)), // If clock isnt running run
        cond(eq(state.finished,1),[
        set(state.finished,0),
        set(state.frameTime,0),
        set(state.time,0),
        set(config.toValue,not(state.position)),
        ]),
        state.position
    ]);

}


const Print=(val)=>{
    useCode(()=>
        call([val],(v)=>console.log(v))
    ,[val])

}

const AnimationColorHanlder =(color)=>{
    if (color===Color.white){
        return require("../../assets/Lottie/white.json")
    } else {
        return require("../../assets/Lottie/red.json")
    }

    
}

const AnimatedLoader = ({navigation,color}) => {
    const [play, setPlay] = useState(true);
    const clock = useClock()
    const progress = useValue(0);
    const isPlaying = useValue(1);

    useCode(
        () => [
        cond(not(eq(progress,1)),startClock(clock)),
        cond(eq(progress,1),stopClock(clock)),
        cond(eq(progress,1), call([],()=>{navigation.replace('cardscreen')})),
        set(progress, runTiming(clock)),
        
    
        ],
        []
    );

    return (
        <LottieView
        source={AnimationColorHanlder(color)}
        autoPlay
        loop
      />
    )
}

export default AnimatedLoader
