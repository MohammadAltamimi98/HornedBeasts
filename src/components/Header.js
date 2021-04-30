import React from 'react';
import { Navbar } from 'react-bootstrap';
import BeastForm from './BeastForm';

class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      beasts : ''
    };
  }
  render(){
    return (
      <div>

        <Navbar bg="dark" variant="dark" >
          <Navbar.Brand href="#home" style={{position:'relative', left:'500px'}}><h1>Horned Beasts</h1></Navbar.Brand>

        </Navbar>

        <br/>
        <header>
          <h1>My Collection of Horned Beasts</h1>

          <BeastForm
            filterData={this.props.filterData}
            numberOfHorns={this.props.numberOfHorns}
            updateState={this.props.updateState}
          />
        </header>


      </div>);

  }



}

export default Header;




