import React, { Component } from 'react';
import './App.css';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import axios from 'axios';

const moment = extendMoment(Moment);

class App extends Component {
  constructor(){
    super();
    this.state = {
      country: ["MX", "US"],
      year: [],
      months: [],
      holidays: []
    }
  }

  getYears(){
    let fromDate = moment().year(2019);
    let toDate = moment().add(10, 'years');
    let range = moment().range(fromDate, toDate);
    let years = [];
    
    years.push(range);
    this.setState({year: years});
  }


  componentWillMount(){
    let {year, country, holidays} = this.state;

    axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${country}`)
      .then(res => {
        holidays=res.holidays;
        this.setState({holidays})
      })
      .catch(err => {
        console.log(err)
      })
  }
  




  render() {
    return (
      <div className="App">
          <header className="App-header">
            <h1>Holidays in Mexico & USA</h1>
          </header>
          <div>
              <select name="Country" id="country">
                  <option disabled selected value>Select a country</option>
                  {this.state.country.map((item,index) => <option key={index} index={index} item={item}>{item}</option>)}
              </select>
              <select name="Year" id="year">
                  <option disabled selected value>Select a Year</option>
                  {this.state.year.map((item,index) => <option key={index} index={index} item={item}>{item}</option>)}
              </select>
              <select name="Month" id="month">
                  <option disabled selected value>Select a Month</option>
                  {this.state.months.map((item,index) => <option key={index} index={index} item={item}>{item}</option>)} 
              </select>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Date</th>
              </tr>
              {this.state.holidays.map((item, index) => 
              <tr key={index} index={index} item={item}>
                <td>{item.name}</td>
                <td>{item.date}</td>
              </tr>)}
            </tbody>
          </table>

      </div>
    );
  }
}

export default App;
