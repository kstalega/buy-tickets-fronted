import React from 'react';
import { connect } from 'react-redux';
import { ActionEventBuyTicket } from '../../../actions';
import { getUserID } from '../../../services/AuthService';
import './Ticket.css';

function classBasedOnStatus(status) {
  return status.toLowerCase();
}

class Ticket extends React.Component {
  renderTicketType() {
    if (this.props.ticket.type.toLowerCase() === 'premium') {
      return (
        <span className="label label-warning">{this.props.ticket.type.toLowerCase()}</span>
      )
    }

    return (
      <span className="label label-default">
        {this.props.ticket.type.toLowerCase()}
      </span>
    )
  }

  renderBuyButton() {
    const { id: ticketID, status, eventID } = this.props.ticket;
    if (status.toLowerCase() === 'occupied') {
      return (null);
    }

    return (
      <button
        type="button"
        className="btn btn-success pull-right"
        onClick={() => this.props.ActionEventBuyTicket(getUserID(), ticketID, eventID)}
      >
        Buy
      </button>
    );
  }

  render() {
    const { id: ticketID, status, type, eventID } = this.props.ticket;
    return (
      <li className={ 'ticket-container ' + classBasedOnStatus(status) }>
        <div className="ticket">
          <div>
            <span className="id">ID: #{ticketID}</span><br />
            {this.renderTicketType()}
          </div>
          {this.renderBuyButton()}
        </div>
      </li>
    );
  }
};

export default connect(null, { ActionEventBuyTicket })(Ticket);