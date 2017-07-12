import React, {Component} from 'react';
import {BottomNavigation} from 'material-ui/BottomNavigation';
import MenuButton from './NavigationMenu';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Person from 'material-ui/svg-icons/social/person';
import FavIcon from 'material-ui/svg-icons/action/stars';
import {withRouter} from 'react-router'

const teamMembersIcon = <Person />;
const addMemberIcon = <PersonAdd />;
const favIcon = <FavIcon />;

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        };
    }

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <BottomNavigation
                style={{position: 'absolute', bottom: '0px'}}
                selectedIndex={this.state.selectedIndex}>

                <MenuButton
                    label="Team members"
                    icon={teamMembersIcon}
                    onTouch={() => this.props.router.push('/home/teamMembers')}
                />
                <MenuButton
                    label="Add member"
                    icon={addMemberIcon}
                    onTouch={() => this.select(1)}
                />
                <MenuButton
                    label="Favorites"
                    icon={favIcon}
                    onTouch={() => this.select(2)}
                />
            </BottomNavigation>
        );
    }
}

export default withRouter(NavigationBar);