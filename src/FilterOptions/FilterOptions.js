import React, { Component } from 'react';

class FilterOptions extends Component {
    render(){
        return(
            <div className='FilterOptions'>
                <div className='FilterOptions_options'>
                    <label htmlFor='filter_all'>
                        <input type='radio' value='All' id='filter_all' name='filter'/>
                    All
                    </label>
                    <label htmlFor='filter_uploaded'>
                        <input type='radio' value='Uploaded' id='filter_uploaded' name='filter'/>
                    Uploaded
                    </label>
                    <label htmlFor='filter_synced'>
                        <input type='radio' value='Synced' id='filter_synced' name='filter'/>Synced
                    </label>
                    <label htmlFor='filter_new'>
                        <input type='radio' value='New' id='filter_new' name='filter'/>New
                    </label>
                </div>
                
            </div>
        );
    }
}

export default FilterOptions;