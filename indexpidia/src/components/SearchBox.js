import React, { Component } from 'react';


class SearchBox extends Component {
    render() {
      console.log(this.props.data);
      var options = [];
      for (var j = 0; j < this.props.data.length; j++) {
        options.push(<option>{this.props.data[j].entity}</option>)
      }

      return ( 
            <div>
              
                <input list="entities-datalist" type="text" id="entities"/>
                <datalist id="entities-datalist">
                    {options}
                </datalist>
                
                <input 
                type="submit" 
                onClick={() => this.props.onClick(document.getElementById('entities').value)}/>
            </div>
       )
    }
  }

  export default SearchBox;
