import React,{Component} from 'react';
import Notification from './Notification';
import '../Resources/css/Header.css';

class Header extends Component{
    render(){
        return(
            <div className="header-top">
                <Notification></Notification>
            </div>
        );
    }
}

export default Header;