const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object, string } = React.PropTypes
const { connector } = require('./Store')

const Search = React.createClass({
  propTypes: {
    route: object,
    searchTerm: string // comes from Redux now, ya heard?
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
              // {...show} spread operator (see ES6 for explanation)
          ))}
        </div>
      </div>
    )
  }
})

module.exports = connector(Search)

/* *********************************************************************
For reference, these were the pre-Redux state handling functions:

  getInitialState () { return { searchTerm: '' } },
  handleSearchTermChange (searchTerm) { this.setState({ searchTerm: searchTerm })},

  =-=-= These props would go in Header:
    handleSearchTermChange={this.handleSearchTermChange}
    searchTerm={this.state.searchTerm}

  in filter function, searchTerm moved from this.state to this.props

  render () {
    return (

    }
  )

*/
