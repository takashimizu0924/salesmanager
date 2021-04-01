import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function TotalGraph(props){
  let labelList = []
  let dataList = []
  for ( var i in props.props){
    labelList.push(props.props[i].completedDate)
    dataList.push(props.props[i].price)
  }
  const options = {
    maintainAspectRatio: false,
    responsive: false,
  };
  let graphData = {
    labels:labelList,
    datasets:[
      {
        label:'グラフ',
        data:dataList,
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'square',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#eee',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };

return (
  <div>
    <Bar 
    options={options}
    data={graphData}
    width={1200}
    height={300} />
  </div>
)
}





