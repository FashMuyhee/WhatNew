import React from 'react'
import { View, Text } from 'react-native'
import { Appbar } from 'react-native-paper';
import { withNavigation } from 'react-navigation'

const AppBar = (props) => {
    const { navigation } = props
    return (
        <View>
            <Appbar.Header>
                {/* <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} /> */}
                <Appbar.Content title={props.title} />
                <Appbar.Action icon="search" onPress={() => navigation.navigate('search')} />
            </Appbar.Header>

        </View>
    )
}

export default withNavigation(AppBar)
