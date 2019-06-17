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
            limit:5,
            pagination:1,
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/getData')
        .then(res => res.json())
        .then((data) => {
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

    defineStructure = () =>{
        const users = this.state.users.map((user,index) => {
                if (index<=this.state.index * this.state.limit && index>(this.state.index-1) * this.state.limit ) {
                    return <tr><th>{user.name}</th></tr>
                }});
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
                <input type="text" value={this.state.index}></input>
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