const React = require('react')
const { Link } = require('react-router')
const { func, bool, string } = React.PropTypes
const { connector } = require('./Store')

const Header = React.createClass({
  propTypes: {
    setSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchTermEvent (e) {
    this.props.setSearchTerm(e.target.value)
  },
  render () {
    console.log(this.props.searchTerm) // this tests the store connection
    let utilSpace // initializing it would add a little extra unnecessary
    if (this.props.showSearch) {
      utilSpace = (
        <input
          type='text' className='search-input' placeholder='search'
          value={this.props.searchTerm}
          onChange={this.handleSearchTermEvent}
        />
      )
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'> nvanvideo </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

module.exports = connector(Header) // magically connects to Redux store
