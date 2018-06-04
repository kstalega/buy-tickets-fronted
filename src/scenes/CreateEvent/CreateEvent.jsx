import React from 'react';
import { connect } from 'react-redux';
import { EventActionCreateTry } from '../../actions';
import Input from '../../components/Input/Input';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.tryToCreateEvent = this.tryToCreateEvent.bind(this);
  }

  defaultState = {
    form: {
      artist: 'Krzysztof Krawczyk',
      date: '2018-07-10T19:30:00',
      eventAddress: 'Koszykowa 15',
      eventType: 'Koncert',
      name: 'Krzychu, 100 lat!',
      organizer: 'Urząd miasta',
      premiumTicketsNumber: '20',
      regularTicketsNumber: '50',
      resignationPeriod: '5',
      status: 'AVAILABLE',
    },
  }

  handleInputChange(event) {
    const { value, name } = event.target;

    this.setState((prevState, props) => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  }

  tryToCreateEvent() {
    this.props.EventActionCreateTry(this.state.form);
  }

  renderWaitinMessage() {
    if (this.props.formInProgress) {
      return (
        <div className="alert alert-success" role="alert">
          Please wait, we attempt to create new event
        </div>
      )
    }
    return null;
  }

  renderWarning() {
    if (this.props.message) {
      return (
        <div className="alert alert-info" role="alert">
          {this.props.message}
        </div>
      )
    }
    return null;
  }

  render() {
    return (
      <div className="col-sm-12">
        <div className="panel panel-default">
          <div className="panel-body">
            <h1>Add new event</h1>
            {this.renderWaitinMessage()}
            {this.renderWarning()}
            <Input
              placeholder="Artist"
              name="artist"
              onChange={this.handleInputChange}
              value={this.state.form.artist}
            />
            <Input
              placeholder="Date"
              name="date"
              onChange={this.handleInputChange}
              value={this.state.form.date}
            />
            <Input
              placeholder="Event address"
              name="eventAddress"
              onChange={this.handleInputChange}
              value={this.state.form.eventAddress}
            />
            <Input
              placeholder="Event type"
              name="eventType"
              onChange={this.handleInputChange}
              value={this.state.form.eventType}
            />
            <Input
              placeholder="Name"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.form.name}
            />
            <Input
              placeholder="Organizer"
              name="organizer"
              onChange={this.handleInputChange}
              value={this.state.form.organizer}
            />
            <Input
              placeholder="Premium tickets number"
              name="premiumTicketsNumber"
              onChange={this.handleInputChange}
              value={this.state.form.premiumTicketsNumber}
            />
            <Input
              placeholder="Regular tickets number"
              name="regularTicketsNumber"
              onChange={this.handleInputChange}
              value={this.state.form.regularTicketsNumber}
            />
            <Input
              placeholder="Resignation period"
              name="resignationPeriod"
              onChange={this.handleInputChange}
              value={this.state.form.resignationPeriod}
            />
            <Input
              placeholder="Status"
              name="status"
              onChange={this.handleInputChange}
              value={this.state.form.status}
            />
            <div className="form-group">
              <button
                type="button"
                className="btn btn-success"
                onClick={this.tryToCreateEvent}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { formInProgress, message } = state.event.create;

  return {
    formInProgress, message,
  };
};

export default connect(mapStateToProps, { EventActionCreateTry })(SignUp);
