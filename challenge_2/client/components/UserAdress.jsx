import React from 'react';
import axios from 'axios';
import {Button, Icon, Row, Input} from 'react-materialize'

class UserAdress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: [],
    };
  }

  render() {
    return (
      <div className="user_adress">
        <Row             
          onKeyPress={(e) => {
                        if(e.key === 'Enter') {
                        this.props.handlePage(3);
                      }
                    }}>
            <Input 
              s={6} 
              label="Adress Line 1" 
              value={this.props.data.adress_line1} 
              onChange={e => this.props.handleChange('adress_line1', e)}/>
            <Input 
              s={6} 
              label="Adress Line 2" 
              value={this.props.data.adress_line2} 
              onChange={e => this.props.handleChange('adress_line2', e)}/>
            <Input 
              s={12} 
              label="City" 
              value={this.props.data.city} 
              onChange={e => this.props.handleChange('city', e)}/>
            <Input 
              s={12} 
              label="State" 
              value={this.props.data.state} 
              onChange={e => this.props.handleChange('state', e)}/>
            <Input 
              s={12} 
              label="ZIP" 
              value={this.props.data.zipcode} 
              onChange={e => this.props.handleChange('zipcode', e)}/>
            <div><Button onClick={() => this.props.handlePage(3)} waves='light'>Next</Button></div>
        </Row>
      </div>
    );
  }
}
export default UserAdress;
