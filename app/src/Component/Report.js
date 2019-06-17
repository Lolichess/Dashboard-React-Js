import React,{Component} from 'react';
import Table from './Table';

class Report extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(

            <div className="report-style">
                <Table></Table>
            </div>

        );
    }

}

export default Report;