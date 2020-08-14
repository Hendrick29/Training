import React, { Component } from 'react';
import { Label, Message, Segment, Button, Icon, Grid, Menu, Accordion, Table, Divider, Modal, Form, Input, Dropdown, TextArea, Header, Image } from 'semantic-ui-react';
import { ModalForm } from '../Sample/ModalForm';

export class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            modalType: null,
            showModal: false,
            currentCount: 0,
            data: [],
            employees: [],
            editModal: false,
            addModal: false,
            userEditDetails: {},
            savedDetails: {},
            displayUser: "",
            displayPassword: "",
        }
    }
    closeModal() {
        this.setState({ showModal: false });
        this.setState({ modalStatus: false });
    }
    componentDidMount() {
        this.getUserInfo();
    }
    getUserInfo() {
        this.setState({
            savedDetails: {
                username: "Sample Username",
                password: "Sample Password",
                firstName: "Sample FirstName",
                lastName: "Sample LastName",
                email: "Sample Email",
            }
        });

    }

    verify() {
        var object = this.state.userEditDetails;
        var object1 = this.state.savedDetails;
        if (object.Inputusername === object1.username && object.Inputpassword === object1.password) {
            var newUser = "Username: " + object.Inputusername;
            var newPassword = "Password: " + object.Inputpassword;
            this.setState({ displayUser: newUser });
            this.setState({ displayPassword: newPassword });
            alert("" + newUser);
        }
        else {
            alert("Username/Password Is Invalid!");

        }

    }
    editUser() {
        var object = this.state.userEditDetails;
        this.setState({ savedDetails: object });
        this.closeModal();
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
        return (
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <Form >
                            <Form.Field inline>
                            <Form.Input
                                icon='user'
                                iconPosition='left'
                                label='Username'
                                placeholder='Username'
                                    onChange={this.saveEditText}

                                />                              
                            </Form.Field>
                            <Form.Input
                                icon='lock'
                                iconPosition='left'
                                label='Password'
                                type='password'
                                onChange={this.saveEditText}
                            />                                                   
                            <Button
                                onClick={() => this.verify()}                 
                                content='Login'
                                primary
                            />  
                            
                            <Divider horizontal></Divider>
                            <Form.Field>
                                <Button onClick={() => { this.setState({ showModal: true }); this.setState({ modalType: "View User" }); }} content='View User' primary />
                            </Form.Field> 
                        </Form>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle'>
                        <Modal.Actions>
                            <Form.Field>
                                <Button onClick={() => { this.setState({ showModal: true }); this.setState({ modalType: "Create User" }); }} content='Register' icon='signup' size='big'/>
                            </Form.Field>
                        </Modal.Actions>
                    </Grid.Column>
                </Grid>
                <Divider vertical></Divider>
                {
                    this.state.showModal && <ModalForm
                        closeModal={this.closeModal.bind(this)}//function
                        saveEditText={this.saveEditText.bind(this)}//function
                        editUser={this.editUser.bind(this)}//function
                        modalType={this.state.modalType}
                        modalStatus={this.state.showModal}
                        savedDetails={this.state.savedDetails}
                    />
                }
            </Segment>
        )
    }
}




