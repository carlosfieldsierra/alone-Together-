import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ChooseBtn from"./ChooseBtn"

const LangSettingsLang = (props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.langText}>{props.lang}</Text>
      <View>
        <ChooseBtn code={props.code} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: "10%",
    padding: 10,
    borderBottomColor: "#313133",
    borderBottomWidth: 2,
  },
  langText: {
    fontFamily: "Nunito",
    color: "white",
    fontSize: 18,
  },
});

export default LangSettingsLang;