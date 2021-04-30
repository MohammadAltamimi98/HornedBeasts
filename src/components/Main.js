import React from 'react';
import HornedBeast from './HornedBeast';
import CardDeck from 'react-bootstrap/CardDeck';


class Main extends React.Component{

  render(){
    return (<CardDeck>
      {this.props.data.map((element,index) => {
        return <HornedBeast
          image_url={element.image_url}
          title={element.title}
          description={element.description}
          key={index}
          viewBeast={this.props.viewBeast}/>;
      }
      )
      }
    </CardDeck>
    );

  }

}


export default Main;
