import React, { Component } from 'react';
import {Table} from 'reactstrap';

class EntityComposition extends Component {

  render() {

      if(this.props.entityname){

        const filename =  this.props.entityname + 'composition.json';
        const data = require('./../jsonsamples/' + filename);

          var entitycomposition = [];
          for (var j = 0; j < data.length; j++){ 
            entitycomposition.push(<tr><td>{data[j].property1}</td><td>{data[j].property2}</td><td>{data[j].property3}</td><td>{data[j].property4}</td><td>{data[j].property5}</td></tr>)
          }
  
        return ( 
            <div >
              <Table hover responsive striped>
                <thead>
                  <tr>
                    <th>Property1</th><th>Property2</th><th>Property3</th><th>Property4</th><th>Property5</th><th>Property6</th><th>Property7</th><th>Property8</th></tr>
                </thead>
                <tbody>
                  {entitycomposition}
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

  export default EntityComposition;
