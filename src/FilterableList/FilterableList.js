import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem'


//lines 11 & 12 iterate over the files array and keep files with the following criteria: 
//the file name contains the searchTerm AND the file status is equal to the filterOption, or the filterOption is 'All'
class FilterableList extends Component {
    render(){

        const { searchTerm, filterOption } = this.props;

        const list = this.props.files.filter(file => file.name.includes(searchTerm)&&(filterOption==='All' || file.status === filterOption)).map
        ((file,key) => <ListItem {...file} key={key}/>)
        
        return(
            <div className='FilterableList'>
                {list}
            </div>
        );
    }
}

FilterableList.defaultProps = {
    files:[]
};

export default FilterableList;