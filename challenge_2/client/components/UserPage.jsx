import React from 'react';
import axios from 'axios';
import {Button, Icon, Row, Input} from 'react-materialize'

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test:[],
    };

  }

  render() {
    return (
      <div className="user_page">
        <Row
            onKeyPress={(e) => {
                      if(e.key === 'Enter') {
                        this.props.handlePage(2);
                      }
                    }}>
            <Input 
              s={6} 
              label="First Name" 
              error={!this.props.data.firstName && 'I need text'}
              icon="account_circle" 
              value={this.props.data.firstName} 
              onChange={e => this.props.handleChange('firstName', e)}/>
            <Input 
              s={6} 
              label="Last Name" 
              value={this.props.data.lastName} 
              onChange={e => this.props.handleChange('lastName', e)}/>
            <Input 
              s={12} 
              type="password" 
              label="password" 
              validate icon="vpn_key" 
              value={this.props.data.password} 
              onChange={e => this.props.handleChange('password', e)}/>
            <Input 
              s={12} 
              type="email" 
              label="Email" 
              validate 
              error={"Please enter a valid email"}
              icon="email" 
              value={this.props.data.email} 
              onChange={e => this.props.handleChange('email', e)}/>
            <div><Button 
                    onClick={() => this.props.handlePage(2)} 
                    waves='light' 
                    >Next</Button></div>
        </Row>
      </div>
    );
  }
}
export default UserPage;
