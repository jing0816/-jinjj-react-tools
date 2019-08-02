import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../src';

class Demo extends React.Component {
  componentDidMount () {}
  render(){
    return (
      <Select width={200} />
    );
  }
}
ReactDOM.render(
  <><Demo/></>,
  document.getElementById('root')
);