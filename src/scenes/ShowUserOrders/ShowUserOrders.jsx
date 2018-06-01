import React from 'react';
import { connect } from 'react-redux';
import { ActionsOrdersFetchByUserID } from '../../actions';

class ShowOrders extends React.Component {
  componentDidMount() {
    this.props.ActionsOrdersFetchByUserID();
  }

  render() {
    return (
      <div>Test by user ID</div>
    );
  }
}

export default connect(null, { ActionsOrdersFetchByUserID })(ShowOrders);
