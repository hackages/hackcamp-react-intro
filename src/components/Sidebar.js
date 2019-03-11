import React from 'react'

export const Sidebar  = ({isSidebarOpened, searchValue, search, toggleSideBar}) => (
  <div>
    <div className={`filter${isSidebarOpened ? ' filter-is-visible' : ''}`}>
      <form onSubmit={e => e.preventDefault()}>
        <div className="filter-block">
          <h4>Search</h4>
          <div className="filter-content">
            <input
              type="search"
              placeholder="title"
              value={searchValue}
              onChange={search}
            />
          </div>
        </div>
      </form>
      <a className="hand-cursor close-f" onClick={toggleSideBar}>Close</a>
    </div>

    <a className="hand-cursor filter-trigger" onClick={toggleSideBar}>
      Filters
    </a>
  </div>
)
