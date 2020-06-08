import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper';

class SettingsScreen extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Appbar.Header>
                    <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                    <Appbar.Content title="Settings" />

                </Appbar.Header>
            </View>
        )
    }
}

export default SettingsScreen
