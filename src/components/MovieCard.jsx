import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MovieCard = ({movie}) => {
  return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterURL} style={{width:"100%", height:"150px"}} />
      <Card.Body>
        <Card.Title> Title : {movie.title}</Card.Title>
        <Card.Text>description : {movie.description}</Card.Text>
        <Card.Text>Rating {movie.rating}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MovieCard


