import React from "react";
import { Share, View, Button, Image } from "react-native";

const ShareAlert = async () => {
  try {
    const result = await Share.share({
      message: "https://www.tipsyflamingos.com/",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

export default ShareAlert;