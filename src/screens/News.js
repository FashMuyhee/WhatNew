import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  ImageBackground
} from "react-native";
import {
  Appbar,
  Subheading,
  Title,
  Caption,
  Colors,
  Paragraph
} from "react-native-paper";
import { Transition } from "react-navigation-fluid-transitions";

const { width: viewportWidth, height: viewporHeight } = Dimensions.get(
  "window"
);
const imgHeight = (viewporHeight * 50) / 100;
class NewsScreen extends Component {
  state = {
    color: ""
  };

  render() {
    const { navigation } = this.props;
    // const { params } = navigation.state;

    return (
      <ScrollView
        onScroll={() => this.setState({ colors: "white" })}
        stickyHeaderIndices={[1]}
      >
        {/* <Transition shared="news"> */}

        <ImageBackground
          imageStyle={{ borderBottomLeftRadius: 50 }}
          source={require("../assets/img/jet.jpg")}
          style={styles.coverImage}
        >
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="dark-content"
          />
        </ImageBackground>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction
            onPress={() => navigation.navigate(params.routeName)}
            color="white"
          />
          <Appbar.Content />
        </Appbar.Header>

        {/* </Transition> */}
        <View style={styles.container}>
          <Title style={styles.title}>
            Aliqua minim nulla proident cillum nulla laboris minim mollit
            laborum id quis.
          </Title>
          <View style={styles.underline} />
          <Caption>by Joseph Frankline</Caption>
          <Caption>Wed, 12nd June 2100</Caption>
          <Paragraph>
            Commodo consectetur aliqua aliqua anim irure aute pariatur. Do
            aliquip adipisicing velit Lorem aliquip esse pariatur ex mollit
            quis. Nisi fugiat officia et consectetur voluptate veniam. Ea qui
            officia pariatur ex ipsum consequat sunt do officia sunt. Est enim
            eiusmod duis adipisicing ullamco irure eiusmod occaecat labore
            reprehenderit veniam aliquip consectetur cillum.
          </Paragraph>
          <Paragraph>
            Culpa enim anim velit irure ullamco laborum sint tempor voluptate ex
            reprehenderit aute ut exercitation. Dolor veniam et dolore Lorem
            eiusmod officia Lorem eu elit excepteur tempor mollit. Consequat ea
            ullamco nulla nulla proident deserunt. Mollit mollit Lorem cupidatat
            anim nisi aliquip et. Culpa anim pariatur laborum ut. Reprehenderit
            veniam reprehenderit cillum nisi. Ea excepteur velit consectetur
            sint veniam exercitation laborum duis anim sit non excepteur sint.
            Elit irure laboris adipisicing commodo deserunt sit irure. Esse est
            sint veniam sunt magna nulla ut et amet voluptate aute.
          </Paragraph>
          <Paragraph>
            Consequat consectetur dolore proident anim dolore officia ex irure
            incididunt ut duis Lorem ullamco. Labore eiusmod fugiat duis ea
            minim. Laboris irure labore consequat veniam amet reprehenderit
            dolor pariatur. Do reprehenderit nisi sunt qui anim. Esse cillum
            sunt quis do nulla irure proident eiusmod aliquip.
          </Paragraph>
          <Paragraph>
            Consequat consectetur dolore proident anim dolore officia ex irure
            incididunt ut duis Lorem ullamco. Labore eiusmod fugiat duis ea
            minim. Laboris irure labore consequat veniam amet reprehenderit
            dolor pariatur. Do reprehenderit nisi sunt qui anim. Esse cillum
            sunt quis do nulla irure proident eiusmod aliquip.
          </Paragraph>
          <Paragraph>
            Consequat consectetur dolore proident anim dolore officia ex irure
            incididunt ut duis Lorem ullamco. Labore eiusmod fugiat duis ea
            minim. Laboris irure labore consequat veniam amet reprehenderit
            dolor pariatur. Do reprehenderit nisi sunt qui anim. Esse cillum
            sunt quis do nulla irure proident eiusmod aliquip.
          </Paragraph>
          <Paragraph>
            Consequat consectetur dolore proident anim dolore officia ex irure
            incididunt ut duis Lorem ullamco. Labore eiusmod fugiat duis ea
            minim. Laboris irure labore consequat veniam amet reprehenderit
            dolor pariatur. Do reprehenderit nisi sunt qui anim. Esse cillum
            sunt quis do nulla irure proident eiusmod aliquip.
          </Paragraph>
        </View>
      </ScrollView>
    );
  }
}

export default NewsScreen;
const styles = StyleSheet.create({
  coverImage: {
    height: imgHeight,
    width: viewportWidth,
    resizeMode: "cover"
  },
  header: {
    // backgroundColor: "red",
    // marginTop: 30,
    top: 0,
    left: 0,
    zIndex: 100,
    position: "absolute",
    overflow: "hidden"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 20
  },
  title: {
    fontFamily: "JosefinSans"
  },
  underline: {
    height: 5,
    width: 100,
    backgroundColor: Colors.blue700,
    marginTop: 10,
    marginBottom: 10
  }
});
