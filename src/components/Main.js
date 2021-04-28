import React from 'react';
import HornedBeast from './HornedBeast';
import jsondata from '../data.json';
import CardDeck from "react-bootstrap/CardDeck";


class Main extends React.Component{
constructor(props){
    super(props);
    this.state={
        data: jsondata,
        beast:{}
    };}

    showBeast = (clickedBeast) => {
        this.setState({
          show: true,
          beast: clickedBeast,
        })
      }
    hideBeast = () => {
        this.setState({
          show: false,
          beast: {},
        })
      }


    



    render(){
        return (<CardDeck>
            {this.state.data.map((element,index) => {
            return <HornedBeast 
            image_url={element.image_url}
            title={element.title}
            description={element.description}
            key={index} />
            })}
            </CardDeck>
          )
                
        }   

}


export default Main;
