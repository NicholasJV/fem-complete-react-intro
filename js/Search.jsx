const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object, string } = React.PropTypes
const { connector } = require('./Store')

const Search = React.createClass({
// For reference, these were the pre-Redux state handling functions:
  // getInitialState () { return { searchTerm: '' } },
  // handleSearchTermChange (searchTerm) { this.setState({ searchTerm: searchTerm })},
  // =-=-= These props would go in Header:
    // handleSearchTermChange={this.handleSearchTermChange}
    // searchTerm={this.state.searchTerm}
  // in filter function, searchTerm moved from this.state to this.props
  propTypes: {
    route: object,
    searchTerm: string // comes from Redux, ya heard?
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch /* defaults to true */ />
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase()
            .indexOf(this.props.searchTerm.toUpperCase()) >= 0)
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

module.exports = connector(Search)
