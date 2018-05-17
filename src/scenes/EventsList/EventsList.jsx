import React from 'react';
import jQuery from 'jquery';
import APIsConfig from '../../configs/api';

function renderEvent(event, index) {
  return (
    <div className="col-sm-6" key={index}>
      <div className="panel panel-success">
        <div className="panel-heading">
          <h2 className="panel-title">{ event.name }</h2>
        </div>
        <div className="panel-body">
          <ul>
            <li>Artist: { event.artist }</li>
            <li>Addres: { event.eventAddress }</li>
            <li>Date: { event.date }</li>
            <li>Organizer: { event.organizer }</li>
            <li>Regular tickets number: { event.regularTicketsNumber }</li>
            <li>Premium tickets number: { event.premiumTicketsNumber }</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

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

  eventsFetched(events) {
    this.setState({
      isLoaded: true,
      isLoading: false,
      events,
    });
  }

  tryToGetEvents() {
    this.setState({
      isLoading: true,
    });

    const type = APIsConfig.events.getEvents.method;
    const url = APIsConfig.events.url + APIsConfig.events.getEvents.endPoint;
    jQuery.ajax({
      type,
      url,
      success: this.eventsFetched,
      dataType: 'json',
    });
  }

  render() {
    const { events } = this.state;

    return (
      <div>
        {events.map((event, index) =>
          renderEvent(event, index))}
      </div>
    );
  }
}

export default EventsList;
