const React = require('react')
const ShowCard = require('./ShowCard')
// const { Link } = require('react-router')
const { object } = React.PropTypes
const Header = require('./Header')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm: searchTerm })
  },
  render () {
    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch // defaults to true
        />
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
