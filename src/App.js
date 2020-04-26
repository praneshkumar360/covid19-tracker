import React, { Component } from 'react'
import './App.css';
import { Cards,Chart,Countrypicker } from './components'
import 'bootstrap/dist/css/bootstrap.min.css'
import {fetchData} from './api/index'
import covid from './images/covid-19.jpg'

export default class App extends Component {
  state = {
    data: {},
    country: 'Global'
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    })
  }
  handleCountryChange = async (country) => {
    const fetchedCountry = await fetchData(country)
    this.setState({
      data: fetchedCountry,
      country: country
    })
  }
  render() {
    return (
      <div className="container">
        <img className="img-fluid mt-3" src={covid} alt="Chania"></img>
        <Cards data={this.state.data}></Cards>
        <Countrypicker handleCountryChange={this.handleCountryChange} countryBadge={this.state.country}></Countrypicker>
        <Chart data={this.state.data} country={this.state.country}></Chart>
      </div>
    )
  }
}

