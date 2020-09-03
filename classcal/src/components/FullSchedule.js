import React from 'react';
import Table from 'react-bootstrap/Table';
import schedule from './schedule.json';


const rows = schedule.map( ({ period, subject, classtimes }) => {
    return (
        <tr key={period}>
        <td>{period}</td>
        <td>{subject}</td>
        <td>{classtimes.map(i =>
            <div>
                {i.day}
            </div>)}</td>
        <td>{classtimes.map(i =>
            <div>
                {i.time}
            </div>)}</td>
        </tr>
    )
});

const FullSchedule = () =>  {
    return (
                    <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th colSpan="4">Full Schedule</th>
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

export default FullSchedule;