import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import { getHolidays } from './services/services';

class App extends Component {
  constructor(){
    super();
    this.state = {
      country: ["MX", "US"],
      year: [2019, 2020, 2021],
      months: ["January", 
               "February", 
               "March", 
               "April", 
               "May", 
               "June", 
               "July", 
               "August", 
               "September", 
               "October", 
               "November", 
               "December"],
      holidays: [],
      data: {}
    }
  }  
  
 componentWillMount(){
   let {data} = this.state;
   let date = new Date();
   let year = moment(date).format('YYYY');
   data = {
     year: year,
     country: 'MX'
   }
   this.setState({data})
 }

  displayHolidays = (data) => {
    let {holidays} = this.state;
    getHolidays(data)
    .then(res => {
    holidays=res.data;
    this.setState({holidays})
  })
    .catch(err => {
    console.log(err);
  })
  }

  handleChange = (e, name) => {
    let {data} = this.state;
    data[name]=e.target.value;
    this.setState({data})
      if(name === 'year' || name === 'country'){
        this.displayHolidays(data)
      }
  }
  




  render() {
    let {holidays, data} =this.state;
    //console.log(holidays.filter(item => data.months === moment(item.date).format('MMMM')))
    return (
      <div className="App">
          <header className="App-header">
            <h1>Días Festivos de México y Estados Unidos</h1>
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
              <select name="months" id="months" onChange={value=>this.handleChange(value,'months')}>
                  <option defaultValue>Mes</option>
                  {this.state.months.map((item,index) => <option key={index} index={index} item={item}>{item}</option>)} 
              </select>
          </div>

          <table className="table-container">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Date</th>
              </tr>

              {holidays.filter(item => data.months === undefined || data.months === 'mes' ? item : data.months === moment(item.date).format('MMMM')).map((item, index) => 
              <tr key={index} index={index} item={item}>
                <td className="name">{item.localName}</td>
                <td>{item.date}</td>
              </tr>)}
            </tbody>
          </table>
      </div>
    );
  }
}

export default App;
