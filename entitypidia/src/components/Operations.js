import React from 'react';
import { Table } from 'reactstrap';

export default class OperationsComponent extends React.Component {


  render() {

    
  if(this.props.entityname){

    const file =  this.props.entityname + 'operations.json';
    const data = require('./../jsonsamples/' + file);

      var entityoperations = [];
      for (var j = 0; j < data.length; j++){ 
        entityoperations.push(<tr key={j}><td scope="row">{data[j].id}</td><td>{data[j].date}</td><td>{data[j].name}</td><td>{data[j].size}</td></tr>)
      }


    return (
      <Table striped>
        <thead>
          <tr>
            <th>Operation Id</th>
            <th>Operation Date</th>
            <th>Operation Name</th>
            <th>Operation Size</th>
          </tr>
        </thead>
        <tbody>
          {entityoperations}
        </tbody>
      </Table>
    );
  }else{
    return (<div></div>)
  }
}
}