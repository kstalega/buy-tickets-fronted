import React from 'react';
import { connect } from 'react-redux';
import { ActionsOrdersFetchByUserID } from '../../actions';
import { getUserID } from '../../services/AuthService';

function renderSingleOrder(order) {
  return (
    <li className="list-group-item">
      ID: { order.orderID }, Tickets number: { order.bookings.length}, User ID: { order.userID }
    </li>
  );
}

class ShowOrders extends React.Component {
  componentDidMount() {
    this.props.ActionsOrdersFetchByUserID(getUserID());
  }

  render() {
    return (
      <div className="col-sm-12">
        <div className="panel panel-default">
          <div className="panel-body">
            <h2>Your order</h2>
            <ul className="list-group">
              {
                this.props.user_orders.map((order) => renderSingleOrder(order))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user_orders: state.orders.user_orders,
  };
};

export default connect(
  mapStateToProps,
  { ActionsOrdersFetchByUserID },
)(ShowOrders);
