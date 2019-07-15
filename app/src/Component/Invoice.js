import React,{Component} from 'react';
import TableNotMatch from './TableNotMatch';

class Invoice extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(

            <div className="report-style">
                <TableNotMatch></TableNotMatch>
            </div>

        );
    }

}

export default Invoice;