import React from 'react';

import { Snackbar, CircularProgress } from 'material-ui';
import TeamTable from "./TeamTable";
import EditDialog from "./EditDialog";

class TeamMembers extends React.Component {
    state = {
        team: [],
        message: "",
        error: false,
        showSnackbar: false,
        showEditDialog: false,
        isFetching: true,
        currentEdit: null
    };


    setTeam = team => {
        this.setState({
            team,
            isFetching: false
        });
    };

    showMessage = message => {
        this.setState({
            showSnackbar: true,
            message
        });
    };

    setError = message => {
        this.setState({
            error: true,
            showSnackbar: true,
            message
        });
    };

    hideSnackbar = _ => {
        this.setState({
            error: false,
            showSnackbar: false
        });
    };

    getTeamFromServer() {
        fetch('http://localhost:9001/team', {
            method: 'GET',
            mode: 'cors'
        })
        .then(response => response.json())
        .then(json => this.setTeam(json.data))
        .catch(err => this.setError(err))
    }

    onMemberDelete = index => {
        fetch(`http://localhost:9001/team/${index}`, {
            method: 'DELETE',
            mode: 'cors'
        })
        .then(response => response.json())
        .then(({data}) => {
            if(data.ok) {
                this.showMessage("Integrante eliminado.");
                this.getTeamFromServer();
            }
            else
                this.setError("Ha ocurrido un error al eliminar un integrante.");
        })
        .catch(err => this.setError(err))
    };

    showEditDialog = (index) => {
        this.setState({
            showEditDialog: true,
            currentEdit: index
        })
    };

    onEditDialogClose = () => {
        this.setState({
            showEditDialog: false,
            currentEdit: null
        })
        this.getTeamFromServer();
    };

    componentDidMount(){
        this.getTeamFromServer()
    }

    render() {
        const { showSnackbar, showEditDialog, error, message, team, isFetching, currentEdit } = this.state;

        return (
            <div>
                {isFetching && <CircularProgress />}
                {!isFetching && !error && <TeamTable team={team} onMemberEdit={this.showEditDialog} onMemberDelete={this.onMemberDelete} />}
                <EditDialog open={showEditDialog} editIndex={currentEdit} handleClose={this.onEditDialogClose} />
                <Snackbar open={showSnackbar} message={message} autoHideDuration={2000} onRequestClose={this.hideSnackbar} />
            </div>
        );
    }
}

export default TeamMembers;