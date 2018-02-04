import React from 'react';
import { Table } from 'reactstrap';

export default class EntityPerformanceTable extends React.Component {

  handleChange(){
    console.log("handlechange");
  }

  render() {
  
    if(this.props.entityname){

      const entityname = this.props.entityname;
      const filename =  this.props.entityname + 'values.json';
      var values = require('./../jsonsamples/' + filename);
  
      var entityperformance = [];
      for (var j = 0; j < values.length; j++){ 
        entityperformance.push(<tr><td scope="row">{values[j].date}</td><td>{values[j].value}</td></tr>)
      }

    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Date</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {entityperformance}
          </tbody>
        </Table>
      </div>
    );
  }else{
    return (<div></div>)
  }
}
}