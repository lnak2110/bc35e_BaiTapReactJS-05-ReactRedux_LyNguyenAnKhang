import React, { Component } from 'react';
import Burger from './Burger';
import Table from './Table';

export default class Home extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1 className="mt-3">BÀI TẬP BURGER</h1>
        <div className="row mt-4">
          <div className="col-6">
            <Burger />
          </div>
          <div className="col-6">
            <Table />
          </div>
        </div>
      </div>
    );
  }
}
