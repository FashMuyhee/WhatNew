import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { LatestScreen, FashionScreen } from '../screens';


const RouteConfigs = {
    home: LatestScreen,
    fashion: FashionScreen,
    fashion: FashionScreen,
    fashion: FashionScreen,
    fashion: FashionScreen,
    fashion: FashionScreen,
}

const TabNavigatorConfig = {

}

export default Tab = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);