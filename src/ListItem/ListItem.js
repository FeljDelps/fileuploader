import React, { Component } from 'react';
import ControlBar from '../ControlBar/ControlBar';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFileImage,
    faFileAudio,
    faFileAlt,
    faFileVideo
} from '@fortawesome/free-solid-svg-icons'

class ListItem extends Component {
    render(){

        const icons = {
            'jpg':faFileImage,
            'mov':faFileVideo,
            'txt':faFileAlt,
            'mp3':faFileAudio
        }

        return(
            <div className='ListItem'>
                <div className='ListItem_icon'>
                    <div className='ListItem_circle'>
                        <FontAwesomeIcon icon={icons[this.props.fileType] || faFileAlt}/>
                    </div>
                </div>
                <div className='ListItem_content'>
                    <div className='ListItem_heading'>
                        <div className='ListItem_title'>{this.props.name}</div>
                         <div className='ListItem_size'>{this.props.size}</div>
                    <div className='ListItem_actions'>
                        <div className='ListItem_status'>{this.props.status}</div>
                        <ControlBar />
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default ListItem;