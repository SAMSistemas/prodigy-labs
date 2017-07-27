import React from 'react';
import { TextField, DatePicker, RaisedButton } from 'material-ui';

class MemberForm extends React.Component {
    render() {
        const { onRef, onSubmit } = this.props;
        return (
            <form ref={onRef} onSubmit={onSubmit}>
                <TextField name="name" hintText="Name" />
                <br/>
                <TextField name="lastName" hintText="Last Name" />
                <br/>
                <DatePicker name="birth" hintText="Birth Date" />
                <br />
                <RaisedButton label="Submit" type="submit"/>
            </form>
        )
    }
}


export default MemberForm;