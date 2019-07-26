import React, { Component } from 'react';

class Select extends Component {
  onClick() {
    console.log(this);
  }

  render() {
    return (
      <a onClick={this.onClick.bind(this)}>测试123</a>
    );
  }
}

export default Select;