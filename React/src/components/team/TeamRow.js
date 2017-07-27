import React from 'react';
import { TableRow, TableRowColumn, FontIcon, IconButton } from 'material-ui';

const TeamRow = ({position, teamMember, onDelete}) => (
    <TableRow>
        <TableRowColumn>{position}</TableRowColumn>
        <TableRowColumn>{teamMember.name}</TableRowColumn>
        <TableRowColumn>{teamMember.lastName}</TableRowColumn>
        <TableRowColumn>
            <IconButton onClick={_ => onDelete(position)}>
                <FontIcon className="material-icons">delete</FontIcon>
            </IconButton>
        </TableRowColumn>
    </TableRow>
);

export default TeamRow;