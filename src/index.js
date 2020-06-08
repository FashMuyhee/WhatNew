import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Drawer, Tab } from './navigation'
import { Provider, DarkTheme, DefaultTheme, withTheme, Colors } from 'react-native-paper';
import { NewsScreen } from './screens';
class Main extends Component {

    render() {
        const lightTheme = {
            ...DefaultTheme,
            colors: {
                ...DefaultTheme.colors,
                accent: Colors.blue700,
                primary: Colors.white,
                background: Colors.white
            },
            fonts: {
                regular: 'Poppins-Regular',
                light: 'Poppins-Light',

            }
        }

        /* const darkTheme = {
            ...DarkTheme,
            colors: {
                ...DarkTheme.colors,
                accent: Colors.blue700,
                primary: Colors.white,
            },
            fonts: {
                regular: 'Poppins'
            }
        } */

        return (
            <Provider theme={lightTheme}>
                <Drawer />
                {/* <NewsScreen/> */}
            </Provider>
        )
    }
}
export default withTheme(Main)