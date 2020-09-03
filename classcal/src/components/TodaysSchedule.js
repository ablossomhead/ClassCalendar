import React from 'react';
import Table from 'react-bootstrap/Table';
import schedule from './schedule.json';



const thisDay = () => {
    const d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";    
    const n = weekday[d.getDay()];
    return (n);
}

//filter only todays
const todays = schedule.filter(s => {
    return s.classtimes.find(t => t.day === thisDay())
});

const rows = todays.map( ({ period, subject, classlink, classtimes }) => {
    const todaystime = classtimes.find(t => t.day === thisDay());
    return (
        <tr key={period}>
        <td>{period}</td>
        <td>{subject} 
            <div>
            <a href={classlink}><div>{classlink}</div></a>
            </div>
        </td>
        <td>
            <div>
                {todaystime.day}
            </div>
        </td>
        <td>
            <div>
                {todaystime.time}
            </div>
        </td>
        </tr>
    )
});

const TodaysSchedule = () =>  {
    return (
                    <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th colSpan="4">This is today's schedule</th>
                    </tr>
                    <tr>
                    <th>Period</th>
                    <th>Subject</th>
                    <th>Day</th>
                    <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                </Table>
    )
}

export default TodaysSchedule;