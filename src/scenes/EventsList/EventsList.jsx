import React from 'react';
import jQuery from 'jquery';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import APIsConfig from '../../configs/api';
import { EventActionDeleteTry } from '../../actions';
import { getAuthHeader } from '../../services/AuthService';
import PrivateElement from '../../components/PrivateElement';
import './EventList.css';

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isLoading: false,
      events: [],
    };

    this.eventsFetched = this.eventsFetched.bind(this);
    this.tryToGetEvents = this.tryToGetEvents.bind(this);
  }

  componentDidMount() {
    this.tryToGetEvents();
  }

  eventsFetched(response) {
    this.setState({
      isLoaded: true,
      isLoading: false,
      events: response.result,
    });
  }

  tryToGetEvents() {
    this.setState({
      isLoading: true,
    });

    const headers =
      APIsConfig.orders.fetchAllOrders.authenticationNeeded
        ? getAuthHeader()
        : {};


    const type = APIsConfig.events.getEvents.method;
    const url = APIsConfig.events.url + APIsConfig.events.getEvents.endPoint;
    jQuery.ajax({
      type,
      url,
      success: this.eventsFetched,
      dataType: 'json',
      headers,
    });
  }

  renderIf(event, element, cancelled = true) {
    if (cancelled) {
      if (event.status.toLowerCase() === 'canceled') {
        return element;
      }
    } else {
      if (event.status.toLowerCase() !== 'canceled') {
        return element;
      }
    }
    return null;
  }

  renderChooseSeats(event) {
    if (event.status.toLowerCase() !== 'canceled') {
      return (
        <Link to={`/event/${ event.id}` } className="btn btn-default pull-right">Choose Seats</Link>
      )
    }
    return null;
  }

  renderEvent(event, index) {
    return (
      <div className="event" key={index}>
        <div className={'panel panel-success ' + this.renderIf(event, 'cancelled')}>
          <div className="panel-heading clearfix">
            <h2 className="panel-title pull-left">{event.name}</h2>
            {this.renderChooseSeats(event)}
          </div>
          <div className="panel-body clearfix">
            <ul>
              <li>Artist: { event.artist }</li>
              <li>Addres: { event.eventAddress }</li>
              <li>Date: { event.date }</li>
              <li>Organizer: { event.organizer }</li>
              <li>Regular tickets number: { event.regularTicketsNumber }</li>
              <li>Premium tickets number: { event.premiumTicketsNumber }</li>
              <li>Status: { event.status }</li>
            </ul>

            {this.renderIf(event,
              <PrivateElement neededpermission="1">
                <button
                  type="button"
                  className="btn btn-danger pull-right"
                  onClick={() => {
                    this.props.EventActionDeleteTry(event.id, this.tryToGetEvents.bind(this));
                  }}
                >
                Cancel
                </button>
              </PrivateElement>,
              false,
            )}

          </div>
        </div>
      </div>
    );
  }

  render() {
    const { events } = this.state;

    return (
      <div className="col-sm-12">
        <div className="eventlist">
          {events.map((event, index) =>
            this.renderEvent(event, index))}
        </div>
      </div>
    );
  }
}

export default connect(null, { EventActionDeleteTry })(EventsList);
