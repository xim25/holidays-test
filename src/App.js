import React, { Component } from 'react';
import './App.css';
// import Moment from 'moment';
// import { extendMoment } from 'moment-range';
import { getHolidays } from './services/services';


// const moment = extendMoment(Moment);

class App extends Component {
  constructor(){
    super();
    this.state = {
      country: ["MX", "US"],
      year: [2019, 2020, 2021],
      months: ["Enero", 
               "Febrero", 
               "Marzo", 
               "Abril", 
               "Mayo", 
               "Junio", 
               "Julio", 
               "Agosto", 
               "Septiembre", 
               "Octubre", 
               "Noviembre", 
               "Diciembre"],
      holidays: [],
      data: {}
    }
  }  
  

  displayHolidays = () => {
    let { holidays } = this.state;
    getHolidays()
    .then(res => {
    holidays=res;
    this.setState({holidays})
  })
    .catch(err => {
    console.log(err)
  })
  }

  handleChange = (e, name) => {
    // let {data} = this.state;
    // data[name]=value
    // this.setState({data})
    console.log(e.target);
  }
  




  render() {
    return (
      <div className="App">
          <header className="App-header">
            <h1>Días Festivos de México & Estados Unidos</h1>
          </header>
          <div>
              <select name="country" id="country" onChange={value=>this.handleChange(value,'country')}>
                  <option defaultValue>País</option>
                  {this.state.country.map((item,index) => <option key={index} index={index} item={item}>{item}</option>)}
              </select>
              <select name="year" id="year" onChange={value=>this.handleChange(value,'year')}>
                  <option defaultValue>Año</option>
                  {this.state.year.map((item,index) => <option key={index} index={index} item={item}>{item}</option>)}
              </select>
              <select name="month" id="month" onChange={value=>this.handleChange(value,'month')}>
                  <option defaultValue>Mes</option>
                  {this.state.months.map((item,index) => <option key={index} index={index} item={item}>{item}</option>)} 
              </select>
          </div>

          {/* <table>
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
          </table> */}
      </div>
    );
  }
}

export default App;
