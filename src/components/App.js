import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import SayFullName from './SayFullName';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <SayFullName name="Евгений" surname="Дильбаров" link="#"/>
        </div>
    );
  }
}

export default App;
