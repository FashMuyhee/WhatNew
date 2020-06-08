import React, { Component } from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import {
  Caption,
  Subheading,
  TouchableRipple,
  Colors,
  Text
} from "react-native-paper";
import car from "../assets/img/car.jpg";
import moment from "moment";
// const { date, title, author, urlToImage } = props;

import { withNavigation } from "react-navigation";
import LoadMoreFooter from "./LoadMoreFooter";

class RelatedNews extends Component {
  _renderList = ({ item, index }) => {
    const { routeName } = this.props.navigation.state;
    return (
      <TouchableRipple
        onPress={() =>
          this.props.navigation.navigate("newsweb", {
            routeName,
            url: item.url
          })
        }
        rippleColor="white"
      >
        <View style={styles.card}>
          <Image source={{ uri: item.urlToImage }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Subheading>
              {item.title.length > 30
                ? item.title.substring(0, 30) + "...."
                : item.title}
            </Subheading>
            <Caption style={styles.cardSubheader}>
              {moment(item.publishedAt).format("dddd MMMM Do YYYY")}
            </Caption>
            <Caption style={styles.cardMeta}>{item.author}</Caption>
          </View>
        </View>
      </TouchableRipple>
    );
  };
  render() {
    return !this.props.data ? (
      <FlatList
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          height: "100%",
          width: "100%"
        }}
        data={this.props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderList}
        onEndReached={this.props.handleLoadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        ListFooterComponent={<LoadMoreFooter loading={this.props.loading} />}
      />
    ) : (
      <View style={styles.noResult}>
        <Text>Sorry we can't Find what you're looking for</Text>
      </View>
    );
  }
}

export default withNavigation(RelatedNews);

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    backgroundColor: "white",
    width: "100%",
    height: 110,
    borderRadius: 10,
    flexDirection: "row",
    flex: 1,
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.grey200
  },
  cardImage: {
    width: "30%",
    height: 110,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: "relative",
    resizeMode: "cover",
    zIndex: 1
  },
  cardContent: {
    position: "relative",
    width: "70%",
    padding: 10
  },
  cardHeader: {
    fontFamily: "Poppins-Bold"
  },
  noResult: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  }
});
