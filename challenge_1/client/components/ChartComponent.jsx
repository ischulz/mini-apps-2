import React from 'react';
import {Line} from 'react-chartjs-2';
//2016-04-01T00:00:00.0000000Z
const ClassComponent = (props) => {
let labels = [];
let datapoints = [];
props.data.forEach((item, index) => {
  let month = Object.keys(item)[0].substr(5, 2);
  let year = Object.keys(item)[0].substr(0, 4);
  let day = Object.keys(item)[0].substr(8, 2);
  labels.push(`${year}/${month}/${day}`);
  datapoints.push(Object.values(item)[0]);
})
let data = {
  labels: labels,
  datasets: [
    {
      label: 'BitCoin',
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
      data: datapoints
    }
  ]
};

return(<div>
        <Line data={data} />
      </div>)
};

export default ClassComponent;