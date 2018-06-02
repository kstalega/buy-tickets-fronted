import React from 'react';
import { connect } from 'react-redux';
import { ActionsOrdersFetchAll } from '../../actions';

function renderSingleOrder(order) {
  console.log(order);

  return (
    <li className="list-group-item">
      ID: { order.orderID }, Tickets number: { order.bookings.length}, User ID: { order.userID }
    </li>
  );
}

class ShowOrders extends React.Component {
  componentDidMount() {
    this.props.ActionsOrdersFetchAll();
  }

  render() {
    //console.log('props');
    //console.log(this.props);
    return (
      <div className="col-sm-12">
        <div className="panel panel-default">
          <div className="panel-body">
            <h2>All orders</h2>
            <ul className="list-group">
            {
              this.props.orders.map((order) => renderSingleOrder(order))
            }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log('state');
  //console.log(state);
  return {
    orders: state.orders.all_orders,
  };
};

export default connect(mapStateToProps, { ActionsOrdersFetchAll })(ShowOrders);
