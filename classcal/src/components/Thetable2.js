import React from 'react';
import Table from 'react-bootstrap/Table';
import schedule from './schedule.json';


const rows = schedule.map( ({ period, subject, teacher, classlink }) => {
    return (
        <tr key={period}>
        <td>{period}</td>
        <td>{subject}</td>
        <td>{teacher}</td>
        <td><a href={classlink}><div>{classlink}</div></a></td>
        </tr>
    )
});

const Thetable2 = () =>  {
    return (
                    <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Period</th>
                    <th>Subject</th>
                    <th>Teacher</th>
                    <th>Class Link</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                </Table>
    )
}

export default Thetable2;