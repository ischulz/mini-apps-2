import React from 'react';
import axios from 'axios';
import UserPage from './UserPage.jsx';
import UserAdress from './UserAdress.jsx';
import UserPayments from './UserPayments.jsx';
import SuccessPage from './SuccessPage.jsx';
import {Button, Icon, Row, Input} from 'react-materialize'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      firstName:'',
      lastName: '',
      password: '',
      email: '',
      adress_line1:'',
      adress_line2: '',
      city: '',
      state: '',
      zipcode: '',
      creditCardNum:'',
      expiryDate_month: '',
      expiryDate_year: '',
      cvv: '',
      billingZip: '',
    };
    this.handlePage = this.handlePage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handlePage(page) {
    this.setState({page: page});
  }

  handleChange(name, e) {
    this.setState({
      [name]: e.target.value,
    });
  }

  handleSubmit() {
    axios.post('/submit', {
      params: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        email: this.state.email,
        adress_line1: this.state.adress_line1,
        adress_line2: this.state.adress_line2,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        creditCardNum: this.state.creditCardNum,
        expiryDate_month: this.state.expiryDate_month,
        expiryDate_year: this.state.expiryDate_year,
        cvv: this.state.cvv,
        billingZip: this.state.billingZip
      }
    })
    .then((response) => {
      console.log('Success', response);
    })
    .catch((err) => {
      console.log(err);
    })
    this.setState({page:1});
  }

  render() {
    {console.log('RENDER')}
    return (
      <div className="main">
        {this.state.page === 1 && (
          <UserPage 
            data={this.state} 
            handleChange={this.handleChange} 
            handlePage={this.handlePage}/>)
        }
        {this.state.page === 2 && (
          <UserAdress 
            data={this.state} 
            handleChange={this.handleChange} 
            handlePage={this.handlePage}/>)
        }
        {this.state.page === 3 && (
          <UserPayments 
            data={this.state} 
            handleChange={this.handleChange} 
            handlePage={this.handlePage}
            handleSubmit={this.handleSubmit} />)
        }
        {this.state.page === 4 && (
          <SuccessPage 
            data={this.state} 
            handleChange={this.handleChange} 
            handlePage={this.handlePage}/>)
        }
      </div>
    );
  }
}
export default App;
