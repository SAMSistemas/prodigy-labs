import React, {Component} from 'react';
import Routes from './Routes';
import {MuiThemeProvider} from 'material-ui'
import { lightBlack, black, fullWhite } from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

const theme = getMuiTheme({
    fontFamily: 'Roboto, Arial, sans-serif',
    palette: {
        primary1Color: "#303030",
        primary2Color: "#FEE000",
        primary3Color: '#B4B5AE',
        accent1Color: "#FEE000",
        accent2Color: '#C1C2BC',
        accent3Color: '#555555',
        textColor: '#333333',
        secondaryTextColor: fade(fullWhite, 0.7),
        alternateTextColor: '#fff',
        canvasColor: '#f8f7f2',
        borderColor: fade(black, 0.3),
        disabledColor: fade(lightBlack, 0.3),
        pickerHeaderColor: fade(fullWhite, 0.12),
        clockCircleColor: fade(fullWhite, 0.12),
    },
    appBar: {
        height: 72,
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <Routes/>
            </MuiThemeProvider>
        );
    }
}

export default App;
