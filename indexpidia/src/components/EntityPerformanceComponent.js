import React from 'react';
import { Table } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EntityPerformanceTableComponent from './EntityPerformanceTableComponent.js'; 
import LineExample from './LineExample.js'; 
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

export default class EntityPerformanceComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      nowdate: moment(),
      fromdate: moment().subtract(4, "days")
    };
  }

  handleChange(){
    console.log("handlechange");
  }

  handleSelect(){
    console.log("handleselect");
  }

  render() {
  
    if(this.props.entityname){

    return (

      <Container>
      <Row>
          <Col>
            <div>
                Date From: 
                <DatePicker  selected={this.state.fromdate}
                onSelect={this.handleSelect} 
                onChange={this.handleChange} />

                To: 

                <DatePicker  selected={this.state.nowdate}
                onSelect={this.handleSelect} 
                onChange={this.handleChange} />
            </div>
          </Col>
      </Row>
      <Row>
        <Col>
              <LineExample  entityname={this.props.entityname} />
        </Col>
        <Col>
          <EntityPerformanceTableComponent  entityname={this.props.entityname} />
        </Col> 
      </Row>
      </Container>
     
      );
  }else{
    return (<div></div>)
  }
}
}