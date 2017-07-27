import React from 'react'
import {
    Router,
    Route,
    browserHistory,
    Redirect
} from 'react-router';
import BaseComponent from './components/base/BaseComponent'
import TeamMembers from './components/team/TeamMembers'
import AddMember from './components/team/AddMember';


const Routes = () => (
    <Router history={browserHistory}>
        <Redirect from="/" to="/home"/>
        <Route path="/login"/>
        <Route path="/home" component={BaseComponent}>
            <Route path="teamMembers" component={TeamMembers}/>
            <Route path="addMember" component={AddMember}/>
        </Route>
    </Router>
);

export default Routes