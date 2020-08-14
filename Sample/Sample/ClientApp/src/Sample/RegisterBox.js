import React, { Component } from 'react';
import { Icon, Header, Form, Grid, Button, Divider, Segment, Input, Modal } from 'semantic-ui-react';



export class RegisterBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            errors: [],
            openModal: true, 
        }
        this.xModal = this.xModal.bind(this)
    }

    xModal() {
        this.setState({ openModal: false })    
    }


    showValidationError(e, msg) {
        this.setState((prevState) => ({ errors: [...prevState.errors, { e, msg }] }))
    }

    clearValidationError(e) {
        this.setState((prevState) => {
            let newArray = [];
            for (let error of prevState.errors) {
                if (e != error.e) {
                    newArray.push(error);
                }
            }
            return { errors: newArray };
        })
    }

    onUsernameChange(x) {
        this.setState({ username: x.target.value })
        this.clearValidationError("username");
    }

    onEmailChange(x) {
        this.setState({ email: x.target.value })
        this.clearValidationError("email");
    }

    onPasswordChange(x) {
        this.setState({ password: x.target.value })
        this.clearValidationError("password");
    }

    submitRegister(x) {
        if (this.state.username == "") {
            this.showValidationError("username", "Invalid Username");
        } if (this.state.email == "") {
            this.showValidationError("email", "Invalid Email");
        } if (this.state.password == "")
            this.showValidationError("password", "Invalid Password");
    }

    render() {
        
        let usernameError = null, passwordError = null, emailError = null;

        for (let error of this.state.errors) {
            if (error.e == "username") {
                usernameError = error.msg;
            } if (error.e == "password") {
                passwordError = error.msg;
            } if (error.e == "email") {
                emailError = error.msg;
            }
        }
        
        return (
            <Modal open={this.state.openModal} >
                <Modal.Header>Register</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field inline>
                            <label>Username</label>
                            <Input
                                placeholder='Username'
                                onChange={this.onUsernameChange.bind(this)}
                            />
                            <small className="danger-error">{usernameError ? usernameError : ""}</small>
                        </Form.Field>
                    </Form>
                    <Form>
                        <Form.Field inline>
                            <label>Email</label>
                            <Input
                                placeholder='Email'
                                onChange={this.onEmailChange.bind(this)}
                            />
                            <small className="danger-error">{emailError ? emailError : ""}</small>
                        </Form.Field>
                    </Form>
                    <Form>
                        <Form.Field inline>
                            <label>Password</label>
                            <Input
                                placeholder='Password'
                                onChange={this.onPasswordChange.bind(this)}
                            />
                            <small className="danger-error">{passwordError ? passwordError : ""}</small>
                        </Form.Field>
                    </Form>

                    <Button
                        color='green'
                        onClick={this.submitRegister.bind(this)} >Register</Button>
                    <Button
                        color='red'
                        onClick={this.xModal}>Done</Button>
                </Modal.Content>
            </Modal>
        )
      
    }
}

