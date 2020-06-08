import { createStackNavigator } from "react-navigation";
import { createFluidNavigator } from "react-navigation-fluid-transitions";
import {
  SettingsScreen,
  NewsScreen,
  LatestScreen,
  Home,
  SearchScreen,
  NewsWeb
} from "../screens";
import {
  fromBottom,
  fromLeft,
  fromRight,
  fromTop
} from "react-navigation-transitions";

const RouteConfigs = {
  home: {
    screen: Home
  },
  settings: {
    screen: SettingsScreen
  },
  news: {
    screen: NewsScreen
  },
  newsweb: {
    screen: NewsWeb
  },
  search: {
    screen: SearchScreen
  }
};

const StackNavigatorConfigs = {
//   initialRouteName: "search",
  initialRouteName: 'home',
  transitionConfig: () => fromRight(400),
  navigationOptions: {
    header: null
  }
};
export default (Stack = createFluidNavigator(
  RouteConfigs,
  StackNavigatorConfigs
));
