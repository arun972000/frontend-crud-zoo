import { useState } from "react"
import { useNavigate} from "react-router-dom"
import axios from "axios"
import { Url } from "../../Url.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Create = () => {
const navigate=useNavigate()
    const [formData,setFormData]=useState({
        name:"",
        type:"",
        imageUrl:"",
        gender:""
    })

   
    const postApi=async()=>{
      await axios.post(`${Url}/api/animals/add`,formData)
    }

    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
const handleSubmit=(e)=>{
    e.preventDefault();
    postApi()
    navigate("/")
}
  return (
    <Container>
    <Row className="justify-content-center">
      <Col md={6}>
        <h2 className="text-center">Animal Form</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="type">
            <Form.Label>Type:</Form.Label>
            <Form.Control
              type="text"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Label>Gender:</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="imageUrl">
            <Form.Label>Image URL:</Form.Label>
            <Form.Control
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default Create