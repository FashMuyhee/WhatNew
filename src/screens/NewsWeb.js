import React from "react";
import { View, Text, WebView } from "react-native";
import { Appbar } from "react-native-paper";

const NewsWeb = (props) => {
  const { params } = props.navigation.state;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* <Appbar.Header>
        <Appbar.BackAction
          onPress={() => navigation.navigate(params.routeName)}
        />
        <Appbar.Content title="Reading"/>
      </Appbar.Header> */}
      <WebView source={{ uri: params.url }} startInLoadingState/>
    </View>
  );
};

export default NewsWeb;
