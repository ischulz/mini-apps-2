import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const data = [
  { 
  time_period_start: '2016-01-01T00:00:00.0000000Z',
  time_period_end: '2016-02-01T00:00:00.0000000Z',
  time_open: '2016-01-01T00:01:01.1500000Z',
  time_close: '2016-01-31T23:59:10.4630000Z',
  price_open: 430.89,
  price_high: 465,
  price_low: 352,
  price_close: 368.49,
  volume_traded: 289416.51588853,
  trades_count: 201329 },
 { 
  time_period_start: '2016-02-01T00:00:00.0000000Z',
  time_period_end: '2016-03-01T00:00:00.0000000Z',
  time_open: '2016-02-01T00:00:05.8030000Z',
  time_close: '2016-02-29T23:59:51.9730000Z',
  price_open: 368.49,
  price_high: 447.99,
  price_low: 365,
  price_close: 435.23,
  volume_traded: 216404.24875929,
  trades_count: 140013 },
 { 
  time_period_start: '2016-03-01T00:00:00.0000000Z',
  time_period_end: '2016-04-01T00:00:00.0000000Z',
  time_open: '2016-03-01T00:00:18.1670000Z',
  time_close: '2016-03-31T23:59:55.3130000Z',
  price_open: 436.75,
  price_high: 437.5,
  price_low: 382,
  price_close: 414.66,
  volume_traded: 156240.61737368,
  trades_count: 166381},
 {
  time_period_start: '2016-04-01T00:00:00.0000000Z',
  time_period_end: '2016-02-01T00:00:00.0000000Z',
  time_open: '2016-01-01T00:01:01.1500000Z',
  time_close: '2016-01-31T23:59:10.4630000Z',
  price_open: 430.89,
  price_high: 465,
  price_low: 352,
  price_close: 399.49,
  volume_traded: 289416.51588853,
  trades_count: 201329 },
 { 
  time_period_start: '2016-05-01T00:00:00.0000000Z',
  time_period_end: '2016-03-01T00:00:00.0000000Z',
  time_open: '2016-02-01T00:00:05.8030000Z',
  time_close: '2016-02-29T23:59:51.9730000Z',
  price_open: 368.49,
  price_high: 447.99,
  price_low: 365,
  price_close: 635.23,
  volume_traded: 216404.24875929,
  trades_count: 140013 },
 { 
  time_period_start: '2016-06-01T00:00:00.0000000Z',
  time_period_end: '2016-04-01T00:00:00.0000000Z',
  time_open: '2016-03-01T00:00:18.1670000Z',
  time_close: '2016-03-31T23:59:55.3130000Z',
  price_open: 436.75,
  price_high: 437.5,
  price_low: 382,
  price_close: 114.66,
  volume_traded: 156240.61737368,
  trades_count: 166381}
]

ReactDOM.render(<App />, document.getElementById('App'));
