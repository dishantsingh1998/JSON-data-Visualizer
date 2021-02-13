import React, { Component } from 'react';
import * as d3 from 'd3';
import CanvasJSReact from "./assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends Component {
		render() {
		const options = {
			title: {
				text: "Sales V/s Month Column Chart"
			},
			animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{"label": "January","y": 71 },
					{ label: "February", y: 55  },
					{ label: "March", y: 50 },
					{ label: "April",  y: 65  },
					{ label: "May",  y: 71  },
					{ label: "June",  y: 68 },
					{ label: "July",  y: 38 },
					{ label: "August",  y: 92 },
					{ label: "September",  y: 54 },
					{ label: "October",  y: 60 },
					{ label: "November",  y: 21 },
					{ label: "December",  y: 49 },


				]
			}
			]
		}
		
		return (
		<div>
			<h1>Sales V/s Month Column Chart</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnChart;