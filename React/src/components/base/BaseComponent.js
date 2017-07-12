import React, {Component} from 'react';
import NavigationBar from './NavigationBar';

class BaseComponent extends Component {

    style = {
        display: 'table',
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#E0E0E0',
    }

    render() {
        return (
            <div>
                {this.props.children}
                <NavigationBar/>
            </div>
        );
    }
}

export default BaseComponent;