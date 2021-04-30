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


    };
  }

  filterData = (event)=>{
    if(this.state.numberOfHorns !== 'All'){
      this.setState({data : jsonData.filter(element=>element.horns === Number(this.state.numberOfHorns))});
    }else{
      this.setState({data : jsonData});
    }
  }

  updateState = creatures => this.setState({numberOfHorns : creatures.target.value});



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
      <Header
        filterData={this.filterData}
        numberOfHorns={this.state.numberOfHorns}
        updateState={this.updateState}/>
      <SelectedBeast show={this.state.show} close={this.close} details={this.state.details}/>
      <Main data={this.state.data} viewBeast={this.viewBeast}/>
      <Footer/>
    </div>
  );

};
}

export default App;
