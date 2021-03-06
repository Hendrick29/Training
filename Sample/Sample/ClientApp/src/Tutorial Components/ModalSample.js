﻿import React, { Component } from 'react';
import { Icon, Header, Form, Grid, Button, Modal, Table, Dropdown, Tab } from 'semantic-ui-react';




export class ModalSample extends Component {

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
    render() {

       
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
                                            <input name="username" onChange={this.props.saveEditText} />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Password:</label>
                                            <input name="password" type="password" onChange={this.props.saveEditText} />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>First Name:</label>
                                            <input name="firstName" onChange={this.props.saveEditText} />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Last Name:</label>
                                            <input name="lastName" onChange={this.props.saveEditText} />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Email:</label>
                                            <input name="email" onChange={this.props.saveEditText} />
                                        </Form.Field>
                                    </Form.Group>
                                    


                                </Form>
                            </Modal.Content>

                            <Modal.Actions>

                                <Button onClick={() => this.props.closeModal()} color='red'>
                                    <Icon name='cancel' /> Close
						        </Button>
                                <Button onClick={() => this.props.editUser()} color='green'>
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
