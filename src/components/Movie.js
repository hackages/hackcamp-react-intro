import React from 'react';
import PropTypes from 'prop-types';
import '../css/movie.css';
import {PICTURES_CDN_URL} from '../constants/urls';

export const Movie = ({data}) => {
  return (
    <div className="movie">
      <img
        alt={`${data.title}'s cover`}
        src={PICTURES_CDN_URL + data.poster_path}
      />
    </div>
  );
};

Movie.propTypes = {
  data: PropTypes.object.isRequired,
};
