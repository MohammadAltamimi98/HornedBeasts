import React from 'react';
import { Card,Button } from 'react-bootstrap';


class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state={
      numOfLikes:0,
    };
  }

 increaseNumOfLikes=() => {
   this.setState({
     numOfLikes:this.state.numOfLikes + 1,

   });
 }

 displayBeast = ()=>{
   this.props.viewBeast(this.props);
   console.log('this',this);
   console.log('this.props',this.props);
   console.log('this.viewBeast',this.viewBeast);
   console.log('this.props.viewBeast',this.props.viewBeast);
   //    this.setState({numOfLikes : this.state.numOfLikes + 1});

 }


 render(){
   return(<div>

     <Card bg="info" border="dark" style={{ width: '18rem' }}>


       <Card.Title><h2>{this.props.title}</h2></Card.Title>

       <Card.Img onClick={this.displayBeast} variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title}/>
       <Card.Body>
         <Card.Text><p>{this.props.description}</p></Card.Text>
         <Button onClick={this.increaseNumOfLikes} >Like ❤️ </Button>
         <Card.Text><p>Number Of Likes: {this.state.numOfLikes}❤️</p></Card.Text>


       </Card.Body>
     </Card>
     <br/>
   </div>

   );
 }
}



export default HornedBeast;

