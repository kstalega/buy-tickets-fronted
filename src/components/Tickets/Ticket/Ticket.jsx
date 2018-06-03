import React from 'react';
import { connect } from 'react-redux';
import { ActionEventBuyTicket } from '../../../actions';
import { getUserID } from '../../../services/AuthService';
import './Ticket.css';

function classBasedOnStatus(status) {
  return status.toLowerCase();
}

class Ticket extends React.Component {
  render() {
    const { id: ticketID, status, type, eventID } = this.props.ticket;
    return (
      <li className={ 'list-group-item ticket col-xs-3 ' + classBasedOnStatus(status) }>
        <div>
          Ticket ID: {ticketID}, Status: {status}, type: {type}
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.props.ActionEventBuyTicket(getUserID(), ticketID, eventID)}
        >
          Buy
        </button>
      </li>
    );
  }
};

export default connect(null, { ActionEventBuyTicket })(Ticket);