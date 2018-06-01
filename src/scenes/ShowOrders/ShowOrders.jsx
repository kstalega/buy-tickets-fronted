import React from 'react';
import { connect } from 'react-redux';
import { ActionsOrdersFetchAll } from '../../actions';

class ShowOrders extends React.Component {
  componentDidMount() {
    this.props.ActionsOrdersFetchAll();
  }

  render() {
    return (
      <div>Test</div>
    );
  }
}

export default connect(null, { ActionsOrdersFetchAll })(ShowOrders);
