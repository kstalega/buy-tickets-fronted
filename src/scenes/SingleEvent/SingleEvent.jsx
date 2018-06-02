import React from 'react';
import { connect } from 'react-redux';
import { ActionEventsGetTicketsForEvent } from '../../actions';

class SingleEvent extends React.Component {
  componentDidMount() {
    this.props.ActionEventsGetTicketsForEvent( this.props.match.params.eventID );
  }

  render() {
    console.log(this.props);
    return (
      <div className="col-sm-12">
        <div>Single event view {this.props.match.params.eventID || 'No ID' }</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {

  };
}

export default connect(
  mapStateToProps,
  { ActionEventsGetTicketsForEvent },
)(SingleEvent);
