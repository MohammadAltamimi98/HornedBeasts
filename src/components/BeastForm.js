import React from 'react';
import Form from 'react-bootstrap/Form';

class BeastForm extends React.Component{


  render(){
    return <>

      <Form>
        <select onChange={this.newState} class="custom-select custom-select-lg mb-3">
          <option value="All" selected>All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </select>
      </Form>
    </>;
  }


}
export default BeastForm;
