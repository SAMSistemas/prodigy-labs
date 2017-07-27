import React from 'react';
import { Dialog } from 'material-ui';

import EditMember from './EditMember';


const EditDialog = ({handleClose, open, editIndex}) => (
    <Dialog
        title="Edit Member"
        modal={false}
        open={open}
        onRequestClose={handleClose}
    >
        <EditMember editIndex={editIndex} onComplete={handleClose} />
    </Dialog>
)


export default EditDialog;