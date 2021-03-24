import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import Color from "../Colors/Color"
import AnimatedLoader from "../Components/LoadingScreen/AnimatedLoader"
import { DataLayerContext } from "../provider/DataLayer";

const ChooseQuote = (raw_quotes)=> {
    const obj = raw_quotes[Math.floor(Math.random() * raw_quotes.length)];
    return obj.qoutes
}

function Pack_to_Qoute(pack){
    if (pack ==='couplepack'){
        return 'couplequotes'
    } else if (pack ==='crisispack'){
        return 'crisisquotes'
    } else if (pack ==='exespack'){
        return 'exesquotes'
    } else if (pack ==='familypack') {
        return 'familyquotes'
    } else if (pack ==='firstdatepack'){
        return 'firstdatequotes'
    } else if (pack ==='friendspack'){
        return 'friendsquotes'
    } else if (pack ==='gratitudepack'){
        return 'gratitudequotes'
    } else if (pack ==='solopack'){
        return 'soloquotes'
    } else if (pack ==='starterPack'){
        return 'starterquotes'
    }
}

const Loading = (props) => {
    // Data Layer
    DATA_LAYER = useContext(DataLayerContext)
    selectedpack = DATA_LAYER.selectedPack
    selectedquote = Pack_to_Qoute(selectedpack)
    raw_quotes = DATA_LAYER.DataDic[selectedquote]
    quote = ChooseQuote(raw_quotes)



    // Choose other Color
    const OtherColor = (color)=>{
        if (color===Color.red){
            return Color.white
        } else{
            return Color.red
        }
    }
    const otherColor = OtherColor(DATA_LAYER.firstColor)

    return (
        <View style={{flex:1,backgroundColor:DATA_LAYER.firstColor,}}>
            <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                <View >
                    <Text style={{fontSize:30,color:otherColor,textAlign:'center',fontFamily:'NunitoExtraBold'}}> 
                    {quote}
                    </Text>
                </View>
            </View>
            <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                <AnimatedLoader color={otherColor} navigation={props.navigation}/>
            </View>
        </View>
    )
}

export default Loading
