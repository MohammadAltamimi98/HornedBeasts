import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class SelectedBeast extends React.Component{

  render(){
    return (

      <Modal.Dialog>
        <Modal.Header closeButton onShow={this.props.show} onHide={this.props.close}>

          <Modal.Title>{this.props.details.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={this.props.details.image_url} alt={this.props.details.title} title={this.props.details.title}/>
          <p>{this.props.details.description}</p>
          {/* <Button onClick={this.details.increaseNumOfLikes} >Like ❤️ </Button>
          <p>Number Of Likes: {this.details.state.numOfLikes}❤️</p>  */}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.close}>Close</Button>
          {/* <Button variant="primary" onClick={this.props.hideBeast}>Save changes</Button> */}
        </Modal.Footer>

      </Modal.Dialog>
    );
  }
}







export default SelectedBeast;

