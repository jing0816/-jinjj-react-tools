import React, { Component } from 'react';

class Select extends Component {
  onClick() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <span>3333</span>
        <a onClick={this.onClick.bind(this)}>测试123</a>
      </div>
    );
  }
}

export default Select;