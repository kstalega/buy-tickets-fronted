import React from 'react';
import { Link } from 'react-router-dom';
import PrivateElement from '../../components/PrivateElement';

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
          <PrivateElement>
            <div>Discount for signed user! <br /><br /></div>
          </PrivateElement>
          <Link className="btn btn-lg btn-success" to="/events/show">Check them out!</Link>
        </div>
      </div>
    </section>
  );

export default Home;
