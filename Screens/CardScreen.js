import React,{useContext} from 'react';
import {
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Animated,
  Text,
  View,
  Alert,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign,Entypo } from '@expo/vector-icons';
const { width,height } = Dimensions.get('window');
import  Color from "../Colors/Color"
// import {quotes} from "../Data/Packs"
import { DataLayerContext } from "../provider/DataLayer";


const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign);
const AnimatedEntypo = Animated.createAnimatedComponent(Entypo)

const DURATION = 1000;
const TEXT_DURATION = DURATION * 0.8;



const Circle = ({ onPress, index, quotes, animatedValue, animatedValue2,colors }) => {
  const { initialBgColor, nextBgColor, bgColor } = colors[index];
  const inputRange = [0, 0.001, 0.5, 0.501, 1];

  const backgroundColor = animatedValue2.interpolate({
    inputRange,
    outputRange: [
      initialBgColor,
      initialBgColor,
      initialBgColor,
      bgColor,
      bgColor,
    ],
  });
  const dotBgColor = animatedValue2.interpolate({
    inputRange: [0, 0.001, 0.5, 0.501, 0.9, 1],
    outputRange: [
      bgColor,
      bgColor,
      bgColor,
      initialBgColor,
      initialBgColor,
      initialBgColor,
    ],
  });
  

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.container,
        { backgroundColor },
      ]}
    >
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: dotBgColor,
            transform: [
              { perspective: 200 },
              {
                rotateY: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '-90deg', '-180deg'],
                }),
              },

              {
                scale: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 6, 1],
                }),
              },

              {
                translateX: animatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0%', '50%', '0%'],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={onPress}>
          <Animated.View
            style={[
              styles.button,
              {
                transform: [
                  {
                    scale: animatedValue.interpolate({
                      inputRange: [0, 0.05, 0.5, 1],
                      outputRange: [1, 0, 0, 1],
                      // extrapolate: "clamp"
                    }),
                  },
                  {
                    rotateY: animatedValue.interpolate({
                      inputRange: [0, 0.5, 0.9, 1],
                      outputRange: ['0deg', '180deg', '180deg', '180deg'],
                    }),
                  },
                ],
                opacity: animatedValue.interpolate({
                  inputRange: [0, 0.05, 0.9, 1],
                  outputRange: [1, 0, 0, 1],
                }),
              },
            ]}
          >
            <AnimatedAntDesign name='right' size={28} style={{color:backgroundColor}} />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const Home = ({onPress,index,animatedValue, animatedValue2,colors})=>{
const { initialBgColor, nextBgColor, bgColor } = colors[index];
  const inputRange = [0, 0.001, 0.5, 0.501, 1];

  const opacity = animatedValue2.interpolate({
      inputRange:[0,.25,.5,.75,1],
      outputRange:[1,0,0,0,1],
  })
  
  const dotBgColor = animatedValue2.interpolate({
    inputRange: [0, 0.001, 0.5, 0.501, 0.9, 1],
    outputRange: [
      bgColor,
      bgColor,
      bgColor,
      initialBgColor,
      initialBgColor,
      initialBgColor,
    ],
  });
    return (
    <Animated.View style={{margin:25,opacity:opacity}}>
        <TouchableOpacity onPress={onPress}>
            <AnimatedEntypo name="home" size={35} style={{
                color:dotBgColor
            }}  />
        </TouchableOpacity>
    </Animated.View>
    )
}


/* 
initialBgColor -> Big background of the element
bgColor -> initial circle bg color that will be the next slide initial BG Color
nextBgColor -> next circle bg color after we fully transition the circle and this will be small again
prev bgColor === next initialBgColor
prev nextBgColor === next bgColor
*/



// Color realted Code 
let colorsWhite = [
    {
      index:1,  
      initialBgColor: Color.white,
      bgColor: Color.red,

    },
    {
      index:2,
      initialBgColor: Color.white,
      bgColor: Color.red,
    },
    {
        index:3,
        initialBgColor: Color.red,
        bgColor: Color.white,
      },
    
    {
        index:4,
        initialBgColor: Color.white,
        bgColor: Color.red,
      },
    {
        index:5,
        initialBgColor: Color.red,
        bgColor: Color.white,
       
      },
      {
        index:6,
        initialBgColor: Color.white,
        bgColor: Color.red,
      },
      {
        index:7,
        initialBgColor: Color.red,
        bgColor: Color.white,
       
      },
      {
        index:8,
        initialBgColor: Color.white,
        bgColor: Color.red,
      },
      {
        index:9,
        initialBgColor: Color.red,
        bgColor: Color.white,
       
      },
      {
        index:10,
        initialBgColor: Color.white,
        bgColor: Color.red,
      },
      {
        index:11,
        initialBgColor: Color.red,
        bgColor: Color.white,
       
      },
      {
        index:12,
        initialBgColor: Color.white,
        bgColor: Color.red,
        
      },
      {
        index:13,
        initialBgColor: Color.red,
        bgColor: Color.white,
       
      },
      {
        index:14,
        initialBgColor: Color.white,
        bgColor: Color.red,
      },
      {
          index:15,
          initialBgColor: Color.red,
          bgColor: Color.white,
        },
      
      {
          index:16,
          initialBgColor: Color.white,
          bgColor: Color.red,
        },
      {
          index:17,
          initialBgColor: Color.red,
          bgColor: Color.white,
         
        },
        {
          index:18,
          initialBgColor: Color.white,
          bgColor: Color.red,
        },
        {
          index:19,
          initialBgColor: Color.red,
          bgColor: Color.white,
         
        },
        {
          index:20,
          initialBgColor: Color.white,
          bgColor: Color.red,
        },
        {
          index:21,
          initialBgColor: Color.red,
          bgColor: Color.white,
         
        },
        {
          index:22,
          initialBgColor: Color.white,
          bgColor: Color.red,
        },
        {
          index:23,
          initialBgColor: Color.red,
          bgColor: Color.white,
         
        },
        {
          index:24,
          initialBgColor: Color.white,
          bgColor: Color.red,
          
        },
        {
          index:25,
          initialBgColor: Color.red,
          bgColor: Color.white,
         
        },
        {
            index:26,
            initialBgColor: Color.white,
            bgColor: Color.red,
          },
          {
            index:27,
            initialBgColor: Color.red,
            bgColor: Color.white,
           
          },
          {
            index:28,
            initialBgColor: Color.white,
            bgColor: Color.red,
          },
          {
            index:29,
            initialBgColor: Color.red,
            bgColor: Color.white,
           
          },
          {
            index:30,
            initialBgColor: Color.white,
            bgColor: Color.red,
            
          },
    
  ];
  
let colorsRed = [
    {
      index:1,  
      initialBgColor: Color.red,
      bgColor: Color.white,

    },
    {
      index:2,
      initialBgColor: Color.red,
      bgColor: Color.white,
    },
    {
        index:3,
        initialBgColor: Color.white,
        bgColor: Color.red,
      },
    
    {
        index:4,
        initialBgColor: Color.red,
        bgColor: Color.white,
      },
    {
        index:5,
        initialBgColor: Color.white,
        bgColor: Color.red,
       
      },
      {
        index:6,
        initialBgColor: Color.red,
        bgColor: Color.white,
      },
      {
        index:7,
        initialBgColor: Color.white,
        bgColor: Color.red,
       
      },
      {
        index:8,
        initialBgColor: Color.red,
        bgColor: Color.white,
      },
      {
        index:9,
        initialBgColor: Color.white,
        bgColor: Color.red,
       
      },
      {
        index:10,
        initialBgColor: Color.red,
        bgColor: Color.white,
      },
      {
        index:11,
        initialBgColor: Color.white,
        bgColor: Color.red,
       
      },
      {
        index:12,
        initialBgColor: Color.red,
        bgColor: Color.white,
        
      },
      {
        index:13,
        initialBgColor: Color.white,
        bgColor: Color.red,
       
      },
      {
        index:14,
        initialBgColor: Color.red,
        bgColor: Color.white,
      },
      {
          index:15,
          initialBgColor: Color.white,
          bgColor: Color.red,
        },
      
      {
          index:16,
          initialBgColor: Color.red,
          bgColor: Color.white,
        },
      {
          index:17,
          initialBgColor: Color.white,
          bgColor: Color.red,
         
        },
        {
          index:18,
          initialBgColor: Color.red,
          bgColor: Color.white,
        },
        {
          index:19,
          initialBgColor: Color.white,
          bgColor: Color.red,
         
        },
        {
          index:20,
          initialBgColor: Color.red,
          bgColor: Color.white,
        },
        {
          index:21,
          initialBgColor: Color.white,
          bgColor: Color.red,
         
        },
        {
          index:22,
          initialBgColor: Color.red,
          bgColor: Color.white,
        },
        {
          index:23,
          initialBgColor: Color.white,
          bgColor: Color.red,
         
        },
        {
          index:24,
          initialBgColor: Color.red,
          bgColor: Color.white,
          
        },
        {
          index:25,
          initialBgColor: Color.white,
          bgColor: Color.red,
         
        },
        {
            index:26,
            initialBgColor: Color.red,
            bgColor: Color.white,
          },
          {
            index:27,
            initialBgColor: Color.white,
            bgColor: Color.red,
           
          },
          {
            index:28,
            initialBgColor: Color.red,
            bgColor: Color.white,
          },
          {
            index:29,
            initialBgColor: Color.white,
            bgColor: Color.red,
           
          },
          {
            index:30,
            initialBgColor: Color.red,
            bgColor: Color.white,
            
          },
    
  ];
// Choose other Color
const OtherColorLst = (color)=>{
  if (color===Color.red){
      return colorsWhite
  } else{
      return colorsRed
  }
  }

// Gives the color for the first text 
const OtherColor  = (color)=>{
  if (color===Color.red){
    return Color.red
} else{
    return Color.white
}
}






export default function App(props) {
  // Data Layer
  DATA_LAYER = useContext(DataLayerContext)
  const colors = OtherColorLst(DATA_LAYER.firstColor)
  const firstcolortext = OtherColor(DATA_LAYER.firstColor)  
  // Pack selection logic
  const selectedPack = DATA_LAYER.selectedPack
  const quotes = DATA_LAYER.DataDic[selectedPack]

  // Animation Logic
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const animatedValue2 = React.useRef(new Animated.Value(0)).current;
  const sliderAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [...Array(quotes.length).keys()];
  const [index, setIndex] = React.useState(0);

  const BackAlert = ()=>Alert.alert(
    "Hold Up!",
    "Are you sure you want to reset the game",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "OK",onPress:()=>props.navigation.navigate('packscreen') }
    ],
    { cancelable: false }
  );

  const animate = (i) =>
    Animated.parallel([
      Animated.timing(sliderAnimatedValue, {
        toValue: i,
        duration: TEXT_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: false,
      }),
    ]);

    

  const onPress = () => {
    animatedValue.setValue(0);
    animatedValue2.setValue(0);
    animate((index + 1) % colors.length).start();
    setIndex((index + 1) % colors.length);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <StatusBar hidden />
      <Circle
        colors={colors}
        index={index}
        onPress={onPress}
        quotes={quotes}
        animatedValue={animatedValue}
        animatedValue2={animatedValue2}
      />
      <Home  colors={colors} onPress={BackAlert}  index={index} animatedValue={animatedValue} animatedValue2={animatedValue2}/>
      
      
      <Animated.View
        style={{
          flexDirection: 'row',
        
          transform: [
            {
              translateX: sliderAnimatedValue.interpolate({
                inputRange,
                outputRange: quotes.map((_, i) => -i * width * 2),
              }),
            },
          ],
          opacity: sliderAnimatedValue.interpolate({
            inputRange: [...Array(quotes.length * 2 + 1).keys()].map(
              (i) => i / 2
            ),
            outputRange: [...Array(quotes.length * 2 + 1).keys()].map((i) =>
              i % 2 === 0 ? 1 : 0
            ),
          }),
        }}
      >
       
        {quotes.slice(0, colors.length).map(({ question, author }, i) => {
          return (
             

                <View key={i}style={{ paddingRight: width, width: width * 2,marginTop:width/2}}>
                    { i===0?<Text style={[styles.paragraph, { color: firstcolortext }]}>{question}</Text>:
                    <Text style={[styles.paragraph, { color: colors[i].initialBgColor }]}>{question}</Text>
                    }
                </View>
                    
            
              );
        })}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,    paddingBottom: 50,
  },
  paragraph: {
    margin: 12,
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:'NunitoBold',
    color: 'white',
  },
  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'turquoise',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});


// import {StatusBar} from "expo-status-bar"
// import React from "react"
// import {AntDesign} from "@expo/vector-icons"
// import {StyleSheet,View,TouchableOpacity,Animated,Dimensions,Text} from 'react-native'
// import Color from "../Colors/Color"
// const CIRCLE_SIZE = 100;
// const { width ,height} = Dimensions.get('window');

// const DURATION = 1000;
// const TEXT_DURATION = DURATION * 0.8;

// const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign);

//  const quotes = [
//       {
//         quote:
//           'For the things we have to learn before we can do them, we learn by doing them.',
//         author: 'Aristotle, The Nicomachean Ethics',
//       },
//       {
//         quote: 'The fastest way to build an app.',
//         author: 'The Expo Team',
//       },
//       {
//         quote:
//           'The greatest glory in living lies not in never falling, but in rising every time we fall.',
//         author: 'Nelson Mandela',
//       },
//       {
//         quote: 'The way to get started is to quit talking and begin doing.',
//         author: 'Walt Disney',
//       },
//       {
//         quote:
//           "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
//         author: 'Steve Jobs',
//       },
//       {
//         quote:
//           'If life were predictable it would cease to be life, and be without flavor.',
//         author: 'Eleanor Roosevelt',
//       },
//       {
//         quote:
//           "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
//         author: 'Oprah Winfrey',
//       },
//       {
//         quote:
//           "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
//         author: 'James Cameron',
//       },
//       {
//         quote: "Life is what happens when you're busy making other plans.",
//         author: 'John Lennon',
//       },
//     ];
    

// // Circle object
// const Circle = ({onPress,animatedValue}) => {
//     const inputRange = [0,0.001,.5,.5001,1]
//     const containerBg = animatedValue.interpolate({
//         inputRange,
//         outputRange:[Color.red,Color.red,Color.red,Color.white,Color.white],
//     });
//     const circleBg = animatedValue.interpolate({
//         inputRange,
//         outputRange:[Color.white,Color.white,Color.white,Color.red,Color.red],
//     });

   
    
//     return(
//         <Animated.View style={[StyleSheet.absoluteFillObject,styles.circleContainer,{
//             backgroundColor:containerBg
//         }]}>
//             <Animated.View style={[styles.circle,{
//                 backgroundColor:circleBg,
//                 transform:[ 
//                     {
//                         perspective:200,
//                     },
//                     {rotateY:animatedValue.interpolate({
//                         inputRange:[0,0.5,1],
//                         outputRange:['0deg','-90deg','-180deg']
//                     })},
//                     {
//                         scale:animatedValue.interpolate({
//                             inputRange:[0,.5,1],
//                             outputRange:[1,8,1],
//                         })
//                     },
//                     {translateX:animatedValue.interpolate({
//                         inputRange:[0,.5,1],
//                         outputRange:['0%','50%','0%']
//                     })}
//                 ]
//             }]}>
//                 <TouchableOpacity onPress={onPress}>
//                     <Animated.View style={[styles.circle,styles.circleButton,
//                     {
//                         transform: [
//                           {
//                             scale: animatedValue.interpolate({
//                               inputRange: [0, 0.05, 0.5, 1],
//                               outputRange: [1, 0, 0, 1],
//                               // extrapolate: "clamp"
//                             }),
//                           },
//                           {
//                             rotateY: animatedValue.interpolate({
//                               inputRange: [0, 0.5, 0.9, 1],
//                               outputRange: ['0deg', '180deg', '180deg', '180deg'],
//                             }),
//                           },
//                         ],
//                         opacity: animatedValue.interpolate({
//                           inputRange: [0, 0.05, 0.9, 1],
//                           outputRange: [1, 0, 0, 1],
//                         }),
//                       },
                    
//                     ]}>
//                         <AnimatedAntDesign name="arrowright" size={28} style={{color:containerBg}}/>
//                     </Animated.View>
//                 </TouchableOpacity>
//             </Animated.View>
//         </Animated.View>
//     )
// }

// export default function App(){
//     const animatedValue = React.useRef(new Animated.Value(0)).current;
//     const sliderAnimatedValue = React.useRef(new Animated.Value(0)).current;  
//     const inputRange = [...Array(quotes.length).keys()];
//     const animation = (toValue)=>
//         Animated.parallel([
//         Animated.timing(sliderAnimatedValue, {
//         toValue,
//         duration: TEXT_DURATION,
//         useNativeDriver: true,
//         }),
//         Animated.timing(animatedValue,{
//             toValue,
//             duration:DURATION,
//             useNativeDriver:false,
//         })
//     ])

//    const [index,setIndex] = React.useState(0);
//     const onPress =()=>{
//         setIndex(index===1?0:1);

//         animation(index===1?0:1).start()
//     };

//     return (
//         <View style={styles.container}>
//             <StatusBar style='auto' hidden/>
//             <Circle onPress={onPress} animatedValue={animatedValue} /> 
//             <Animated.View
//             style={{   
//                flexDirection:'row',
//             top:100 ,
           
//             transform: [
//                 {
//                 translateX: sliderAnimatedValue.interpolate({
//                     inputRange,
//                     outputRange: quotes.map((_, i) => -i * width * 2),
//                 }),
//                 },
//             ],
//             opacity: sliderAnimatedValue.interpolate({
//                 inputRange: [...Array(quotes.length * 2 + 1).keys()].map(
//                 (i) => i / 2
//                 ),
//                 outputRange: [...Array(quotes.length * 2 + 1).keys()].map((i) =>
//                 i % 2 === 0 ? 1 : 0
//                 ),
//             }),
//             }}
//         >
//             {quotes.slice(0, 3).map(({ quote, author }, i) => {
//             return (
//                 <View style={{ paddingRight: width, width: width * 2,height:height/4 }} key={i}>
//                 <Text
//                     style={[styles.paragraph, { color: 'white' }]}
//                 >
//                     {quote}
//                 </Text>

//                 </View>
//             );
//             })}
//         </Animated.View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'flex-start'
//     },
//     circleContainer:{
//         flex:1,
//         justifyContent:'flex-end',
//         alignItems:'center',
//         padding:8,
//         paddingBottom:100,
//         backgroundColor:'gold'
//     },
//     circle:{
//         backgroundColor:'#444',
//         width:CIRCLE_SIZE,
//         height:CIRCLE_SIZE,
//         borderRadius:CIRCLE_SIZE/2
//     },
//     circleButton:{
//         backgroundColor:'transparent',
//         alignItems:'center',
//         justifyContent:'center'
//     }
// })
