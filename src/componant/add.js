import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
const AddMovie = ({ addfilm }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    let filmtoadd = {
      name: name,
      url: image,
      id: Math.random(),
    };
    addfilm(filmtoadd);
    setImage("");
    setName("");
    setShow(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your new film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>name :</Form.Label>
            <Form.Control
              type="text"
              placeholder="add the name of film"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>put the url of the image :</Form.Label>
            <Form.Control
              type="text"
              placeholder="add the url picture of movie"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
