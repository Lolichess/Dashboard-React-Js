import React,{Component} from 'react';
import { FaBell } from 'react-icons/fa';
import { IconContext } from "react-icons";
import '../Resources/css/Notification.css';

class Notification extends Component{

    constructor(props){
        super(props);

        this.showNotifications = this.showNotifications.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        
        this.state = {
            notifications : false,
            msg:[
                {
                    id : 1,
                    info: 'A product was delete from the server',
                    hour : '19:32'
                },
                {
                    id : 1,
                    info: 'A product was delete from the server',
                    hour : '19:32'
                },
                {
                    id : 1,
                    info: 'A product was delete from the server',
                    hour : '19:32'
                },
                {
                    id : 1,
                    info: 'A product was delete from the server',
                    hour : '19:32'
                },
                {
                    id : 1,
                    info: 'A product was delete from the server',
                    hour : '19:32'
                }
            ]
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        this.setState({
            notifications : false
        });
    }

    showNotifications = () =>{
        this.setState({
            notifications : !this.state.notifications
        });
    }

    render(){
        const msg = this.state.msg.map(x => <li>
            <div className="info-style">
                <p>{x.info}</p>
            </div>
            <div className="date-style">
                <span>{x.hour}</span>
            </div>
            </li>);
        return(
                <div className="notification-header" onClick={this.showNotifications}>
                    <a href="#" role="botton">
                    <IconContext.Provider value={{className: "icon-font" }}>  
                        <FaBell />
                    </IconContext.Provider>
                    </a>
                    { this.state.notifications ?
                    <div className="box-notification">
                        <ul>
                            {msg}
                        </ul>
                    </div> : null
                    } 
                </div>
        );
    }
}

export default Notification;