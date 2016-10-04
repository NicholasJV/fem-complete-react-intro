const redux = require('redux')
const reactRedux = require('react-redux')
const { shows } = require('../public/data')

const SET_SEARCH_TERM = 'setSearchTerm'

const initialState = {
  searchTerm: '',
  shows
}

const rootReducer = (state = initialState, action) => {
  // state = state || initialState
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action)
  // need a default in case the input isn't coming propertly!
    default:
      return state
  }
}

const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  // These props get put on whatever component we call connector() on
  return {
  // would spread operator work? {...state} ?
    searchTerm: state.searchTerm,
    shows: state.shows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (searchTerm) {
      dispatch({ type: SET_SEARCH_TERM, value: searchTerm })
    }
  }
}

// to use in React component:
  // this.props.setSearchTerm('house')

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
