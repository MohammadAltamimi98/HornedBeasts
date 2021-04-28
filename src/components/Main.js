import React from 'react';
import HornedBeast from './HornedBeast';
import jsondata from '../data.json';
import CardDeck from "react-bootstrap/CardDeck";


class Main extends React.Component{
constructor(props){
    super(props);
    this.state={
        data: jsondata,
    };
}


    render(){
        return (<CardDeck>
            {this.state.data.map(beast => {
            return <HornedBeast 
            image_url={beast.image_url}
            title={beast.title}
            description={beast.description} />
            })}
            </CardDeck>
          )
                
        }   

}


export default Main;
