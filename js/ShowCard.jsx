const React = require('react')

const ShowCard = (props) => (
  <div className='show-card'>
    <img src={`public/img/posters/${props.poster}`} className='show-card-img' />
    <div className='show-card-text'>
      <h3 className='show-card-title'>{props.title}</h3>
      <h3 className='show-card-year'>{props.year}</h3>
      <p className='show-card-description'>{props.description}</p>
      <p>ID: {props.key}</p>
    </div>
  </div>
)

var { string } = React.PropTypes

ShowCard.propTypes = {
  poster: string,
  title: string,
  year: string,
  description: string,
  key: string
}

module.exports = ShowCard
