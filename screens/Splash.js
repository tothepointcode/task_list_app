import React from "react";
import { View, Text } from "react-native";

// Styles
import { taskStyles } from "../shared/appStyles";

const Splash = () => {
  return (
    <View
      style={[
        taskStyles.body,
        { justifyContent: "center", alignItems: "center" }
      ]}
    >
      <Text style={taskStyles.head}>Task List</Text>
      <Text style={taskStyles.head}>. . .</Text>
    </View>
  );
};

export default Splash;
