import React from 'react';
import axios from 'axios';
import ChartComponent from './ChartComponent.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: '2017-01-01',
      end: '2018-01-01',
      data: [],
    };

    this.fetchData = this.fetchData.bind(this);
    this.handleDates = this.handleDates.bind(this);
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    let data = [];
    axios.get(`/api/${this.state.start}/${this.state.end}`)
    .then((response) => {
      let keys = Array.prototype.slice.call(Object.keys(response.data));
      keys.forEach((entry, index) => {
        var obj = {};
        var key = entry;
        var value = response.data[key];
        obj[key] = value;
        data.push(obj);
      })
      this.setState({
        data: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleDates() {
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;
    this.setState({
      start: start,
      end: end
    }, this.fetchData);
  }
  
  render() {
    return (
      <div className="main">
        <h1>BitCoin Currency Chart</h1>
        <div>
          <span>Startdate:</span>
          <input id="start" type="date"/>
          <span>Enddate:</span>
          <input onChange={() => this.handleDates()} id="end" type="date"/>
        </div>
        <ChartComponent data={this.state.data}/>
        <h5>Powered by <a href="https://www.coindesk.com">CoinDesk</a></h5>
      </div>
    );
  }
}
export default App;
