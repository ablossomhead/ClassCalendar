import React from 'react';
import Table from 'react-bootstrap/Table';
import './TodayIs.css'

const TodayIs = () => {
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
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Today is {n}</th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}

  

export default TodayIs;