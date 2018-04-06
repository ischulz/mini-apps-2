import React from 'react';
import axios from 'axios';
import {Button, Icon, Row, Col, ProgressBar, Input} from 'react-materialize'

class SuccessPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: [],
    };

    this.onChange = this.onChange.bind(this);
  }
  
  onChange(name, e) {
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="success">
        <Row>
            <h5>Success, your request is being requested...some!</h5>
          <Col s={12}>
            <ProgressBar />
          </Col>
          <div className="continue_button">
            <Button onClick={() => this.props.handlePage(1)} waves='light'>Continue Shopping</Button>
          </div>
        </Row>
      </div>
    );
  }
}
export default SuccessPage;
