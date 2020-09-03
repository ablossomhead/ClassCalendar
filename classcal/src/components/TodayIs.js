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
    const hm = d.toLocaleTimeString().toLowerCase();
    return (
        <div>
            <Table >
                <thead className='theadcss'>
                    <tr>
                    <th>Hi! It is {hm} on {n}</th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}

  

export default TodayIs;