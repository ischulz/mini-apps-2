import React from 'react';
import axios from 'axios';
import {Button, Icon, Row, Input} from 'react-materialize'

class UserPayments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: [],
    };
  }

  render() {
    return (
      <div className="user_payments">
        <Row 
          onKeyPress={(e) => {
                      if(e.key === 'Enter') {
                        this.props.handlePage(4);
                      }
                    }}>
            <Input 
              s={12} 
              label="Credit Card #" 
              value={this.props.data.creditCardNum} 
              onChange={e => this.props.handleChange('creditCardNum', e)}/>
             <Input 
              s={2} 
              type='select' 
              label="Select Month" 
              defaultValue='1' 
              value={this.props.data.expiryDate_month} 
              onChange={e => this.props.handleChange('expiryDate_month',e)}>
              {[1,2,3,4,5,6,7,8,9,10,11,12].map((item) => {
                  return (<option key={item} value={item}>{item}</option>)
                }
              )}
            </Input>
             <Input 
              s={2} 
              type='select' 
              label="Select Year" 
              defaultValue='2018' 
              value={this.props.data.expiryDate_year} 
              onChange={e => this.props.handleChange('expiryDate_year',e)}>
              {[2018,2019,2020,2021,2022,2023,2024,2025,2026,2027].map((item) => {
                  return (<option key={item} value={item}>{item}</option>)
                }
              )}
            </Input>            
            <Input 
              s={3} 
              type="password" 
              label="CVV" 
              value={this.props.data.cvv} 
              onChange={e => this.props.handleChange('cvv', e)}/>
            <Input 
              s={6} 
              abel="Billing ZIP" 
              value={this.props.data.billingZip} 
              onChange={e => this.props.handleChange('billingZip', e)}/>
            <div><Button onClick={() => this.props.handleSubmit()} waves='light'>Purchase</Button></div>
        </Row>
      </div>
    );
  }
}
export default UserPayments;
