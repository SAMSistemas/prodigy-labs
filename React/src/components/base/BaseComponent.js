import React, {Component} from 'react';
import NavigationBar from './NavigationBar';

class BaseComponent extends Component {
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