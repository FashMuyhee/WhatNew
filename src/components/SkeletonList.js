import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { Colors } from 'react-native-paper'

const SkeletonList = () => {
    return (
        <SafeAreaView>
            <SkeletonPlaceholder>
                {
                    [0, 1, 2, 3, 4].map((_, index) => (
                        <View key={index} style={styles.list}>
                            <View style={styles.image} />
                            <View style={{ width: '70%', padding: 20 }}>
                                <View style={styles.topic} />
                                <View style={styles.topic} />
                                <View style={styles.caption} />
                                <View style={styles.caption} />
                            </View>
                        </View>
                    ))
                }
            </SkeletonPlaceholder>
        </SafeAreaView>
    )
}

export default SkeletonList
const styles = StyleSheet.create({
    list: {
        width: '100%',
        height: 110,
        borderRadius: 10,
        flexDirection: "row",
        flex: 1,
        borderWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: Colors.grey200,
        marginBottom:5
    },
    image: {
        width: "30%",
        height: 110,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    topic: {
        width: '90%',
        height: 15,
        marginBottom: 5,

    },
    caption: {
        width: '40%',
        height: 10,
        marginBottom: 5,
        // alignSelf: 'flex-start'
    },

})