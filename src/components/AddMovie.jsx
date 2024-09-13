import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AddMovie = ({ handleShow, show, handleClose, setNewMovie, newMovie, addMovie }) => {
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const ratingRef= useRef(null)
    const imgRef = useRef(null)
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input">
            <span> Title </span>
            <Form.Control
              type="text"
              placeholder="Title"
              className=" mr-sm-2"
              ref={titleRef}
              onChange={()=>setNewMovie({...newMovie, title: titleRef?.current?.value ?  titleRef.current.value : ''})}
            //   onChange={()=>setNewMovie({...newMovie, title: 'chouflihal'})}
            />
          </div>

          <div className="input">
            <span> Description</span>

            <Form.Control
              type="text"
              placeholder="Description"
              className=" mr-sm-2"
              marginTop="5"
              ref={descriptionRef}
              onChange={()=>setNewMovie({...newMovie, description: descriptionRef.current.value ?  descriptionRef.current.value : ''})}

            />
          </div>
          <div className="input">
            <span>Rating</span>
            <Form.Control
              type="Number"
              placeholder="Rate"
              className=" mr-sm-2"
              marginTop="5"
              ref={ratingRef}
              onChange={()=>setNewMovie({...newMovie, rating: ratingRef.current.value ? ratingRef.current.value : ''})}
            />
          </div>

          <div className="input">
            <span> ImageUrl</span>
            <Form.Control
              type="text"
              placeholder="Image"
              className=" mr-sm-2"
              marginTop="5"
              ref={imgRef}
              onChange={()=>setNewMovie({...newMovie, posterURL: imgRef.current.value})}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={ () => {addMovie(); handleClose()}}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
