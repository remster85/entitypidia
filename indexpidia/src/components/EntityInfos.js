import React, { Component } from 'react';
import {Table} from 'reactstrap';

class EntityInfos extends Component {

    render() {

      if(this.props.entityname){

          const filename =  'entityinfos.json';
          const data = require('./../jsonsamples/' + filename);

          
          var trancos = [];
          for (var j = 0; j < data.length; j++){ 
            trancos.push(<tr><td>{data[j].key}</td><td>{data[j].value}</td></tr>)
          }


          return ( 
                <div>
                  <Table hover responsive striped> 
                    <thead>
                      <tr>
                        <th>Name</th><th>Value</th></tr>
                    </thead>
                    <tbody>
                      {trancos}
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

  export default EntityInfos;
