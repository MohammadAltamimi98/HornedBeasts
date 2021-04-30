import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import jsonSData from './data.json';
import SelectedBeast from './components/SelectedBeast';



class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      data:jsonSData,
      show:false,
      details:{}
    };
  }

viewBeast = (beast) => {

  this.setState(
    {
      show: true,
      details: beast
    });

}

close=()=>{
  this.setState({
    show:false,
    details:{}
  });
}


render(){
  return(
    <div>
      <Header/>
      <Main data={this.state.data} viewBeast={this.viewBeast}/>
      <SelectedBeast show={this.state.show} close={this.close} details={this.state.details}/>
      <Footer/>
    </div>
  );

};
}


export default App;
