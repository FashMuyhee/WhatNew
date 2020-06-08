import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeletonCard = () => {
    return (
        <SafeAreaView>
            <SkeletonPlaceholder>
                <View style={styles.image} />
                <View style={styles.topic} />
                <View style={styles.caption} />
                <View style={styles.caption} />
                <View style={styles.text} />
                <View style={styles.text} />
            </SkeletonPlaceholder>
        </SafeAreaView>
    )
}

export default SkeletonCard
const styles = StyleSheet.create({
    image: {
        width: "90%",
        height: 140,
        alignSelf: 'center',
        marginBottom: 5,

    },
    text: {
        width: '90%',
        height: 15,
        alignSelf: 'center',
        marginBottom: 5,
    },
    topic: {
        width: '90%',
        height: 15,
        alignSelf: 'center',
        marginBottom: 5,

    },
    caption: {
        width: '40%',
        height: 10,
        marginBottom: 5,
        marginLeft: 18
        // alignSelf: 'flex-start'
    },

})