import React, {Component} from 'react';
import Thetable2 from './components/Thetable2';
import './App.css';
import FullSchedule from './components/FullSchedule';
import TodayIs from './components/TodayIs';
import TodaysSchedule from './components/TodaysSchedule';


class App extends Component {
  render() {
    return (
      <div>
        <Thetable2 />
      <div>
        <div>
        <TodayIs />
        <TodaysSchedule />
        </div>
        <FullSchedule />
      </div>
      </div>
    );
  }
}

export default App;
