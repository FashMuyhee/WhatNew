import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { withTheme, Headline, Text } from "react-native-paper";
import { AppBar, NewsCard, RelatedNews } from "../components";

class FashionScreen extends Component {
    state = {
        news: [
            {
                id: 1,
                title:
                    "Aliqua dolor occaecat aliquip cupidatat adipisicing voluptate excepteur nisi enim ad laboris nostrud.1",
                description:
                    "Enim tempor et est sit ut adipisicing excepteur nostrud quis irure sit. Cupidatat et eiusmod eu eiusmod est elit cillum velit excepteur laboris eiusmod quis cupidatat. Velit enim irure mollit id tempor amet exercitation",
                date: "Wed 23,June 2019 10:14 AM",
                author: "Fash Muyhee"
            },
            {
                id: 2,
                title:
                    "Est aliquip aliquip culpa aute quis nulla esse ut dolore culpa non est occaecat.2",
                description:
                    "Ad incididunt ad ipsum labore est sit officia pariatur laborum exercitation aute esse ullamco non. Non aute in ipsum est proident do culpa exercitation Lorem qui commodo nostrud. Enim consectetur ad consequat labore aliqua docupidatat magna.",
                date: "Thur 25,June 2319 10:14 AM",
                author: "Fash Muyhee"
            },
            {
                id: 3,
                title:
                    "Ut ullamco adipisicing velit commodo ea culpa laboris labore nulla Lorem ea.3",
                description:
                    "Velit eiusmod pariatur ex fugiat non cillum sint minim. Ipsum deserunt sint elit labore proident est fugiat ullamco occaecat excepteur. Sunt ipsum duis id elit sit. Adipisicing exercitation nulla velit ullamco excepteur mollit irure.",
                date: "Fri 25,June 2019 10:14 AM",
                author: "Fash Muyhee"
            },
            {
                id: 4,
                title:
                    "Ut ullamco adipisicing velit commodo ea culpa laboris labore nulla Lorem ea.3",
                description:
                    "Velit eiusmod pariatur ex fugiat non cillum sint minim. Ipsum deserunt sint elit labore proident est fugiat ullamco occaecat excepteur. Sunt ipsum duis id elit sit. Adipisicing exercitation nulla velit ullamco excepteur mollit irure.",
                date: "Fri 25,June 2019 10:14 AM",
                author: "Fash Muyhee"
            }
        ]
    };
    render() {
        const { news } = this.state;
        return (
            <ScrollView style={styles.container}>
                <NewsCard data={this.state.news} />
                <Headline style={styles.title}>Related News</Headline>

                <View style={styles.container}>
                    {news.map(item => {
                        return (
                            <RelatedNews
                                title={item.title}
                                date={item.date}
                                author={item.author}
                                key={item.id}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        );
    }
}
export default withTheme(FashionScreen);
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10
    },
    title: {
        fontFamily: "JosefinSans",
        fontSize: 20,
        left: 50,
        paddingTop: 30
    }
});
