import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';


class LineExample extends Component {

 
  render() {
  
    if(this.props.entityname){

      const entityname = this.props.entityname;
      var values = this.props.data;
      var values = Object.keys(values).map(function(k) { return values[k]['value'] });

      const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: entityname,
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: values
          }
        ]
      };
                
      return (
        <div>
          <h2>{this.props.entityname} Level</h2>
          <Line data={data} />
        </div>
      ); }else{
        return ( 
         <div></div>
        )
      }
  }
}
  
export default LineExample;