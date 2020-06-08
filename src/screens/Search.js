import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Searchbar, withTheme, Colors } from "react-native-paper";
import { RelatedNews, SkeletonList } from "../components";
import axios from "axios";
import Snackbar from "react-native-snackbar";

class SearchScreen extends Component {
  state = {
    query: "",
    loading: false,
    results: null,
    autoComplete: [],
    page: 1
  };
  _autoComplete = query => {

    axios({
      method: "get",
      url: "",
      timeout: 7000,
      params: {
        country: "ng",
        q: query
      }
    })
      .then(res => {})
      .catch(e => {});
  };
  _search = q => {
    this.setState({ query: q, loading: true });
    const { page, query } = this.state;
    axios({
      method: "get",
      url: `https://newsapi.org/v2/everything?apiKey=aa584c99aaa247f6a19a428f75a4e9bf`,
      timeout: 7000,
      params: {
        q: query,
        qInTitle: query,
        sortBy: "relevancy",
        pageSize: page
      }
    })
      .then(res => {
        const results = res.data.articles;
        this.setState({ results, loading: false });
      })
      .catch(e => {
        const { message } = e;
        this.setState({ error: message });
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
        this._search(this.state.query);
      }
    );
  };
  render() {
    const { query, loading, autoComplete, results } = this.state;
    const { background } = this.props.theme.colors;
    return (
      <View style={{ backgroundColor: background }}>
        <Searchbar
          placeholder="Search"
          onChangeText={query => {
            this.setState({ query });
          }}
          value={query}
          icon="arrow-back"
          onIconPress={() => this.props.navigation.goBack()}
          inputStyle={{
            fontFamily: "Poppins-Regular",
            marginTop: 5
          }}
          autoFocus
          style={{ borderRadius: 0 }}
          returnKeyType="search"
          onSubmitEditing={() => this._search(query)}
        />
        <ScrollView style={{ padding: 10 }}>
          {loading ? (
            <SkeletonList />
          ) : (
            <RelatedNews
              data={results}
              handleLoadMore={() => this._handleMore}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}
export default withTheme(SearchScreen);
const styles = StyleSheet.create({});
