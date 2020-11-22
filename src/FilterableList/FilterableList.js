import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem'

//What does line 8 -- <ListItem {...file} mean?????  I get that it's copying the entire file.. but as a prop? what? I think it's passing the object as a prop.

class FilterableList extends Component {
    render(){

        const list = this.props.files.map((file, key) => 
            <ListItem {...file} key={key}/>
        );

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