import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import jsondata from './data.json';



class App extends React.Component{

  render(){
    return(
     <div>
      <Header/>
      <Main/>
      <Footer/>
     </div>
    )
  
  };
}


export default App;