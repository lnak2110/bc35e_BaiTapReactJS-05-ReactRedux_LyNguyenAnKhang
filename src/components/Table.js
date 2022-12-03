import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  giamThucAnAction,
  tangThucAnAction,
} from '../redux/actions/burgerActions';

class Table extends Component {
  renderTable = () => {
    const { burger, menu } = this.props.burgerReducer;
    const itemsArray = [];
    let totalPrice = 0;

    for (const item in burger) {
      const itemJSX = (
        <tr key={item}>
          <td>{item}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                const action = tangThucAnAction(item);
                this.props.dispatch(action);
              }}
            >
              +
            </button>
            <span className="mx-3">{burger[item]}</span>
            <button
              className="btn btn-danger"
              onClick={() => {
                const action = giamThucAnAction(item);
                this.props.dispatch(action);
              }}
            >
              -
            </button>
          </td>
          <td>{menu[item]}</td>
          <td>{burger[item] * menu[item]}</td>
        </tr>
      );

      itemsArray.push(itemJSX);
      totalPrice += burger[item] * menu[item];
    }
    return { itemsArray, totalPrice };
  };

  render() {
    return (
      <>
        <h2 className="my-5 text-success">Chọn thức ăn</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th></th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable().itemsArray}
            <tr>
              <td></td>
              <td></td>
              <td>Tổng cộng</td>
              <td>{this.renderTable().totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = ({ burgerReducer }) => ({
  burgerReducer,
});

export default connect(mapStateToProps)(Table);
