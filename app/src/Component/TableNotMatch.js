import React,{Component} from 'react';
import '../Resources/css/Table.css';
import { FaChevronLeft} from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { IconContext } from "react-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class TableNotMatch extends Component{
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
        fetch('http://localhost:3001/api/whitoutMatch')
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
            users :  this.state.lastUsers.filter( users => new Date(users.invoice_date) - this.state.startDate >= 0 &&  this.state.lastDate   - new Date(users.invoice_date) >= 0  ),
        });
        console.log(this.state.startDate+" "+this.state.lastDate);
    }

    defineStructure = () =>{
        const lastArray = [];

        for ( let x in this.state.users){
            for( let y in this.state.users[x]){
                lastArray.push(this.state.users[x][y]);
            }
        }

        const users = lastArray.map((user,index) => {
                    return  <tr>
                                <th>{user.invoice_no?user.invoice_no:user.invoice_number?user.invoice_number:user.invoice}</th>
                                <th>{user.order_no?user.order_no:user.order_number?user.order_number:user.order_number}</th>
                                <th>{user.warehouse?user.warehouse:user.invoice_number?'TR':'WPS'}</th>
                                <th>{user.price?user.price:user.Subtotal?user.Subtotal:user.item_cost}</th>
                                <th>{user.shipping?user.shipping:user.Freight?user.Freight:user.ship_cost}</th>
                                <th>{user.tax?user.tax:user.Tax?user.Tax:'0'}</th>
                            </tr>
                });
        console.log(users);
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
                <button type="buttom" onClick={this.download}>download</button>
            </div>
            <div className="table-style">
                <table >
                    <thead>
                        <tr>
                            <th>Invoice_no</th>
                            <th>Order N°</th>
                            <th>Warehouse</th>
                            <th>Price</th>
                            <th>Shipping</th>
                            <th>Tax</th>
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

export default TableNotMatch;