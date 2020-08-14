import React, { Component } from 'react';
import { Segment, Button, Icon, Grid, Menu, Accordion, Table, Divider, Modal, Form, Input, Dropdown, TextArea, Header, Image } from 'semantic-ui-react';
import { ModalSample } from '../Tutorial Components/ModalSample';




export class AddTutorial extends Component {

    constructor(props) {
        super(props);
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
        };
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
            }});

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
            <div>

                <Grid columns="2">

                    <Grid.Column>
                        <Header textAlign="left" as="h2">Log In </Header>
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Field>
                                    <label>Username:</label>
                                    <input name="Inputusername" onChange={this.saveEditText} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password:</label>
                                    <input name="Inputpassword" type="password" onChange={this.saveEditText} />
                                </Form.Field>
                            </Form.Group>
                            <Form>
                                <Form.Group inline>
                                <Form.Field>
                            <Button onClick={() => this.verify()} color='green'>
                                <Icon name='save outline' /> Log In
					        	</Button>
                                    </Form.Field>
                                    <Form.Field>
                                        <Button onClick={() => { this.setState({ showModal: true }); this.setState({ modalType: "Create User" }); }} color="green"><Icon name='save outline' /> Create User</Button>
                                    </Form.Field> 
                                    <Form.Field>
                                        <Button onClick={() => { this.setState({ showModal: true }); this.setState({ modalType: "View User" }); }} color="green"><Icon name='eye' /> View User</Button>
                                    </Form.Field> 
                                   
                                    </Form.Group>
                                </Form>
                        </Form>

                    </Grid.Column>    
                </Grid>


                {
                    this.state.showModal  && <ModalSample
                        closeModal={this.closeModal.bind(this)}//function
                        saveEditText={this.saveEditText.bind(this)}//function
                        editUser={this.editUser.bind(this)}//function
                        modalType={this.state.modalType}
                        modalStatus={this.state.showModal}      
                        savedDetails={this.state.savedDetails}      
                    />
                }
            </div>
        );
    }
}
