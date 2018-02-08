import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox.js';
import {Form, FormControl, Button} from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import Composite from './components/Composite.js';
import { Route, IndexRoute, Link } from 'react-router'


class Home extends Component {
    constructor() {
        super();
        this.state = {
          data: [],
          loading: false
        };
      }


  searchEntity(entityName){
    console.log('search index ' + entityName); 
    this.setState( { entityname : entityName});   
 }
  

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to EntityPedia</h1>
        </header>

        <br/>
        

        <Container>

            <Row>
                <Col>
                    <SearchBox 
                        data={ this.state.data } 
                        searchKey="entity_name"
                        onClick={(idx) => this.searchEntity(idx)}
                        
                    />
                </Col>

            </Row>

            <br/>

            <Row>
                <Col>
                    <Composite entityname={this.state.entityname} />
                </Col>

            </Row>

        </Container>

      </div>
    );
  }
}



export default Home;