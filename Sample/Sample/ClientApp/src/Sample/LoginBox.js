import React, { Component } from 'react';
import { Icon, Header, Form, Grid, Button, Divider, Segment, Modal } from 'semantic-ui-react';
import { RegisterBox } from './RegisterBox';

import '../Sample/LoginSample.css'

export class LoginBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false

        }
    }

    showLoginBox() {
        this.setState({
            isRegisterOpen: false,
            isLoginOpen: true
        });
    }

    showRegisterBox() {
        this.setState({
            isRegisterOpen: true,
            isLoginOpen: false
        });
    }  

    submitLogin(x) {

    }

    render() {
        return (
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <Form>
                            <Form.Input
                                icon='user'
                                iconPosition='left'
                                label='Username'
                                placeholder='Username'
                            />
                            <Form.Input
                                icon='lock'
                                iconPosition='left'
                                label='Password'
                                type='password'
                            />

                            <Button
                                                          
                                content='Login'
                                primary
                            />
                        </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <Modal.Actions>
                        <Button
                            
                            onClick={this.showRegisterBox.bind(this)}
                                content='Register' icon='signup' size='big'
                            />
                            </Modal.Actions>
                    </Grid.Column>

                </Grid>

                <Divider vertical></Divider>
                
                {this.state.isRegisterOpen && <RegisterBox />}
            </Segment>

        )
    }

}