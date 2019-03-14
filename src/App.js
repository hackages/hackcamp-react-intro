import React, {Component, Fragment} from 'react'
import filters from './mocks/filters'
import genres from './mocks/genres'
import './css/Header.css'
import movies from './mocks/movies'
import {FilterList} from './components/FilterList'
import {MovieList} from './components/MovieList'
import {Sidebar} from './components/Sidebar'
import {Header} from './components/Header'
import {filterByCategory, filterBySearch} from './libs/utils'

const ALL = 'All'

export class App extends Component {
  // We initialize the state with default values
  state = {
    //The movies are coming from the mock file, look at the import
    movies,
    //The filteredMovies is the one containing the movies after applying the filters
    filteredMovies: movies,
    //The filters are the one showing above the list in the application
    filters,
    //The genres are coming from the mocks, they are used for the filtering
    genres,
    //This property is used to keep the state of the sidebar
    isSidebarOpened: false,
    //searchValue is where we store the user's search input
    searchValue: '',
  }

  //This function is called when the user clicks on a filter
  selectTab = category => {
    //You need to change the selected property of the filter that the user clicked
    const newFilters = this.state.filters.map(filter => {
      filter.selected = filter.category === category
      return filter;
    })
    this.setState({filters: newFilters}, this.filterMovies)
  }

  //This is the main filtering part of the Movie's list
  //It filters the list by the searchValue and the selected category
  filterMovies = () => {
    const {movies, filters, genres, searchValue} = this.state
    const selectedFilter = filters.find(filter => filter.selected).category

    //If the user clicks on ALL, we only want to filter by the searchValue
    if (selectedFilter === ALL) {
      const filteredMovies = filterBySearch(movies, searchValue)
      return this.setState({filteredMovies})
    }

    //We get the id of the selected genre, to be able to filter the movies
    const idOfGenreSelected = genres.find(genre => genre.name === selectedFilter).id
    const filteredMoviesBeforeSearch = filterByCategory(movies, idOfGenreSelected)

    //We get the final filteredMovies list after applying all the filters
    const filteredMovies = filterBySearch(filteredMoviesBeforeSearch, searchValue)
    this.setState({filteredMovies})

  }

  //Function used to toggle the state of the sidebar, containing the search
  toggleSideBar = () => {
    this.setState({ isSidebarOpened: !this.state.isSidebarOpened })
  }

  //This function is called when a user types in the search bar
  search = ({target: {value}}) => {
    this.setState({
      searchValue: value
    }, this.filterMovies)
  }

  render() {
    //We desctructure the state object in differents variables
    const {filteredMovies, filters, isSidebarOpened, searchValue} = this.state
    return (
      <Fragment>
        <Header />

        <main className="main-content">
          {/* The FilterList component will display the list of filters and the number of movies */}
          <FilterList
            filters={filters}
            selectTab={this.selectTab}
            count={filteredMovies.length}/>

          {/* This is the main component, that displays the list of movies  */}
          <MovieList
            filteredMovies={filteredMovies}
            isSidebarOpened={isSidebarOpened}/>

          {/* The sidebar is the one containing the search input  */}
          <Sidebar
            isSidebarOpened={isSidebarOpened}
            searchValue={searchValue}
            search={this.search}
            toggleSideBar={this.toggleSideBar}
          />
        </main>
      </Fragment>
    )

  }
}
