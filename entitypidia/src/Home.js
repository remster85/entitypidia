import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox.js';
import {Form, FormControl, Button} from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import Body from './components/Body.js';
import { Route, IndexRoute, Link } from 'react-router'


class Home extends Component {
    constructor() {
        super();
        this.state = {
          data: [],
          loading: false,
          entityName : 'entity'
        };
        console.log('hi');
        if(this.props){
            console.log('hello');
            console.log(this.props.params);
        }  
    }


  searchEntity(entityName){
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
                    <Body entityname={this.state.entityname} />
                </Col>

            </Row>

        </Container>

      </div>
    );
  }
}

export default Home;