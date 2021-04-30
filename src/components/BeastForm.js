import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BeastForm extends React.Component{ newState = horns => this.props.updateState(horns);

    filter = (event) => {
      event.preventDefault();
      this.props.filterData(event);
    }

    render() {
      return (
        <Form onSubmit={this.filter}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select The Number of Horns: </Form.Label>
            <Form.Control onChange={this.newState} as="select" name="numberOfHorns" defaultValue={'All'}>
              <option value="All">View All beasts</option>
              <option value="1">One-horn beasts</option>
              <option value="2">Two-horn beasts</option>
              <option value="3">Three-horn beasts </option>
              <option value="100">A hundred-horn beasts</option>
            </Form.Control>
            <Button variant="primary" type="submit">
              Filter
            </Button>
          </Form.Group>
        </Form>
      );
    }
}
export default BeastForm;
