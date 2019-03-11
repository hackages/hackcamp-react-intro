import React from 'react'
import {Movie} from './Movie'

export const MovieList  = ({filteredMovies, isSidebarOpened}) => (
  <section className={`gallery${isSidebarOpened ? ' filter-is-visible' : ''}`}>
    {filteredMovies.map(movie =>
      <Movie key={movie.id} data={movie}/>,
    )}
  </section>
)
