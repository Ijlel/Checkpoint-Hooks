import React, { useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Filter = ({setFilterTitle,setFilterRating}) => {
const filterTitleRef = useRef(null);
const filterRatingRef = useRef(null);
  return (
<Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Title"
              className=" mr-sm-2"
              ref={filterTitleRef}
              onChange={()=>setFilterTitle(filterTitleRef.current.value)}
              
            />

          </Col>
          <Col xs="auto">
          <Form.Control
              type= "number"
              placeholder="rating"
              className=" mr-sm-2"
              ref={filterRatingRef}
              onChange={()=>setFilterRating(Number(filterRatingRef.current.value))}
            />
          </Col>
          <Col xs="auto">
            {/* <Button type="submit">Filtre</Button> */}
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}
export default Filter