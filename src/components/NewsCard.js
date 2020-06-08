import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import {
  Card,
  Text,
  Caption,
  Paragraph,
  Subheading,
  Colors,
  Title
} from "react-native-paper";
import { withNavigation } from "react-navigation";
import { Transition } from "react-navigation-fluid-transitions";
import moment from "moment";

const { width: viewportWidth } = Dimensions.get("window");
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

class NewsCard extends Component {
  _renderItem = ({ item, index }) => {
    const { description, title, publishedAt, author, urlToImage, url } = item;
    const { navigation } = this.props;
    const { routeName } = navigation.state;

    return (
      // <Transition shared="news">
      <Card
        style={styles.card}
        onPress={() => navigation.navigate("newsweb", { routeName, url })}
      >
        <Card.Cover
          source={{ uri: urlToImage }}
          style={{ height: 120, resizeMode: "center" }}
        />
        <Card.Content>
          <Subheading style={{ fontSize: 12 ,lineHeight:15}}>
            {title? title.substring(0, 150) + "....." : title}
          </Subheading>
          <Caption>{moment(publishedAt).format("dddd MMMM Do YYYY")}</Caption>
          <Caption style={{marginTop:-5}}>{author}</Caption>
          <Paragraph style={{ fontSize: 10 }}>
            {description ? description.substring(0, 50) + "....." : description}
          </Paragraph>
        </Card.Content>
      </Card>
      // </Transition>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          data={this.props.data}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          layout="default"
          // layoutCardOffset={5}
          autoplay={true}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={7000}
        />
      </View>
    );
  }
}
export default withNavigation(NewsCard);

const styles = StyleSheet.create({
  container: {},
  card: {
    marginTop: 20,
    height: 280,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.grey200,
    borderRadius: 15
  }
});
