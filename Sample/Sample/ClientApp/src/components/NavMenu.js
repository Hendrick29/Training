import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Sample</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/counter'}>
              <NavItem>
                <Glyphicon glyph='education' /> Counter
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/fetchdata'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Fetch data
              </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/AddTutorial'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> User Tutorial (Basic CRUD)
              </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/JSsample'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Rodney Sample (Basic CRUD)
              </NavItem>
                    </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
