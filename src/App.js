import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import jsonData from './data.json';
import SelectedBeast from './components/SelectedBeast';
import BeastForm from './components/BeastForm';



class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      numberOfHorns:'',
      data:jsonData,
      show:false,
      details:{},
      beastData: jsonData

    };
  }

  filterHornBeast = (horns) => {
    if(horns === 'all') {
      return this.setState({});
    } else {
      const array = this.state.beastData.filter( element => element.horns === horns);
      this.setState({beastData: array});
    }}




viewBeast = (e) => {

  this.setState(
    {
      show: true,
      details: e
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
      <BeastForm/>
      <SelectedBeast show={this.state.show} close={this.close} details={this.state.details}/>
      <Main data={this.state.data} viewBeast={this.viewBeast}/>
      <Footer/>
    </div>
  );

};
}


export default App;
