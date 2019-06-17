import React,{Component} from 'react';
import '../Resources/css/Table.css';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { IconContext } from "react-icons";

class Table extends Component{
    constructor(props){
        super(props);
    }

    defineStructure = () =>{
        return(
            <div className="table">
            <div className="table-style">
                <table >
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Qty</th>
                            <th>Retail Price</th>
                            <th>Cost</th>
                            <th>Shipping</th>
                            <th>Tax</th>
                            <th>Total Cost</th>
                            <th>Marketplace Fees</th>
                            <th>Margin Gross</th>
                            <th>% Margin</th>

                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>
                </table>

            </div>

        <div className="table-footer">
            <div></div>
            <div className="table-pagination">
                <a href="#">
                <IconContext.Provider value={{className: "icon-font" }}>  <FaChevronLeft /> </IconContext.Provider>
                </a>
                <input type="text"></input>
                <a href="#">
                <IconContext.Provider value={{className: "icon-font" }}>  <FaChevronRight /> </IconContext.Provider>
                </a>
            </div>
        </div>
        </div>
        );
    }

    render(){
        return(

            this.defineStructure()

        );
    }
}

export default Table;