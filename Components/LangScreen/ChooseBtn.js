import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Chosen from "../../assets/LangScreen/Chosen";
import NotChosen from "../../assets/LangScreen/NotChosen";

const ChooseBtn = (props) => {
    // Make onPress make language code 
  return (
    <TouchableOpacity onPress={()=>{}}>
      {props.code === 1? <Chosen /> : <NotChosen />}
      
    </TouchableOpacity>
  );
};

export default ChooseBtn;