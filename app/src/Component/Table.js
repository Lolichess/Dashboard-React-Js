import React,{Component} from 'react';
import '../Resources/css/Table.css';
import { FaChevronLeft} from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { IconContext } from "react-icons";

class Table extends Component{
    constructor(props){
        super(props);

        this.state = {
            index : 1,
            users: [
            ],
            limit:10,
            pagination:1,
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/getData')
        .then(res => res.json())
        .then((data) => {
            
            console.log(data);
            this.setState({
                users: data['data'],
            })
        })
        .catch(console.log)
    }

    decremenet = () =>{


        if(this.state.index>1){
        
            this.setState({
                index : this.state.index-1,
            });

        }   


    }

    increment = () =>{
            this.setState({
                index : this.state.index+1,
            });
    }

    changeValue = (event) =>{
        console.log(event);
            this.setState({
                index : event.target.value
            });
    }

    defineStructure = () =>{
        const users = this.state.users.map((user,index) => {
                if(this.state.index=='') return
                if (index<=this.state.index * this.state.limit && index>(this.state.index-1) * this.state.limit ) {
                    return  <tr>
                                <th>{user.Manufacture}</th>
                                <th>{user.Warehouse}</th>
                                <th>{user.SaleID}</th>
                                <th>{user.StoreOrderID}</th>
                                <th>{user.Order_date}</th>
                                <th>{user.Qty}</th>
                                <th>{user.Retail_Price}</th>
                                <th>{user.Total_item_cost}</th>
                                <th>{user.Shipping}</th>
                                <th>{user.Tax}</th>
                                <th>{user.Total_cost}</th>
                                <th>{user.MarketPlace_fee}</th>
                                <th>{user.Margin_gross_dolar}</th>
                                <th>{user.Margin_gross_per}</th>
                                <th>{user.MarketPlace}</th>
                                <th>{user.Vendor}</th>
                                <th>{user.paymentID}</th>
                            </tr>
                }});
        return(
            <div className="table">
            <div className="table-style">
                <table >
                    <thead>
                        <tr>
                            <th>Manufacture</th>
                            <th>Warehouse</th>
                            <th>SaleID</th>
                            <th>StoreOrderID</th>
                            <th>OrderDate</th>
                            <th>Qty</th>
                            <th>Retail Price</th>
                            <th>Total item Price</th>
                            <th>Shipping</th>
                            <th>Taxt</th>
                            <th>Total Cost</th>
                            <th>Marketplace Fees</th>
                            <th>Margin Gross</th>
                            <th>% Margin</th>
                            <th>Marketplace</th>
                            <th>Vendor</th>
                            <th>PaymentID</th>
                        </tr>
                    </thead>
                    <tbody>
                         {users}
                    </tbody>
                </table>

            </div>

        <div className="table-footer">
            <div></div>
            <div className="table-pagination">
                <a role="botton" onClick={this.decremenet}>
                <IconContext.Provider value={{className: "icon-font" }}>  <FaChevronLeft /> </IconContext.Provider>
                </a>
                <input type="text" value={this.state.index} onChange={this.changeValue}></input>
                <a role="botton" onClick={this.increment}>
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