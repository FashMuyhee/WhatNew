import React from "react";
import { View, Text } from "react-native";
import { Colors, ActivityIndicator } from "react-native-paper";

const LoadMoreFooter = props => {
  if (!props.loading) return null;
  return (
    <View
      style={{
        position: "relative",
        width: "100%",
        paddingVertical: 20,
        marginTop: 5,
        marginBottom: 5
      }}
    >
      <ActivityIndicator animating size="small" color={Colors.blue700} />
    </View>
  );
};

export default LoadMoreFooter;
