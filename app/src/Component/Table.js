import React,{Component} from 'react';
import '../Resources/css/Table.css';
import { FaChevronLeft} from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { IconContext } from "react-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CsvDownload from 'react-json-to-csv'



class Table extends Component{
    constructor(props){
        super(props);

        this.state = {
            index : 1,
            users: [
            ],
            limit:10,
            pagination:1,
            startDate: new Date(),
            lastDate: new Date(),
            lastUsers:[

            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeLast = this.handleChangeLast.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/getData')
        .then(res => res.json())
        .then((data) => {
            
            console.log(data);
            this.setState({
                users: data['data'],
                lastUsers : data['data'],
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

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleChangeLast(date) {
        this.setState({
            lastDate: date
        });
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

    search = () => {

        this.setState({
            users :  this.state.lastUsers.filter( users => new Date(users.invoice_date) - this.state.startDate > 0 &&  this.state.lastDate   - new Date(users.invoice_date) > 0  ),
        });



       
        console.log(this.state.startDate+" "+this.state.lastDate);
    }

    defineStructure = () =>{
        const users = this.state.users.map((user,index) => {
                if(this.state.index=='') return
                if (index<=this.state.index * this.state.limit && index>(this.state.index-1) * this.state.limit ) {
                    return  <tr>
                                <th>{user.transaction_id}</th>
                                <th>{user.source}</th>
                                <th>{user.manufacture}</th>
                                <th>{user.warehouse_id}</th>
                                <th>{user.po}</th>
                                <th>{user.saleID}</th>
                                <th>{user.name}</th>
                                <th>{user.qty}</th>
                                <th>{user.transaction_date}</th>
                                <th>{user.gross_sale}</th>
                                <th>{user.transaction_comission}</th>
                                <th>{user.Marketplace_fee}</th>
                                <th>{user.trasaction_tax}</th>
                                <th>{user.Net}</th>
                                <th>{user.invoice_date}</th>
                                <th>{user.Total_Item_cost}</th>
                                <th>{user.shipping_cost}</th>
                                <th>{user.invoice_tax}</th>
                                <th>{user.total_cost}</th>
                                <th>{user.Margin_gross_dolar}</th>
                                <th>{user.Margin_gross_percente}</th>
                                <th>{user.Marketplace}</th>
                                <th>{user.vendor}</th>
                                <th>{user.Month}</th>
                                <th>{user.VendorInFba}</th>
                                <th>{user.Date_insert}</th>
                                <th>{user.Notes}</th>
                            </tr>
                }});

                const dat = (

                    <CsvDownload data={this.state.users} />
                )
        return(
            
            <div className="table">
            <div className="table-date-form">
                <div className="">
                    <span>From:</span>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="">
                    <span>To:</span>
                    <DatePicker
                        selected={this.state.lastDate}
                        onChange={this.handleChangeLast}
                    />
                </div>

                <button type="buttom" onClick={this.search}>Go it!!</button>
                {dat}
            </div>
            <div className="table-style">
                <table >
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Source</th>
                            <th>Manufacture</th>
                            <th>Warehouse</th>
                            <th>StoreOrderID</th>
                            <th>SaleID</th>
                            <th>Name Buyer</th>
                            <th>Qty</th>
                            <th>Transaction Date</th>      
                            <th>Gross Sale</th>
                            <th>Transaction Commission</th>
                            <th>Marketplace Fee</th>
                            <th>Trasaction Tax</th>
                            <th>Net</th>
                            <th>Invoice Date</th>     
                            <th>Total item Cost</th>
                            <th>Shipping Cost</th>
                            <th>Invoice Tax</th>
                            <th>Total Cost</th>
                            <th>Margin Gross $</th>
                            <th>Margin Gross %</th>
                            <th>Marketplace</th>
                            <th>Vendor</th>
                            <th>Month</th>
                            <th>VendorInFba</th>
                            <th>Date Insert</th>
                            <th>Notes</th>
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