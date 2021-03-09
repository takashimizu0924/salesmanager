// import { Maximize } from '@material-ui/icons';
import React from 'react'
import { Line, Pie, Bar } from 'react-chartjs-2'

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: '総売上推移',
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
        data: [20, 15, 21, 31, 34, 40, 48]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    responsive: false,
  };

export const MainGraph = () => {
    return (
        <>
          <Line 
            options={options}
            data={data}
            width={1200}
            height={300} />  
        </>
    )
}

export const PieGraph = () => {
  return(
    <>
      <Pie
        options={options}
        data={data}
        width={330}
        height={200}
      />
    </>
  )
}

export const BarGraph = () => {
  return (
    <>
      <Bar
        options={options}
        data={data}
        width={300}
        height={200}
      />
    </>
  )
}




