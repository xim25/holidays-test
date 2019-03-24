import React from 'react';


const Filters = () => (
    <div>
        <select name="Country" id="country">
            <option disabled selected value>Select a country</option>
            <option value="">Mexico - MX</option>
            <option value="">United States - US</option>
        </select>
        <select name="Year" id="year">
            <option disabled selected value>Select a Year</option>

        </select>
        <select name="Month" id="month">
            <option disabled selected value>Select a Month</option>
            
        </select>

    </div>
    
)

export default Filters
