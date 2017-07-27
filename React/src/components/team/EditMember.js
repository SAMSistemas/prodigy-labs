import React, { Component } from 'react';
import { Snackbar } from 'material-ui';

import MemberForm from './MemberForm';

class EditMember extends Component {

    state = {
        showSnackbar: false,
        message: ""
    };

    validate = (formData) => {
        const { name, lastName, birth } = formData;

        if(!name) {
            this.showSnackbar("El nombre no puede estar vacio!")
            this.form.name.focus();
            return false;
        }
        else if(!lastName) {
            this.showSnackbar("El apellido no puede estar vacio!")
            this.form.lastName.focus();
            return false;
        }
        else if(!birth) {
            this.showSnackbar("La fecha de nacimiento no puede estar vacia!")
            this.form.birth.focus();
            return false;
        }
        return true;

    };

    showSnackbar = message => {
        this.setState({
            message,
            showSnackbar: true
        });
    };

    hideSnackbar = () => {
        this.setState({
            showSnackbar: false
        });
    };

    onSubmit = (event) => {
        event.preventDefault();

        const { name, lastName, birth } = this.form;
        const { editIndex, onComplete } = this.props;

        const formData = {
            name: name.value,
            lastName: lastName.value,
            birth: birth.value
        };

        if(this.validate(formData)) {
            fetch(`http://localhost:9001/team/${editIndex}`, {
                method: "PUT",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.json())
                .then(({data}) => {
                    if(data.ok) {
                        this.showSnackbar("Modificado correctamente.");
                        this.form.reset();
                        onComplete();
                    }
                    else
                        this.showSnackbar("He ocurrido un error.");
                });
        }


    };

    render() {
        const { showSnackbar, message } = this.state;
        return (
            <div style={{display: "block", textAlign: "center", padding: "15%"}}>
                <MemberForm onRef={form => this.form = form} onSubmit={this.onSubmit} />
                <Snackbar open={showSnackbar} message={message} autoHideDuration={2000} onRequestClose={this.hideSnackbar} />
            </div>
        )

    }
}


export default EditMember;