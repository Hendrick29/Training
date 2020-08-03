import React, { Component } from 'react';
import { Icon, Header, Form, Grid, Button, Modal, Table, Dropdown, Tab } from 'semantic-ui-react';




export class JSsample extends Component {

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

        return (
            <div>
                <Grid>
                    <Header textAlign="left" as="h2">Add User </Header>
                    <Grid.Column>
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Field>
                                    <label>Username:</label>
                                    <input name="username" onChange={this.saveEditText} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password:</label>
                                    <input name="password" type="password" onChange={this.saveEditText} />
                                </Form.Field>
                                <Form.Field>
                                    <label>First Name:</label>
                                    <input name="firstName" onChange={this.saveEditText} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Last Name:</label>
                                    <input name="lastName" onChange={this.saveEditText} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Email:</label>
                                    <input name="email" onChange={this.saveEditText} />
                                </Form.Field>
                            </Form.Group>
                            <Button onClick={() => this.editUser()} color='green'>
                                <Icon name='save outline' /> Save
						</Button>


                        </Form>
                        <br></br>
                        <br></br>
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
                                <br></br>
                                <Form.Field>
                                    <label>{this.state.displayUser}</label>
                                    <br></br>
                                    <label>{this.state.displayPassword}</label>
                                </Form.Field>

                            </Form.Group>
                            <Button onClick={() => this.verify()} color='green'>
                                <Icon name='save outline' /> Log In
						</Button>
                        </Form>
                    </Grid.Column>

                </Grid>

            </div>
        );
    }
}
