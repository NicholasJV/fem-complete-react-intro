const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const { Router, Route, IndexRoute, hashHistory: hh } = require('react-router')
const { shows } = require('../public/data')

const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter((show) => show.imdbID === nextState.params.id)
    if (showArray.length < 1) {
      // sort like redirect, replace method sends them back to home if there is no show
      return replace('/')
    }
    Object.assign(nextState.params, showArray[0])
    return nextState
  },
  render () {
    return (
      <Router history={hh}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={shows} />
          <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
          {/*  onEnter prop runs the specified function anytime it enters the route */}
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
