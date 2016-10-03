/* eslint-env mocha */
// only for linting, tells eslint that this is a mocha test file,
// so it

const React = require('react')
const chai = require('chai')
const { expect } = chai
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const enzyme = require('enzyme')
const { shallow, mount } = enzyme
const { shows } = require('../public/data')
const { store, rootReducer } = require('../js/Store')

xdescribe('<Search />', () => {
  // ^Search tag above^ is just a label/identifier for the component,
  // something descriptive as a note-to-dev-self
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>nvanvideo</h1>)).to.be.true
  })

  it('should render as many shows as exist in data', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change') // fires onChange event in React
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
      // this is an indirect test, testing filter function

  })

  xit('should pass', () => {
    expect(1 + 1 === 2).to.be.true
  })
})

// Testing Redux is easier and more effective than
describe('Store', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, {type: '@@redux/INIT'})
    expect(state).to.deep.equal({ searchTerm: '' })
  })
  it('should handle setSearchTerm actions', () => {
    const state = rootReducer(
      {searchTerm: 'some random string'},
      {type: 'setSearchTerm', value: 'correct string'}
    )
    expect(state).to.deep.equal({ searchTerm: 'correct string' })
  })
})

/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

const React = require('react')
const chai = require('chai')
const { expect } = chai
const Search = require('../js/Search')
const enzyme = require('enzyme')
const { render } = enzyme
const data = require('../public/data')
const ReactRedux = require('react-redux')
const { Provider } = ReactRedux
const Header = require('../js/Header')
const Store = require('../js/Store')
const { store, reducer } = Store

describe('<Header />', () => {
  it('should render the brand', () => {
    const wrapper = render(<Header store={store} />)
    expect(wrapper.find('h1.brand').text()).to.equal('svideo')
  })
})

describe('<Search />', () => {
  const mockRoute = {
    shows: data.shows
  }

  it('should render as many shows as there are data for', () => {
    const wrapper = render(<Provider store={store}><Search route={mockRoute} /></Provider>)
    expect(wrapper.find('div.show-card').length).to.equal(data.shows.length)
  })

  it('should filter correctly given new state', () => {
    store.dispatch({type: 'setSearchTerm', value: 'house'})
    const wrapper = render(<Provider store={store} ><Search route={mockRoute} /></Provider>)
    expect(wrapper.find('div.show-card').length).to.equal(2)
  })
})

describe('Store', () => {
  it('should bootstrap', () => {
    const state = reducer(undefined, { type: '@@redux/INIT' })
    expect(state).to.deep.equal({ searchTerm: '', shows: data.shows })
  })

  it('should handle setSearchTerm actions', () => {
    const state = reducer({searchTerm: 'some random string'}, {type: 'setSearchTerm', value: 'correct string'})
    expect(state).to.deep.equal({searchTerm: 'correct string'})
  })
})

*/
