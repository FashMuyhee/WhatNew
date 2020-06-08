import React from 'react'
import { createDrawerNavigator, DrawerItems, SafeAreaView } from "react-navigation";
import { SettingsScreen } from "../screens";
import Icon from "react-native-vector-icons/MaterialIcons"
import { Stack } from './index';
const CustomDrawerComponent = props => (

    <SafeAreaView style={{ marginTop: 40 }}>
        <DrawerItems {...props} />
    </SafeAreaView>
);

const RouteConfigs = {
    home: {
        screen: Stack,
        navigationOptions: {
            drawerLabel: "Home",
            drawerIcon: ({ tintColor }) => (
                <Icon name="home" size={24} color={tintColor} />
            )
        }
    },
    settings: {
        screen: SettingsScreen,
        navigationOptions: {
            drawerLabel: "Settings",
            drawerIcon: ({ tintColor }) => (
                <Icon name="settings" size={24} color={tintColor} />
            )
        }
    },

};

const DrawerNavigatorConfig = {
    initialRouteName: "home",
    contentComponent: CustomDrawerComponent,
    drawerBackgroundColor: "white",
    backBehavior: "initialRoute",
    contentOptions: {
        activeBackgroundColor: "white",
        itemsContainerStyle: {
            marginVertical: 0
        },

        iconContainerStyle: {
            opacity: 1,
        },
        labelStyle: {
            fontFamily: 'JosefinSans',
            fontWeight: '400',
            fontSize: 20,

        }
    }
};
export default Drawer = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig)