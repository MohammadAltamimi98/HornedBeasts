import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class SelectedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:false,
            // beast={}
        };

    }

    render(){
        return (
    <Modal.Dialog>
       <Modal.Header closeButton  onShow={this.props.show} onHide={this.props.hide}>
          <Modal.Title>{this.props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
          <img  src={this.props.image_url}  alt={this.props.title}  title={this.props.title}/>
          <p>{this.props.description}</p>
          <Button onClick={this.increaseNumOfLikes} >Like ❤️ </Button>
          <p>Number Of Likes: {this.state.numOfLikes}❤️</p> 
      </Modal.Body>

      <Modal.Footer>
         <Button variant="secondary">Close</Button>
        <Button variant="primary" onClick={this.props.hideBeast}>Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
        )
    }
}




  


export default SelectedBeast;