import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { withTheme, Colors } from "react-native-paper";
import { AppBar } from "../components";
import {
  ScrollableTabView,
  ScrollableTabBar,
} from "@valdio/react-native-scrollable-tabview";
import {
  FashionScreen,
  LatestScreen,
  BusinessScreen,
  HealthScreen,
  TechnologyScreen,
  EntertainmentScreen,
  SportScreen,
  ScienceScreen,
} from ".";

class Home extends Component {
  render() {
    const { background } = this.props.theme.colors;

    return (
      <View style={{ backgroundColor: background, flex: 1 }}>
        <AppBar title="Home"/>
        <ScrollableTabView
          style={styles.tab}
          initialPage={0}
          renderTabBar={() => (
            <ScrollableTabBar styles={{ borderColor: "white" }} />
          )}
          tabBarUnderlineStyle={styles.tabUnderline}
          tabBarBackgroundColor="white"
          tabBarActiveTextColor="black"
          tabBarInactiveTextColor={Colors.grey300}
          tabBarTextStyle={styles.tabText}
          locked={true}
        >
          <LatestScreen tabLabel="Latest" />
          {/*  <FashionScreen tabLabel="Fashion" /> */}
          <BusinessScreen tabLabel="Business" />
          <EntertainmentScreen tabLabel="Entertainment" />
          <SportScreen tabLabel="Sport" />
          <TechnologyScreen tabLabel="Technology" />
          <ScienceScreen tabLabel="Science" />
          <HealthScreen tabLabel="Health" />
        </ScrollableTabView>
      </View>
    );
  }
}
export default withTheme(Home);
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
  },
  title: {
    fontFamily: "JosefinSans",
    fontSize: 40,
    left: 30,
    paddingTop: 30,
  },
  tab: {
    paddingTop: 20,
    backgroundColor: "white",
  },
  tabUnderline: {
    backgroundColor: Colors.blue700,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginLeft: 50,
    marginBottom: 5,
  },
  tabText: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    fontWeight: "300",
  },
});
