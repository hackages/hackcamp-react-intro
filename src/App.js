import React, {Component, Fragment} from 'react'
import filters from './mocks/filters'
import genres from './mocks/genres'
import './css/Header.css'
import movies from './mocks/movies'
import {FilterList} from './components/FilterList'
import {MovieList} from './components/MovieList'
import {Sidebar} from './components/Sidebar'
import {filterByCategory, filterBySearch} from './libs/utils'
import logo from './images/hackflix_logo.svg'

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
    //TODO 2: the newFilters array should reflect the user's click
    //You need to change the selected property of the filter that the user clicked
    const newFilters = this.state.filters
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
    //TODO 4: toggle the isSidebarOpened property when this function is called
  }

  //This function is called when a user types in the search bar
  search = ({target: {value}}) => {
    //TODO 5: Set the searchValue in the state and then call the filterMovies function
  }

  render() {
    //We desctructure the state object in differents variables
    const {filteredMovies, filters, isSidebarOpened, searchValue} = this.state
    return (
      <Fragment>
        {/* TODO 1: Extract the header below into it's own React component and use it here  */}
        <header>
          <img src={logo} alt="logo"/>
        </header>

        <main className="main-content">
          {/* The FilterList component will display the list of filters and the number of movies */}
          <FilterList
            filters={filters}
            selectTab={() => {
              //TODO 3: Pass the function to select the tab to the FilterList component
            }}
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
