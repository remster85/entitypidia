import React, { Component } from 'react';
import LineChart from 'react-linechart';
// import '../node_modules/react-linechart/dist/styles.css';
 
export default class MyLineChart extends Component {
    render() {
        const data = [
            {									
                color: "steelblue", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
            }
        ];

        if(this.props.entityname){
        return (
            <div>
                <div className="App">
                    <h1>My First LineChart</h1>
                    <LineChart 
                        width={450}
                        height={350}
                        data={data}
                    />
                </div>				
            </div>
        );
    } else{
        return ( 
         <div></div>
        )
      }
    }
}

