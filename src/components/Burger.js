import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Burger.css';

class Burger extends Component {
  renderBurgerItem = (item) => {
    const { burger } = this.props.burgerReducer;
    const itemsArray = [];

    for (let i = 1; i <= burger[item]; i++) {
      itemsArray.push(<div key={i} className={item}></div>);
    }

    return itemsArray;
  };

  render() {
    return (
      <>
        <h2 className="my-5 text-danger">Bánh burger của bạn</h2>
        <div>
          <div className="breadTop"></div>
          {this.renderBurgerItem('salad')}
          {this.renderBurgerItem('cheese')}
          {this.renderBurgerItem('beef')}
          <div className="breadBottom"></div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ burgerReducer }) => ({
  burgerReducer,
});

export default connect(mapStateToProps)(Burger);
