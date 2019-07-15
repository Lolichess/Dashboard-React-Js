import  React, {Component} from 'react';
import { FaHome } from 'react-icons/fa';
import { IconContext } from "react-icons";
import '../Resources/css/NavBar.css';
import { Link } from 'react-router-dom';
class NavBar extends Component{

    constructor(props){
        super(props);

        this.state = {
            list :[
                {
                    name : 'Home',
                    url : '/',
                    icon : 'FaHome',
                },
                {
                    name: 'Report Seller',
                    url : '/report',
                    icon : 'FaDollarSign',
                },
                {
                    name: 'Invoice no Match',
                    url : '/invoice',
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
        const nav = this.state.list.map( x => <li> <Link to={x.url}> <IconContext.Provider value={{className: "icon-font" }}>  <FaHome /> </IconContext.Provider> {x.name}</Link></li>);
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