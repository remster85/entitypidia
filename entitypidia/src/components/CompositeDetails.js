import React, { Component } from 'react';
import {Table} from 'reactstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link } from 'react-router-dom'

class CompositeDetails extends Component {

  constructor() {
    super();
    this.state = {
      date: moment(),
    };
    this.handleDateChange = this.handleDateChange.bind(this);
 
  }

  handleDateChange(date){
    this.setState({
      date: date
    });

  }



  render() {

    const About = () => (
      <div>
        <h2>About</h2>
        </div>
  )

      if(this.props.entityname){

        const filename =  this.props.entityname + 'composition.json';
        const data = require('./../jsonsamples/' + filename);

          var compositedetails = [];
          for (var j = 0; j < data.length; j++){ 
            compositedetails.push(<tr><td>{data[j].property1}</td><td>{data[j].property2}</td><td>{data[j].property3}</td><td>{data[j].property4}</td><td>{data[j].property5}</td></tr>)
          }
  
        return ( 
            <div >

                  Composition Date <DatePicker  selected={this.state.date}
                  onChange={this.handleDateChange} />


              <Table hover responsive striped>
                <thead>
                  <tr>
                    <th>Property1</th><th>Property2</th><th>Property3</th><th>Property4</th><th>Property5</th><th>Property6</th><th>Property7</th><th>Property8</th></tr>
                </thead>
                <tbody>
                  
                  {compositedetails}
                </tbody>
              </Table>
            </div>
       )
      }
      else{
        return ( 
         <div></div>
        )
      }
    }
  }

  export default CompositeDetails;
