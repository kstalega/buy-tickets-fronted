import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>
  (
    <section>
      <div className="col-sm-12">
        <div className="panel panel-default">
          <div className="panel-body">
            <h1>Home!</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="jumbotron text-center">
          <h2>Unforgettable Events</h2>
          <Link className="btn btn-lg btn-success" to="/events/show">Check them out!</Link>
        </div>
      </div>
    </section>
  );

export default Home;
