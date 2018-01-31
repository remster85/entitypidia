import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox.js';
import Provider from './components/Provider.js';
import HelloChart from './components/HelloChart.js';
import MyLineChart from './components/MyLineChart.js';
import EntityComposition from './components/EntityComposition.js';
import {Form, FormControl, Button} from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import {Bar} from 'react-chartjs';

class App extends Component {
    constructor() {
        super();
        this.state = {
          data: [],
          loading: false
        };
      }

  componentDidMount() {
    this.setState({
      loading: true
    });

  const data = require('./jsonsamples/entities.json');
  this.setState({
    data: data,
    loading: false,
    entityname: null,
  });
}

  searchEntity(entityName){
    console.log('search index ' + entityName); 
    this.setState( { entityname : entityName});   
 }
  
 getDescription(entityName){
     if(entityName){
        return 'Description of index ' + entityName;
     }
     return '';
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
             <Col xs="3">
                <Provider
                    entityname={this.state.entityname}
                />
            </Col>

            <Col xl="6">
                <Description
                    description={this.getDescription(this.state.entityname)}
                />

                <br/>
                
                <EntityComposition
                    entityname={this.state.entityname}
                />

            </Col>
            </Row>

            <br/>

            <Row>
             <Col xs="5">
             <HelloChart  entityname={this.state.entityname}/>
            </Col>

            <Col xl="5">
            <MyLineChart  entityname={this.state.entityname}/>
            </Col>
            </Row>

        
        </Container>

      </div>
    );
  }
}



function Description(props) {
    return <div style={{ backgroundColor: 'brown'}}>
        {props.description}
    </div>;
    
  }

export default App;
