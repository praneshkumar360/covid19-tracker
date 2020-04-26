import React,{ useState,useEffect } from 'react'
import {fetchCountries} from '../../api'
import 'bootstrap/dist/js/bootstrap.min.js'
import styles from './countrypicker.module.css'
const Countrypicker = ({handleCountryChange,countryBadge}) => {
    const [fetchedCountries,setfetchedCountries] = useState([]);
    useEffect(() => {
      const fetchAPI = async () => {
        setfetchedCountries(await fetchCountries())
      }
      fetchAPI();
    },[setfetchedCountries])

    const showCountries = fetchedCountries.map((country,i) => {
        return (
                <option key={i} value={country} className="dropdown-item bg-light" >{country}</option>
        )
    })
    return (
        <div className="container mt-3 justify-content-center">
            <form>
                <div className="input-group mt-5 justify-content-center">
                    <div className="input-group-prepend">
                        <button type="button" className="btn btn-dark dropdown-toggle rounded-lg" data-toggle="dropdown" >
                             Affected Countries
                        </button>
                        <div className="dropdown-menu" >
                            <div className={styles.countryDropdown} onClick={(e) => handleCountryChange(e.target.value)}>
                                <div className="dropdown-header bg-dark text-white">Countries</div>
                                <option className="dropdown-item bg-light">Global</option>
                                {showCountries}
                            </div> 
                        </div>
                    </div>
                    <div className="input-group-text text-justify text-uppercase rounded-lg ml-3 bg-dark text-white float-sm-bottom">
                        {countryBadge}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Countrypicker;