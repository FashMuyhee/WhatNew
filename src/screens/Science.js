import React, { Component } from "react";
import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { withTheme, Headline, Text, Colors } from "react-native-paper";
import {
  AppBar,
  NewsCard,
  RelatedNews,
  SkeletonCard,
  SkeletonList
} from "../components";
import axios from "axios";
import Snackbar from "react-native-snackbar";
class ScienceScreen extends Component {
  state = {
    news: [],
    related: [],
    page: 1,
    loadingMore: false,
    isLoadingNews: true,
    isLoadingRelated: true,
    error: null,
    refresh: false
  };
  _fetchLatest = () => {
    axios({
      method: "get",
      url: `https://newsapi.org/v2/top-headlines?country=ng&apiKey=aa584c99aaa247f6a19a428f75a4e9bf&pageSize=5&category=science`,
      timeout: 10000
    })
      .then(res => {
        const news = res.data.articles;
        this.setState({ news: news, isLoadingNews: false });
      })
      .catch(e => {
        
        this.setState({ error: e.message });
        Snackbar.show({
          title: this.state.error,
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: "black",
          action: {
            title: "Close",
            color: Colors.blue700,
            onPress: () => {
              false;
            }
          }
        });
      });
  };
  _fetchRelated = () => {
    const { related, page } = this.state;
    axios({
      method: "get",
      url: `https://newsapi.org/v2/top-headlines?apiKey=aa584c99aaa247f6a19a428f75a4e9bf&page=${page}&country=ng&category=science`,
      timeout: 10000
    })
      .then(res => {
        this.setState((prevState, nextProps) => ({
          related:
            page === 1
              ? Array.from(res.data.articles)
              : [...related, ...res.data.articles],
          isLoadingRelated: false,
          totalResults: res.data.totalResults
        }));
      })
      .catch(e => {
        
        this.setState({ error: e.message });
        Snackbar.show({
          title: this.state.error,
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: "black",
          action: {
            title: "Close",
            color: Colors.blue700,
            onPress: () => {
              false;
            }
          }
        });
      });
  };
  _handleMore = () => {
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loadingMore: true
      }),
      () => {
        this._fetchRelated();
      }
    );
  };
  _handleRefresh = () => {
    this.setState({ isLoadingNews: true, isLoadingRelated: true });
    this._fetchLatest();
    this._fetchRelated();
    this.setState({ refresh: false });
  };
  componentDidMount() {
    this._fetchLatest();
    this._fetchRelated();
  }
  render() {
    const {
      news,
      related,
      isLoadingNews,
      isLoadingRelated,
      loadingMore,
      refresh
    } = this.state;
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={this._handleRefresh}
          />
        }
      >
        {isLoadingNews ? <SkeletonCard /> : <NewsCard data={news} />}

        <Headline style={styles.title}>More News</Headline>

        <View style={styles.container}>
          {isLoadingRelated ? (
            <SkeletonList />
          ) : (
            <RelatedNews
              data={related}
              handleLoadMore={this._handleMore}
              loading={loadingMore}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}
export default withTheme(ScienceScreen);
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10
  },
  title: {
    fontFamily: "JosefinSans",
    fontSize: 20,
    left: 30,
    paddingTop: 30
  }
});
