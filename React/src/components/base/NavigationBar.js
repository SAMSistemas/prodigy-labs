import React, {Component} from 'react';
import {BottomNavigation} from 'material-ui/BottomNavigation';
import MenuButton from './NavigationMenu';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Person from 'material-ui/svg-icons/social/person';
import {withRouter} from 'react-router'

const teamMembersIcon = <Person />;
const addMemberIcon = <PersonAdd />;

class NavigationBar extends Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        const { selectedIndex } = this.state;
        const { router } = this.props;
        return (
            <BottomNavigation
                style={{position: 'absolute', bottom: '0px'}}
                selectedIndex={selectedIndex}>

                <MenuButton
                    label="Team members"
                    icon={teamMembersIcon}
                    onTouch={() => router.push('/home/teamMembers')}
                />
                <MenuButton
                    label="Add member"
                    icon={addMemberIcon}
                    onTouch={() => router.push('/home/addMember')}
                />

            </BottomNavigation>
        );
    }
}

export default withRouter(NavigationBar);