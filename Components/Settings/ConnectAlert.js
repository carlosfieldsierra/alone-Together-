import React, { useContext } from "react";
import { View, Text, Alert } from "react-native";
import * as Linking from "expo-linking";

const ConnectAlert = (connect, connect_desc, Done) => {
  Alert.alert(
    connect,
    connect_desc,
    [
      {
        text: "Instagram",
        onPress: () =>
          Linking.openURL("https://www.instagram.com/flamingo_party_app/"),
      },
      {
        text: "Tiktok",
        onPress: () =>
          Linking.openURL("https://www.tiktok.com/@tipsy_flamingo"),
      },
      {
        text: "Facebook",
        onPress: () =>
          Linking.openURL("https://www.facebook.com/flamingodrinkingapp"),
      },
      {
        text: "Twitter",
        onPress: () => Linking.openURL("https://twitter.com/flamingo_apps"),
      },
      {
        text: "Done",

        style: "cancel",
      },

      {
        text: "Snapchat",
        onPress: () =>
          Linking.openURL("https://www.snapchat.com/add/tipsy_flamingos"),
      },
    ],
    { cancelable: false }
  );
};

export default ConnectAlert;