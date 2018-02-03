import React, { Component } from 'react';
import {Table} from 'reactstrap';

class Provider extends Component {

    render() {

      if(this.props.entityname){

          const filename =  this.props.entityname + 'provider.json';
          const data = require('./../jsonsamples/' + filename);

          
          var providers = [];
          for (var j = 0; j < data.length; j++){ 
            providers.push(<tr><td>{data[j].provider}</td><td>{data[j].value}</td></tr>)
          }


          return ( 
                <div>
                  <Table hover responsive>
                    <thead>
                      <tr>
                        <th>Name</th><th>Value</th></tr>
                    </thead>
                    <tbody>
                      {providers}
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

  export default Provider;
