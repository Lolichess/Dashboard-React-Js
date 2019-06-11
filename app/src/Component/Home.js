import React,{ Component } from 'react';
import Card from './Card';
import '../Resources/css/Home.css';
class Home extends Component{
    constructor(props){
        super(props);

        this.state ={
            cards:[
                {
                    name:'Sellers',
                    img : '',
                },
                {
                    name:'Charts',
                    img : '',
                },
                {
                    name : 'Report Last Month',
                    img : '',
                },
                {
                    name : 'Report Last Month',
                    img : '',
                },
                {
                    name : 'Report Last Month',
                    img : '',
                },
                {
                    name : 'Report Last Month',
                    img : '',
                }
            ]
        }
    }

    render(){
        const list_cards = this.state.cards.map(x => <Card name={x.name}></Card>);
        return(
            <div className="home-style">
                {list_cards}
            </div>
        );
    }
}

export default Home;