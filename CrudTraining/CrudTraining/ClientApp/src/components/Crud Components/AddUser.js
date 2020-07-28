import React, { Component } from 'react';
import { Grid, Button, Table, Icon, Progress, Modal, Form, Divider, Header, Search, Dropdown, Segment, Radio, Tab, TextArea } from 'semantic-ui-react';

export class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCount: 0,
            data: [],
            employees: [],
            editModal: false,
            addModal: false,
            users: [
                {
                    Id: 1,
                    Type: "Hendrick",
                },
                {
                    Id: 2,
                    Type: "Kenji",
                },
                {
                    Id: 3,
                    Type: "Bill",
                },
                {
                    Id: 4,
                    Type: "David"
                },
                {
                    Id: 5,
                    Type: "Rod",
                },
            ],
            userEditDetails: {},
           
        };
    }

    componentDidMount() {
       
    }

    saveEditText = e => {
        const { name, value } = e.target;
        var textinfo = { ...this.state.userEditDetails };

        textinfo[name] = value;

        this.setState({
            userEditDetails: textinfo
        });
    }
    editUser() {
        

    }
    render() {
        const phasesType = this.state.users.map((item, index) => {
            return (
                {
                    key: index, text: item.Type, value: item
                }
            );
        });
        return (
            <div>
                <label>Add User!</label>
                <Form>
                    <Form.Group widths="grouped">
                        <Form.Field>
                            <label>Username</label>
                            <input name="username" vonChange={this.saveEditText} />
                        </Form.Field>
                        <Form.Field>
                            <label>First Name</label>
                            <input name="firstName" onChange={this.saveEditText} />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input name="lastName" onChange={this.saveEditText} />
                        </Form.Field>

                        <Form.Field>
                            <label>Email</label>
                            <input name="email" onChange={this.saveEditText} />
                            
                        </Form.Field>
                    </Form.Group>
                    <Button>Save</Button>
                </Form>

                
            </div>
        );
    }
}
