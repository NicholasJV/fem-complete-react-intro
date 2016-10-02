const React = require('react')
const ShowCard = require('./ShowCard')
// const { shows } = require('../public/data')
const { Link } = require('react-router')
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'><Link to='/'>nvanvideo</Link></h1>
          <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase()
            .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
              // {...show} takes properties from the show passed in and assigns them all as element attributes
              // ex. show.description becomes description={show.description} on ShowCard
              // but it does all the properties automatically! nice ES6 'syntactic sugar'
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
