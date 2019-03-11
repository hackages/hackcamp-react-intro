//Utility function that filter a list of movies by a search term
export const filterBySearch = (movies, searchValue) => {
  const loweredSearchValue = searchValue.toLowerCase()
  return movies.filter(movie => movie.title.toLowerCase().includes(loweredSearchValue))
}

//Utility function that filters a list of movies by an id of genre
export const filterByCategory = (movies, idOfGenreSelected) => {
  return movies.filter(movie => movie.genre_ids.includes(idOfGenreSelected))
}