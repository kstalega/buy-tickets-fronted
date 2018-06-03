import React from 'react';
import Ticket from '../Ticket/Ticket';
import './TicketList.css';

class TicketsList extends React.Component {
  render() {
    return (
      <div>
        <h4>List of tickets</h4>
        <ul className="ticket-list">
        {
          this.props.tickets.map((ticket) => {
            return (<Ticket ticket={ticket} key={ticket.id} />);
          })
        }
        </ul>
      </div>
    );
  }
}

export { TicketsList };
