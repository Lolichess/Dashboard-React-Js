import  React, {Component} from 'react';
import { FaHome } from 'react-icons/fa';
import { IconContext } from "react-icons";
import '../Resources/css/NavBar.css';
class NavBar extends Component{

    constructor(props){
        super(props);

        this.state = {
            list :[
                {
                    name : 'Home',
                    url : 'index.js',
                    icon : 'FaHome',
                },
                {
                    name: 'Report Seller',
                    url : 'report.js',
                    icon : 'FaDollarSign',
                }
                ,
                {
                    name: 'Report Returns',
                    url : 'report.js',
                    icon : 'FaHome',
                }
                ,
                {
                    name: 'Report Cancelles',
                    url : 'report.js',
                    icon : 'FaHome',
                }
                ,
                {
                    name: 'FBA',
                    url : 'report.js',
                    icon : 'FaHome',
                },
                {
                    name: 'Charts',
                    url : 'report.js',
                    icon : 'FaHome',
                }
            ]
        };




    }


    render(){
        const nav = this.state.list.map( x => <li> <IconContext.Provider value={{className: "icon-font" }}>  <FaHome /> </IconContext.Provider> {x.name}</li>);
        return(
            <div className='nav-bar-left'>
                <div className="logo-header">
                    <h3>Lionparts</h3>
                </div>           
                <ul>
                    {nav}
                </ul>
            </div>
        );

    }

}


export default NavBar;