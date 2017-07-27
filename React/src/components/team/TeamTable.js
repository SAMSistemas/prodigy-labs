import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui';

import TeamRow from './TeamRow';

const TeamTable = ({team, onMemberEdit, onMemberDelete}) => (
    <Table>
        <TableHeader displaySelectAll={false}>
            <TableRow>
                <TableHeaderColumn>Posición</TableHeaderColumn>
                <TableHeaderColumn>Nombre</TableHeaderColumn>
                <TableHeaderColumn>Apellido</TableHeaderColumn>
                <TableHeaderColumn>Fecha de nacimiento</TableHeaderColumn>
                <TableHeaderColumn>Editar</TableHeaderColumn>
                <TableHeaderColumn>Borrar</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            {team.map((teamMember, index) => (
                <TeamRow key={index} position={index} teamMember={teamMember} onEdit={onMemberEdit} onDelete={onMemberDelete} />
            ))}
        </TableBody>
    </Table>
);


export default TeamTable;