import React, { useState } from 'react';
import '../../css/welcome.css';
import Search from '../utils/search/Search';
import SampleFlights from '../utils/SampleFlights';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import { useHistory } from 'react-router-dom';
import Trending from '../utils/Trending';

const Welcome = () => {
  const [roundTrip, setRoundTrip] = useState(true);
  const [oneWay, setOneWay] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleChangeOneWay = () => {
    setRoundTrip(false);
    setOneWay(true);
  };

  const handleChangeRoundTrip = () => {
    setRoundTrip(true);
    setOneWay(false);
  };

  let history = useHistory();
  const onSubmit = (value) => {
    if (oneWay) {
      delete value.returnDate;
    }
    delete value.oneWay;
    delete value.roundTrip;
    history.push({
      pathname: `/list/flights`,
      state: value,
    });
  };
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="banner-body">
            {!user ? (
              <div className="signin">
                Signin or Signup before booking your flight
              </div>
            ) : (
              <Search
                onSubmit={onSubmit}
                handleChangeOneWay={handleChangeOneWay}
                handleChangeRoundTrip={handleChangeRoundTrip}
                roundTrip={roundTrip}
                oneWay={oneWay}
              />
            )}
          </div>
        </div>
      </div>
      <SampleFlights user={user} />
      <Trending />
    </div>
  );
};

export default connect(null, actions)(Welcome);
