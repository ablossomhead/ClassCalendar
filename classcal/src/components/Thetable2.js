import React from 'react';
import Table from 'react-bootstrap/Table';
import schedule from './schedule.json';
import { Container } from 'react-bootstrap';


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
        <Container>
                    <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan="4">Full Class Lineup</th>
                    </tr>
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
        </Container>
    )
}

export default Thetable2;