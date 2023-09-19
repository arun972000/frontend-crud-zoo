import { useEffect, useState } from "react"
import { Url } from "../Url.js"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./body.css"


const Body = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const animals = async () => {
    const res = await axios.get(`${Url}/api/animals`)
    setData(res.data)
  }
  const Delete = async (id) => {
    try {
      await axios.delete(`${Url}/api/animals/delete/${id}`)
      animals()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    animals()
  }, [])

  return (
    <>
      <div className="text-center"><h2>Body</h2></div>
      <div className="container-fluid">
        <div className="row justify-content-center gx-4">
          {data.map(item => {
          return (<div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <Card >
              <div className="image-container">
              <Card.Img variant="top" className="zoom-image"src={item.imageUrl} />
              </div>
              <Card.Body className="text-center">
                <Card.Title>{item.type}</Card.Title>
                <Card.Text>Name: {item.name}</Card.Text>
                <Card.Text>Gender: {item.gender}</Card.Text>
                <div className="row">
                  <div className="col"><i className="fa-solid fa-pen-to-square fa-2x" style={{cursor: "pointer"}} onClick={() => navigate(`edit/${item.id}`)}></i></div>
                  <div className="col"><Button variant="primary">Visit</Button></div> 
                  <div className="col"><i className="fa-solid fa-trash fa-2x" onClick={() => Delete(item.id)} style={{ color: "#e40c17" ,cursor: "pointer"}}></i></div>
                </div>
              </Card.Body>
            </Card>
          </div>)
        })}
        </div>
      </div>

    </>
  )
}

export default Body