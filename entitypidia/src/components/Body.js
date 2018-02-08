import React from 'react';
import Composite from './Composite.js';
import Entity from './Entity.js';


export default class Body extends React.Component {
  
  render() {

    if(this.props.entityname){
      if(this.props.entityname  == 'entity'){
        return (
          <div>
            <Entity entityname={this.props.entityname}/>
          </div>
        )
      }else{
      return (
        <div>
          <Composite entityname={this.props.entityname}/>
        </div>
      )
    }
    }else{
      return ( 
      <div></div>
     )
  }
}
}