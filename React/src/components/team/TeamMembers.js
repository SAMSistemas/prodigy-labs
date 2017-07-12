import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class TeamMembers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    getData() {
        fetch('http://localhost:9001/team', {
            method: 'GET'
        }).then((response) => {
            if (!response.ok) return new Error(response);
            this.setState({data: response});
        })
    }

    componentWillMount(){
        this.getData()
    }

    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Last Name</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.state.data && this.state.data.map((row, index) => (
                        <TableRow>
                            <TableRowColumn>{index}</TableRowColumn>
                            <TableRowColumn>{row.name}</TableRowColumn>
                            <TableRowColumn>{row.lastname}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default TeamMembers;