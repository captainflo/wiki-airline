import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from '../actions';
import Loading from '../utils/Loading';

const ListFlights = (props) => {
  useEffect(() => {
    props.getListFlights(props.location.state);
  }, [props, props.getListFlights]);

  const listFlights = useSelector((state) => state.plane.listFlights);
  console.log(listFlights);

  if (!listFlights) {
    return <Loading />;
  } else if (listFlights.length === 0) {
    return <div>no flight</div>;
  }

  return <div>list flights</div>;
};

export default connect(null, actions)(ListFlights);
