import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox'
import FilterOptions from '../FilterOptions/FilterOptions'

class SearchBar extends Component {
    render(){
        return(
            <div className='SearchBar'>
                <div className='SearchBar_heading'>
                    <h1>File Uploader</h1>
                </div>
                <div className='Searchbar_content'>
                    <SearchBox 
                        searchTerm={this.props.searchTerm}/>
                    <FilterOptions
                        filterOption={this.props.filterOption} />
                </div>
            </div>
        );
    }
}

export default SearchBar;