import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui';

import TeamRow from './TeamRow';

const TeamTable = ({team, onMemberDelete}) => (
    <Table>
        <TableHeader displaySelectAll={false}>
            <TableRow>
                <TableHeaderColumn>Position</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Last Name</TableHeaderColumn>
                <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            {team.map((teamMember, index) => (
                <TeamRow key={index} position={index} teamMember={teamMember} onDelete={onMemberDelete} />
            ))}
        </TableBody>
    </Table>
);


export default TeamTable;