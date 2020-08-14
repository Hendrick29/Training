import React, { Component } from 'react';
import { Icon, Header, Form, Grid, Button, Modal, Table, Dropdown, Tab, Label, Message } from 'semantic-ui-react';




export class ModalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCount: 0,
            data: [],
            employees: [],
            editModal: false,
            addModal: false,
            userEditDetails: {},
            savedDetails: {},
            displayUser: "User",
            displayPassword: "Password",
            username: "",
            email: "",
            firstname: "",
            lastname: "",
            password: "",
            errors: []
        };
    }

    componentDidMount() {

    }
    verify() {
        var object = this.state.userEditDetails;
        var object1 = this.state.savedDetails;
        if (object.Inputusername === object1.username && object.Inputpassword === object1.password) {
            var newUser = "Username: " + object.Inputusername;
            var newPassword = "Password: " + object.Inputpassword;
            this.setState({ displayUser: newUser });
            this.setState({ displayPassword: newPassword });
        }
        else {
            this.setState({ displayUser: "User Not Found" });
            this.setState({ displayPassword: "Password Not Found" });

        }

    }
    editUser() {
        var object = this.state.userEditDetails;
        this.setState({ savedDetails: object });

    }
    saveEditText = e => {
        const { name, value } = e.target;
        var textinfo = { ...this.state.userEditDetails };

        textinfo[name] = value;

        this.setState({
            userEditDetails: textinfo
        });
    }

    showValidationError(ee, msg) {
        this.setState((prevState) => ({ errors: [...prevState.errors, { ee, msg }] }))
    }

    clearValidationError(ee) {
        this.setState((prevState) => {
            let newArray = [];
            for (let error of prevState.errors) {
                if (ee != error.ee) {
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

    onFirstnameChange(x) {
        this.setState({ firstname: x.target.value })
        this.clearValidationError("firstname");
    }

    onLastnameChange(x) {
        this.setState({ lastname: x.target.value })
        this.clearValidationError("lastname");
    }

    submitRegister(x) {
        if (this.state.username === "") {
            this.showValidationError("username", "Invalid Username");
        } if (this.state.email === "") {
            this.showValidationError("email", "Invalid Email");
        } if (this.state.password === "") {
            this.showValidationError("password", "Invalid Password");
        } if (this.state.firstname === "") {
            this.showValidationError("fristname", "Invalid Password");
        } if (this.state.lastname === "") {
            this.showValidationError("lastname", "Invalid Password");
        }
    }


    usernameCalls = l => {
        this.props.saveEditText(l)
        this.onUsernameChange.bind(this)
    }

    passwordCalls = m => {
        this.props.saveEditText(m)
        this.onPasswordChange.bind(this)
    }

    firstnameCalls = n => {
        this.props.saveEditText(n)
        this.onFirstnameChange.bind(this)
    }

    lastnameCalls = o => {
        this.props.saveEditText(o)
        this.onLastnameChange.bind(this)
    }

    emailCalls = p => {
        this.props.saveEditText(p)
        this.onEmailChange.bind(this)
    }

    edituserCalls = h => {
        this.props.editUser(h)
        this.submitRegister.bind(this)
    }

    render() {

        let usernameError = null, passwordError = null, firstnameError = null, lastnameError = null, emailError = null

        for (let error of this.state.errors) {
            if (error.ee === "username") {
                usernameError = error.msg;
            } if (error.ee === "password") {
                passwordError = error.msg;
            } if (error.ee === "firsname") {
                firstnameError = error.msg;
            } if (error.ee === "lastname") {
                lastnameError = error.msg;
            } if (error.ee === "email") {
                emailError = error.msg;
            }
        }

        switch (this.props.modalType) {
            case 'Create User':
                return (
                    <div>
                        <Modal className="scrolling bigModal" style={{ overflow: "initial", height: 320 }} open={this.props.modalStatus}>
                            <Modal.Header>Add User</Modal.Header>
                            <Modal.Content className="bigModalContent">
                                <Form>
                                    <Form.Group widths="equal">
                                        <Form.Field>
                                            <label>Username:</label>
                                            <input
                                                name="username"
                                                onChange={this.usernameCalls}                                               
                                            />
                                            
                                            <small>{usernameError ? usernameError : ""}</small>
                                            
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Password:</label>
                                            <input
                                                name="password"
                                                type="password"
                                                onChange={this.passwordCalls}
                                            />

                                            <small>{passwordError ? passwordError : ""}</small>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>First Name:</label>
                                            <input
                                                name="firstName"
                                                onChange={this.firstnameCalls}
                                            />
                                            <small>{firstnameError ? firstnameError : ""}</small>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Last Name:</label>
                                            <input
                                                name="lastName"
                                                onChange={this.lastnameCalls}
                                            />
                                            <small>{lastnameError ? lastnameError : ""}</small>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Email:</label>
                                            <input
                                                name="email"
                                                onChange={this.emailCalls}
                                            />
                                            <small>{emailError ? emailError : ""}</small>                                           
                                        </Form.Field>
                                    </Form.Group>
                                </Form>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button onClick={() => this.props.closeModal()} color='red'>
                                    <Icon name='cancel' /> Close
						        </Button>
                                <Button
                                    onClick={this.edituserCalls} 
                                    color='green'>
                                    <Icon name='save outline' /> Save
						        </Button>
                            </Modal.Actions>
                        </Modal> {/*choice*/}
                    </div>
                );
            case 'View User':
                return (
                    <div>
                        <Modal className="scrolling bigModal" style={{ overflow: "initial", height: 320 }} open={this.props.modalStatus}>
                            <Modal.Header>View User</Modal.Header>
                            <Modal.Content className="bigModalContent">
                                <Form>
                                    <Form.Group widths="equal">
                                        <Form.Field>
                                            <label>Username:</label>
                                            <label>{this.props.savedDetails.username}</label>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Password:</label>
                                            <label>{this.props.savedDetails.password}</label>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>First Name:</label>
                                            <label>{this.props.savedDetails.firstName}</label>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Last Name:</label>
                                            <label>{this.props.savedDetails.lastName}</label>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Email:</label>
                                            <label>{this.props.savedDetails.email}</label>
                                        </Form.Field>
                                    </Form.Group>
                                </Form>
                            </Modal.Content>

                            <Modal.Actions>
                                <Button onClick={() => this.props.closeModal()} color='red'>
                                    <Icon name='cancel' /> Close
						        </Button>

                            </Modal.Actions>
                        </Modal> {/*choice*/}


                    </div>
                );
            default:
                return null;
        }
    }
}
