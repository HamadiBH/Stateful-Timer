import React, { Component } from 'react';
import Timer from './components/timer';
import './App.css';


export default class App extends Component {
  state = {
    clock: 0,
    isStart: false
  };

  counter = setInterval(() => { if (this.state.isStart) {
      this.setState({ clock: this.state.clock + 1 });
    }
    
  }, 1000);

  onStartClick = () => { this.setState({ 
      isStart: !this.state.isStart });
  };

  onResetClick = () => { this.setState({ 
      clock: 0, isStart: false });
  };

render() {

  return (

    <div className="container">

      <Timer time={this.state.clock} />
      
        <div className="btnscontainer">
          <button className={this.state.isStart ? 'stpbtn' : 'strtbtn'} onClick={this.onStartClick}> {this.state.isStart ? 'Pause' : 'Start'} </button>
          <button onClick={this.onResetClick} className='rstbtn'> Reset </button>
        </div>
    </div>
  );
}

}
