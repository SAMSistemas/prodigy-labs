import React, {Component} from 'react';
import Routes from './Routes';
import {MuiThemeProvider} from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Routes/>
            </MuiThemeProvider>
        );
    }
}

export default App;
