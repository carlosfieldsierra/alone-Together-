import React from 'react'
import { View, Text,StyleSheet, Dimensions } from 'react-native'
import {  onGestureEvent, withTransition } from 'react-native-redash/lib/module/v1'
import Animated, { Value,eq, interpolate,cond, useCode,call } from 'react-native-reanimated'

import { TapGestureHandler,State } from 'react-native-gesture-handler'


const {width,height} = Dimensions.get('window')

// Prints animated Values
const Print=(val)=>{
    useCode(()=>
        call([val],(v)=>console.log(v))
    ,[val])

}

// fontSize=30 text="HOL TO START"
export default function StartButton({onPress,bg,fg,size,text,fontSize}) {
    const state = new Value(State.UNDETERMINED)
    const gestureHandler = onGestureEvent({state})
    const isActive = eq(state,State.BEGAN)
    const duration = cond(isActive,2000,500)
    const progress = withTransition(isActive,{duration:duration})
    const redboxslide = interpolate(progress,{
        inputRange:[0,1],
        outputRange:[1,0]

    })
    const redText = interpolate(progress,{
        inputRange:[0,1],
        outputRange:[0,size*2.3]
    })
    useCode(()=>
        call([redboxslide],(r)=>{
            if (r<0.1){
               onPress()
            }
        })
    )

    return (
        <TapGestureHandler {...gestureHandler}>
            <Animated.View style={{ width:size*3,height:size,backgroundColor:fg,borderRadius:size/2.5,justifyContent:'center',alignItems:'center'}}>
                <Animated.View style={{
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor:fg,
                    top:size/20,
                    left:size/20,
                    height:size/1.1,
                    width:size*2.9,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:size/2.5,

                }}>
                </Animated.View>
                <Animated.View style={{...StyleSheet.absoluteFillObject,top:size/3,left:size/3,width:redText,zIndex:1,
                }}>
                    <Animated.Text style={{fontSize:30 ,color:bg,fontWeight:'bold',}}>{text}</Animated.Text>
                </Animated.View>
            
                <Animated.View style={{
                    ...StyleSheet.absoluteFillObject,
                    top:size/20,
                    left:size/20,
                    backgroundColor:bg,
                    height:size/1.1,
                    width:size*2.9,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:size/2.5,
                    transform:[{translateX:size*1.1},{scaleX:redboxslide},{translateX:-size*1.1}]

                }}>
                </Animated.View>
                <Animated.View style={{...StyleSheet.absoluteFillObject,top:size/3,left:size/3,}}>
                    <Animated.Text style={{fontSize:fontSize,zIndex:1,color:fg,fontWeight:'bold',}}>{text}</Animated.Text>
                </Animated.View>

            </Animated.View>
        </TapGestureHandler>
    )
}