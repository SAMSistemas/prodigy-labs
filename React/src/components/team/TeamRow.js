import React from 'react';
import { TableRow, TableRowColumn, FontIcon, IconButton } from 'material-ui';
import moment from 'moment';

const TeamRow = ({position, teamMember, onEdit, onDelete}) => (
    <TableRow>
        <TableRowColumn>{position}</TableRowColumn>
        <TableRowColumn>{teamMember.name}</TableRowColumn>
        <TableRowColumn>{teamMember.lastName}</TableRowColumn>
        <TableRowColumn>{moment(teamMember.birth).format("DD/MM/YYYY")}</TableRowColumn>
        <TableRowColumn>
            <IconButton onClick={_ => onEdit(position)}>
                <FontIcon className="material-icons">edit</FontIcon>
            </IconButton>
        </TableRowColumn>
        <TableRowColumn>
            <IconButton onClick={_ => onDelete(position)}>
                <FontIcon className="material-icons">delete</FontIcon>
            </IconButton>
        </TableRowColumn>
    </TableRow>
);

export default TeamRow;