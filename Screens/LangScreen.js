import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Color from "../Colors/Color"
// Components
import LangSettingsLang from "../Components/LangScreen/LangSettingsLang";


const LangSettings = (props) => {
  const languages = [
    ["English", "en"],
    ["EspaÃ±ol", "es"],
    ["Deutsche", "de"],
    ["FranÃ§ais", "fr"],
    ["Nederlands", "nl"],
    ["Italiano", "it"],
    ["æ—¥æœ¬äºº", "ko"],
    ["PortuguÃªs", "pt-pt"],
    ["æ—¥æœ¬äºº", "ja"],
    ["Polskie", "pl"],
    ["Dansk", "da"],
    ["Suomalainen", "fi"],
    ["ä¸­æ–‡", "zh-Hans"],
    ["Svenska", "sv"],
    ["Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ¸Ð¹", "uk"],
    ["RomÃ¢nÄƒ", "ro"],
    ["ç²µèªžã€‚", "yue"],
    ["Slovak", "sk"],
    ["SlovenÅ¡Äina", "sl"],
    ["Î•Î»Î»Î·Î½Î¹ÎºÎ¬", "el"],
    ["ÄŒeÅ¡tina", "cs"],
    ["×¢Ö´×‘×¨Ö´×™×ª", "he"],
    ["Magyar", "hu"],
    ["Norsk", "nb"],
    ["PÑƒÑÑÐºÐ¸Ð¹", "ru"],
    ["Tiáº¿ng Viá»‡t", "vi"],
  ];
  return (
    <View style={styles.main}>
      <View style={styles.backBtnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.goBack()}
        >
           <AntDesign name="back" size={30} color={Color.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.langContainer}>
        <ScrollView style={{ flex: 1, marginVertical: "2%" }}>
          {languages.map((lang) => (
            <LangSettingsLang key={lang} lang={lang[0]} code={lang[1]} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1,  },
  backBtnContainer: {
    flex: 1,

    justifyContent: "flex-end",
  },
  btn: { marginLeft: "12%", marginBottom: "3%" },
  langContainer: { flex: 5 },
});

export default LangSettings;