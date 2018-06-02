import React from 'react';
import { connect } from 'react-redux';
import { ActionEventBuyTicket } from '../../../actions';
import { getUserID } from '../../../services/AuthService';

class Ticket extends React.Component {
  render() {
    const { id: ticketID, status, type, eventID } = this.props.ticket;
    return (
      <div>
        Ticket ID: {ticketID}, Status: {status}, type: {type}
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.props.ActionEventBuyTicket(getUserID(), ticketID, eventID)}
        >
          Buy
        </button>
      </div>
    );
  }
};

export default connect(null, { ActionEventBuyTicket })(Ticket);