import React from 'react';
import jQuery from 'jquery';
import { Paper } from 'material-ui';
import APIsConfig from '../../configs/api';

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      events: [],
    };

    this.eventsFetched = this.eventsFetched.bind(this);
    this.tryToGetEvents = this.tryToGetEvents.bind(this);
  }

  componentDidMount() {
    this.tryToGetEvents();
  }

  eventsFetched() {
    this.setState({
      isLoaded: true,
    });

    console.log(this.state);
  }

  tryToGetEvents() {
    const type = APIsConfig.events.getEvents.method;
    const url = APIsConfig.events.url + APIsConfig.events.getEvents.endPoint;
    jQuery.ajax({
      type,
      url,
      complete: this.eventsFetched,
    });
  }

  render() {
    return (
      <Paper>

      </Paper>
    );
  }
}

export default EventsList;