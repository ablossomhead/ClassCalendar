import React, {Component} from 'react';
import Thetable2 from './components/Thetable2';
import './App.css';
import TodayIs from './components/TodayIs';
import TodaysSchedule from './components/TodaysSchedule';


class App extends Component {
  render() {
    return (
      <div>
        <TodayIs />
        <TodaysSchedule />
        <div>
          <Thetable2 />
        </div>
      </div>
    );
  }
}

export default App;
