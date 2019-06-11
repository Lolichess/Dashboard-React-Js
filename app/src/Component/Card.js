import React,{Component} from 'react';

import { FaRocket } from 'react-icons/fa';
import { IconContext } from "react-icons";
import '../Resources/css/Card.css';

class Card extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="card-style ">
                <h3>{this.props.name}</h3>
                <IconContext.Provider value={{className: "card-icon-font" }}>  
                    <FaRocket /> 
                </IconContext.Provider>
            </div> 
        );
    }
}

export default Card;