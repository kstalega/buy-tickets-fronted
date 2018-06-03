import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActionEventsGetTicketsForEvent } from '../../actions';
import { TicketsList } from '../../components/Tickets';

class SingleEvent extends React.Component {
  componentDidMount() {
    this.props.ActionEventsGetTicketsForEvent( this.props.match.params.eventID );
  }

  render() {
    return (
      <div className="col-sm-12">
        <div className="panel panel-default">
          <div className="panel-body">
            <Link to="/events/show" className="btn btn-default">Return to list of all events</Link>
            <h2>Single event view {this.props.match.params.eventID || 'No ID' }</h2>

            <TicketsList tickets={this.props.ticketList} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ event }) => {
  return {
    ticketList: event.singleEvent.ticketList,
  };
}

export default connect(
  mapStateToProps,
  { ActionEventsGetTicketsForEvent },
)(SingleEvent);
