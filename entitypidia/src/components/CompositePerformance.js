import React from 'react';
import { Table } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CompositePerformanceTable from './CompositePerformanceTable.js'; 
import LineExample from './LineExample.js'; 
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

export default class CompositePerformance extends React.Component {

  constructor() {
    super();
    this.state = {
      todate: moment(),
      fromdate: moment().subtract(4, "days"),
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
 
  }

  loadData(entityname){
    var fromdate = this.state.fromdate;
    var todate = this.state.todate;
    const filename = entityname + 'values.json';
    var data = require('./../jsonsamples/' + filename);
    return data;
   
  }

  handleStartDateChange(date){
    this.setState({
      fromdate: date
    });

    this.loadData(this.props.entityname);

  }

  handleToDateChange(date) {
    this.setState({
      todate: date
    });

    this.loadData(this.props.entityname);
  }

  render() {  
    if(this.props.entityname){

      var data = this.loadData(this.props.entityname);
      console.log('rerender');
      return (
        <Container>
        <Row>
            <Col>
              <div>
                  Date From: 
                  <DatePicker   selected={this.state.fromdate}
                  onChange={this.handleStartDateChange} />

                  To: 

                  <DatePicker  selected={this.state.todate}
                  onChange={this.handleToDateChange} />
              </div>
            </Col>
        </Row>
        <Row>
          <Col>
                <LineExample  entityname={this.props.entityname} data={data} />
          </Col>
          <Col>
            <CompositePerformanceTable  entityname={this.props.entityname} data={data}  />
          </Col> 
        </Row>
        </Container>
     
      );
  }else{
    return (<div></div>)
  }
}
}