import React, { useState, useEffect } from "react";
const DataLayerContext = React.createContext();
import Color from "../Colors/Color"
// Packs 
import {CouplesPack} from "./Packs/CouplesPack"
import {CrisisPack} from "./Packs/CrisisPack"
import {ExesPack} from "./Packs/ExesPack"
import {FamilyPack} from "./Packs/FamilyPack"
import {FirstdatePack} from "./Packs/FirstdatePack"
import {FriendsPack} from "./Packs/FriendsPack"
import {GratitudePack} from "./Packs/GratitudePack"
import {SoloPack} from "./Packs/SoloPack"
import {StarterPack} from "./Packs/StarterPack"


import {CouplesQuotes} from "./Quotes/CouplesQuotes"
import {CrisisQuotes} from "./Quotes/CrisisQuotes"
import {ExesQuotes} from "./Quotes/ExesQuotes"
import {FamilyQuotes} from "./Quotes/FamilyQuotes"
import {FirstdateQuotes} from "./Quotes/FirstdateQuotes"
import {FriendsQuotes} from "./Quotes/FriendsQuotes"
import {GratitudeQuotes} from "./Quotes/GratitudeQuotes"
import {SoloQuotes} from "./Quotes/SoloQuotes"
import {StarterQuotes} from "./Quotes/StarterQuotes"


const DataLayerProvider = (props) => {
    // ---------Values----------
    // Color for the loading screen and first Card 
    const COLOR_LST = [Color.red,Color.white];
    const GetColor = ()=>{
        return COLOR_LST[Math.floor(Math.random() * COLOR_LST.length)]
    }
    const [firstColor,setFirstColor] = useState(GetColor())
    // Key for Language Selection
    const [Langkey, setLangKey] = useState("en");
    // Data Dictionary holds all data together
    const [DataDic, setDataDic] = useState({
      // Packs
      couplepack: CouplesPack['en'],
      crisispack: CrisisPack['en'],
      exespack: ExesPack['en'],
      familypack:FamilyPack['en'],
      firstdatepack: FirstdatePack['en'],
      friendspack: FriendsPack['en'],
      gratitudepack:GratitudePack['en'],
      solopack: SoloPack['en'],
      starterPack: StarterPack['en'],
      // Qoutes 
      couplequotes: CouplesQuotes['en'],
      crisisquotes: CrisisQuotes['en'],
      exesquotes: ExesQuotes['en'],
      familyquotes:FamilyQuotes['en'],
      firstdatequotes: FirstdateQuotes['en'],
      friendsquotes: FriendsQuotes['en'],
      gratitudequotes:GratitudeQuotes['en'],
      soloquotes: SoloQuotes['en'],
      starterquotes: StarterQuotes['en'],
    })
    // Selected Pack
    const [selectedPack, setSelectPack] = useState('couplepack');
  
  

    // -------------Values--------------

    // -------------UseEffect/Updates-----------
    useEffect(() => {
      setDataDic({
      // Packs
      couplepack: CouplesPack[Langkey],
      crisispack: CrisisPack[Langkey],
      exespack: ExesPack[Langkey],
      familypack:FamilyPack[Langkey],
      firstdatepack: FirstdatePack[Langkey],
      friendspack: FriendsPack[Langkey],
      gratitudepack:GratitudePack[Langkey],
      solopack: SoloPack[Langkey],
      starterPack: StarterPack[Langkey],
      // Quotes
      couplequotes: CouplesQuotes[Langkey],
      crisisquotes: CrisisQuotes[Langkey],
      exesquotes: ExesQuotes[Langkey],
      familyquotes:FamilyQuotes[Langkey],
      firstdatequotes: FirstdateQuotes[Langkey],
      friendsquotes: FriendsQuotes[Langkey],
      gratitudequotes:GratitudeQuotes[Langkey],
      soloquotes: SoloQuotes[Langkey],
      starterquotes: StarterQuotes[Langkey],
    })
     
    }, [Langkey])

    // -------------UseEffect/Updates-----------
    
    
    return (
      <DataLayerContext.Provider
        value={{
            firstColor, 
            DataDic,
            selectedPack,
            setSelectPack
        }}
      >
        {props.children}
      </DataLayerContext.Provider>
    );
  };

  export { DataLayerProvider, DataLayerContext }