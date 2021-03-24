import Color from "../Colors/Color"
import { Entypo,MaterialIcons } from '@expo/vector-icons'; 
import * as React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  Platform,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
const { width, height } = Dimensions.get('window');
import MaskedView from "@react-native-community/masked-view";
import Svg,{Rect} from "react-native-svg";
import {LinearGradient} from "expo-linear-gradient";
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
import {Data} from "../Data/PackInfo"
// Data Layer
import { DataLayerContext } from "../provider/DataLayer";


// SIZES 
const SPACING = 10;
const ITEM_SIZE = width*.72;
const SPACER_ITEM_SIZE = (width-ITEM_SIZE)/2
const BACKDROP_HEIGHT = height*.6



const BackDrop = ({data,scrollX})=>{
  return(
    <View style={{position:'absolute',width,height:BACKDROP_HEIGHT}}>
      <FlatList
      data={data}
      keyExtractor={item=>item.key}
      renderItem={({item,index})=>{
        if (!item.poster){
          return null;
        }

        const inputRange = [
          (index-2)*ITEM_SIZE,
          (index-1)*ITEM_SIZE
        ]
        
        const translateX = scrollX.interpolate({
          inputRange,
          outputRange:[-width,0]
        })
        return (
          <MaskedView style={{position:'absolute'}}
          maskElement={
            <AnimatedSvg width={width} height={height} viewBox={`0 0 ${width} ${height}`}
            style={{
              transform:[{translateX}]
            }}
            >
              <Rect
              x="0"
              y="0"
              width={width}
              height={height}
              fill="red"
              />
            </AnimatedSvg>
          }
          >
            <Image source={item.poster} style={{width:width,height:BACKDROP_HEIGHT,resizeMode:'cover'}}/>
            
          </MaskedView>
        )

      }}
      
      />
      <LinearGradient
      colors={[ 'transparent',Color.red]}
      style={{
        height: BACKDROP_HEIGHT/2,
        width:width,
        position: 'absolute',
        bottom: 0,
      }}/>
    </View>
  )
}


const Index_to_Pack = (index)=>{
  if (index===0){
    return "crisispack"
  } else if (index==1){
    return "exespack"
  } else if (index===2){
    return 'starterPack'
  } else if (index===3){
    return "firstdatepack"
  } else if (index===4){
    return 'gratitudepack'
  } else if (index===5){
    return 'solopack'
  } else if (index===6){
    return 'familypack'
  } else if (index===7){
    return "friendspack"
  } else if (index===8){
    return "couplepack"
  }
}



const PackScreen = (props) => {
  // Pack Index
  const [packIndex,setPackIndex] = React.useState(4)

  // Data Layer
  DATA_LAYER = React.useContext(DataLayerContext)
  


  // const scrollX = React.useRef(new Animated.Value(0)).current
  
  // ADDED To make it start in middle
  const initialIndex = 4;
  const scrollX = React.useRef(new Animated.Value(initialIndex * ITEM_SIZE)).current;



  const Item_Size = new Animated.Value(ITEM_SIZE)
  React.useEffect(() => {
    scrollX.addListener(val => {
      // Divides Scrollx by the size of each item 
      const x = Animated.divide(scrollX,Item_Size);
      // Gives index number of each 
      const indexNum= Math.round(Number.parseFloat(JSON.stringify(x)));
      const pack = Index_to_Pack(indexNum)
      setPackIndex(indexNum);
      DATA_LAYER.setSelectPack(pack)

    });
  }, []);
  // const itemindex = scrollX.interpolate({
  //   inputRange:[0,ITEM_SIZE,ITEM_SIZE*2,ITEM_SIZE*3,ITEM_SIZE*4,ITEM_SIZE*5,ITEM_SIZE*6,ITEM_SIZE*7,ITEM_SIZE*8],
  //   outputRange:[0,1,2,3,4,5,6,7,8],
  // })
  // React.useEffect(() => {
  //   itemindex.addListener(val=>{
  //     const x=  Number.parseFloat(JSON.stringify(val))
  //     console.log(val)
  //   })
  // }, [])

  const StartHandler = (index)=>{
      props.navigation.replace('loadingscreen')

  }
 
  return (
    <>
      <View style={{...StyleSheet.absoluteFillObject,width:35,height:35,zIndex:1,margin:25}}>
       <TouchableOpacity onPress={()=>{
         props.navigation.replace('startscreen') }}>
         <Entypo name="home" size={35} color={Color.red}  />
       </TouchableOpacity>
     </View>
     <View style={{...StyleSheet.absoluteFillObject,width:35,height:35,left:width-60,zIndex:1,marginTop:25}}>
       <TouchableOpacity onPress={()=>{
         props.navigation.navigate('settings')
       }}>
         <MaterialIcons name="settings" size={35} color={Color.red}  />
       </TouchableOpacity>
     </View>
    <View style={styles.container}>
      <StatusBar hidden />
      <BackDrop data={Data} scrollX={scrollX}/>
      <LinearGradient
      colors={[ 'transparent',Color.red]}
      style={{
        height: BACKDROP_HEIGHT,
        width:width,
        position: 'absolute',
        bottom: 1000,
      }}/>
      <Animated.FlatList
      initialScrollIndex={initialIndex}
      getItemLayout={(data, index) => ({
        index,
        offset: ITEM_SIZE * index,
        length: data.length
      })}

      showsHorizontalScrollIndicator={false}
      data={Data}
      keyExtractor={(item)=>item.key}
      horizontal
      contentContainerStyle={{
        alignItems:'center'
      }}
      snapToInterval={ITEM_SIZE}
      decelerationRate={0}
      bounces={false}
      // Keeps track of moving x
      onScroll={Animated.event(
        [{nativeEvent:{contentOffset:{x:scrollX}}}],
        {useNativeDriver:true}
      )}
      scrollEventThrottle={16}
      renderItem={({item,index})=>{
        if (!item.poster){
          return <View style={{width:SPACER_ITEM_SIZE}}/>
        }
        // I Could use these bounds right for selecting the pack
        const inputRange = [
          (index-2)*ITEM_SIZE,
          (index-1)*ITEM_SIZE,
          (index)*ITEM_SIZE,
        ];
        // Makes the slides go up when on it
        const translateY = scrollX.interpolate({
          inputRange,
          outputRange:[150,100,150]
        })

        return (
          <View style={{width:ITEM_SIZE}}>
            <Animated.View style={{
              marginHorizontal:SPACING,
              padding:SPACING*2,
              alignItems:'center',
              backgroundColor:Color.red,
              borderRadius:34,
              transform:[{translateY}]
            }}>
              <Image source={item.pack} style={styles.posterImage}/>
              <Text style={{ fontSize: 20,color:Color.white,marginTop:10,fontFamily:'NunitoExtraBold'}} numberOfLines={1}>
                {item.title}
              </Text>
              <Text style={{textAlign:'center',fontFamily:'Nunito',color:Color.white,fontSize:13,padding:5,}} numberOfLines={3}>
                {item.description}
              </Text>
            </Animated.View>
          </View>)}}
        />
        <View style={{flex:.7,justifyContent:'center',alignItems:'center'}}>
          {/* <StartButton onPress={()=>{props.navigation.navigate('loadingscreen')}}bg={Color.red} fg={Color.white} text={'HOLD TO START'}fontSize={30} size={100}/> */}
          <TouchableOpacity style={{height:width/4}} onPress={()=>{StartHandler(packIndex)}}>
            <View style={{width:width/1.3,borderRadius:width/3,backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}}>
              <View style={{flex:1,backgroundColor:Color.red,width:width/1.35,borderRadius:width/3,marginVertical:4,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:25,fontFamily:'NunitoExtraBold',color:Color.white}}>HOLD TO START</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
    </View>
    
    </>
  )}
  const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    posterImage: {
      width: '100%',
      height: ITEM_SIZE * 1.2,
      resizeMode: 'cover',
      borderRadius: 24,
      margin: 0,
      marginBottom: 10,
    },
  })



export default PackScreen








































// /**
//  * Inspiration: https://dribbble.com/shots/8257559-Movie-2-0
//  *
//  */
// import Color from "../Colors/Color"
// import { Entypo,MaterialIcons } from '@expo/vector-icons'; 
// import * as React from 'react';
// import {
//   StatusBar,
//   Text,
//   View,
//   StyleSheet,
//   FlatList,
//   Image,
//   Dimensions,
//   Animated,
//   Platform,
//   ImageBackground,
// } from 'react-native';
// const { width, height } = Dimensions.get('window');

// import { TouchableOpacity} from 'react-native-gesture-handler'

// import { LinearGradient } from 'expo-linear-gradient';
// const SPACING = 10;
// const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
// const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 3;
// const BACKDROP_HEIGHT = height * 0.65;
// import {Data} from "../Data/PackInfo"
// // Componets
// import StartButton from "../Components/PackScreen/StartButton"
// const AnimatedPressable = Animated.createAnimatedComponent(TouchableOpacity);

// const Backdrop = ({ thedata, scrollX }) => {
//   return (
//     <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute',zIndex:0 }}>
//       <FlatList
//         data={thedata.reverse()}
//         keyExtractor={(item) => item.key + '-backdrop'}
//         removeClippedSubviews={false}
//         contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
//         renderItem={({ item, index }) => {
//           if (!item.poster) {
//             return null;
//           }
//           const translateX = scrollX.interpolate({
//             inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
//             outputRange: [0, width],
//             // extrapolate:'clamp'
//           });
//           return (
            
           
//             <Animated.View
//               removeClippedSubviews={false}
//               style={{
//                 position: 'absolute',
//                 width: translateX,
//                 height,
//                 overflow: 'hidden',
//               }}
//             >
//               <ImageBackground
//                 source={item.poster}
//                 style={{
//                   width,
//                   height: BACKDROP_HEIGHT,
//                   position: 'absolute',
//                 }}
//               >
//               </ImageBackground>
//             </Animated.View>
//           );
//         }}
//       />
     
    
//     </View>
//   );
// };

// export default function App(props) {
  
//   const scrollX = React.useRef(new Animated.Value(0)).current;


  
//   return (
//     <>
//     <View style={{...StyleSheet.absoluteFillObject,width:35,height:35,zIndex:1,margin:25}}>
//       <TouchableOpacity >
//         <Entypo name="home" size={35} color={Color.red}  />
//       </TouchableOpacity>
//     </View>
//     <View style={{...StyleSheet.absoluteFillObject,width:35,height:35,left:width-60,zIndex:1,marginTop:25}}>
//       <TouchableOpacity onPress={()=>{
//         props.navigation.navigate('settings')
//       }}>
//         <MaterialIcons name="settings" size={35} color={Color.red}  />
//       </TouchableOpacity>
//     </View>
//     <View style={styles.container}>
//        <LinearGradient
//         colors={[ '#C0485B','#A7001B',Color.red]}
//         style={{
//           height: (height-BACKDROP_HEIGHT),
//           width,
//           position: 'absolute',
//           bottom: 0,
//         }}
//       />
//       <Backdrop thedata={Data} scrollX={scrollX} />
//       <StatusBar hidden />
//       <Animated.FlatList
//         showsHorizontalScrollIndicator={false}
//         data={Data}
//         keyExtractor={(item) => item.key}
//         horizontal
//         bounces={false}
//         decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
//         renderToHardwareTextureAndroid
//         contentContainerStyle={{ alignItems: 'center' }}
//         snapToInterval={ITEM_SIZE}
//         snapToAlignment='start'
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         scrollEventThrottle={16}
//         renderItem={({ item, index }) => {
//           if (!item.poster) {
//             return <View style={{ width: EMPTY_ITEM_SIZE }} />;
//           }

//           const inputRange = [
//             (index - 2) * ITEM_SIZE,
//             (index - 1) * ITEM_SIZE,
//             index * ITEM_SIZE,
//           ];

//           const translateY = scrollX.interpolate({
//             inputRange,
//             outputRange: [100, 50, 100],
//             extrapolate: 'clamp',
//           });


//           return (
         
//             <View style={{ width: ITEM_SIZE,marginTop:50}}>
//               <Animated.View
//                 style={{
//                   marginHorizontal: SPACING,
//                   padding: SPACING*1.5 ,
                 
//                   alignItems: 'center',
//                   transform: [{ translateY }],
//                   backgroundColor: Color.red,
                 
//                   borderRadius: 34,
//                 }}
//               >
//                 <Image
//                   source={item.pack}
//                   style={styles.posterImage}
//                 />
//                 <Text style={{ fontSize: 20,color:Color.white,marginTop:10,fontFamily:'NunitoExtraBold'}} numberOfLines={1}>
//                   {item.title}
//                 </Text>
//                 <Text style={{textAlign:'center',fontFamily:'Nunito',color:Color.white,fontSize:13,padding:5,}} numberOfLines={3}>
//                 Wind down and prepare to have a deep conversation. This pack explore lifes deeper meaning and calls for self reflection. 
//                 </Text>
//               </Animated.View>
              
          
//             </View>
          
        
//           );
//         }}
//       />
     
//      <View style={{flex:.5,alignItems:'center',marginBottom:15,}}>
//             <StartButton onPress={()=>{props.navigation.navigate('loadingscreen')}}bg={Color.red} fg={Color.white} text={'HOLD TO START'}fontSize={30} size={100}/>
//         </View>
     
//     </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   posterImage: {
//     width: '100%',
//     height: ITEM_SIZE * 1.2,
//     resizeMode: 'cover',
//     borderRadius: 24,
//     margin: 0,
//     marginBottom: 10,
//   },
// });