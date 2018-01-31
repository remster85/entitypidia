import React, { Component } from 'react';
import {Table} from 'reactstrap';

class EntityComposition extends Component {

render() {

      if(this.props.entityname){

        const filename =  this.props.entityname + 'composition.json';
        const data = require('./../jsonsamples/' + filename);

          var entitycomposition = [];
          for (var j = 0; j < data.length; j++){ 
            entitycomposition.push(<tr><th>{data[j].property1}</th><th>{data[j].property2}</th><th>{data[j].property3}</th><th>{data[j].property4}</th><th>{data[j].property5}</th></tr>)
          }
  
      return ( 
            <div style={{ backgroundColor: 'pink'}} >
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Commodity</th><th>Contract</th><th>Price</th><th>Weight</th><th>DeltaFut</th></tr>
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
