import React, { Component } from 'react';
import { Modal, Form } from 'semantic-ui-react';


import '../components/login.css'


export class javamodal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false
        }
    }

    showLoginBox() {
        this.setState({
            isRegisterOpen: true,
            isLoginOpen: false
        });
    }

    showRegisterBox() {
            this.setState({
                isRegisterOpen: true,
                isLoginOpen: false
           });
    }     

    render() {

        return (
            <div className="root-container">

                <div className="box-controller">
                    <div
                        className={"controller" + (this.state.isLoginOpen ? "selected-controller" : "")}
                        onClick={this.showLoginBox.bind(this)}
                    >Login
                    </div>
                    <div
                        className={"controller" + (this.state.isRegisterOpen ? "selected-controller" : "")}
                        onClick={this.showRegisterBox.bind(this)}
                    >Register
                    </div>
                </div>

                <div className="box-container">

                    {this.state.isLoginOpen && <LoginBox />}
                    {this.state.isRegisterOpen && <RegisterBox />}

                </div>
            </div>
            
      )
    }
 }
                       
export class LoginBox extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    submitLogin(x) {

    }

    render() {
        return(
        <div className="inner-container">
            <div className="header">
                Login
            </div>
            <div className="box">

                <div className="input-group">
                    <label htmlFor="username">UserName</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username"
                        />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password"
                        />
                </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this.submitLogin.bind(this)} >Login</button>

            </div>
        </div>
        )
    }

}

export class RegisterBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            errors: []
        }
    }

    showValidationError(e, msg) {
        this.setState((prevState) => ({ errors: [...prevState.errors, {e, msg}]}))
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
        }if (this.state.email == "") {
            this.showValidationError("email", "Invalid Email");
        }if (this.state.password == "")
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

        return(
            <div className="inner-container">
                <div className="header">
                    Register
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">UserName</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username"
                            onChange={this.onUsernameChange.bind(this)}
                        />
                        <small className="danger-error">{usernameError ? usernameError : ""}</small>
                    </div>

                    <div className="input-group">
                        <label htmlFor="username">Email</label>
                        <input
                            type="text"
                            name="email"
                            className="login-input"
                            placeholder="Email"
                            onChange={this.onEmailChange.bind(this)}
                        />
                        <small className="danger-error">{emailError ? emailError : ""}</small>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password"
                            onChange={this.onPasswordChange.bind(this)}
                        />
                        <small className="danger-error">{passwordError ? passwordError : ""}</small>
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this.submitRegister.bind(this)} >Register</button>

                </div>
            </div>

        )

    }

}

